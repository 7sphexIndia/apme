import https from 'node:https'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/** Proxied in dev/preview so MP4 is same-origin and CORP headers from Drive are not applied to the document. */
const DRIVE_VIDEO_UPSTREAM: Record<string, string> = {
  '/video/hero-video.mp4':
    'https://drive.usercontent.google.com/download?id=1OPrkA7dTGBx1CeehcFGxKkxoGfDTHhNJ&export=download',
  '/video/cta-video.mp4':
    'https://drive.usercontent.google.com/download?id=1VAmWeT4Fhf6IfQkTwPC7Py2DALmQvO0C&export=download',
}

const SKIP_OUT_HEADERS = new Set([
  'cross-origin-resource-policy',
  'cross-origin-embedder-policy',
  'content-security-policy',
])

function driveVideoProxyPlugin(): Plugin {
  const attach = (middlewares: { use: (fn: (req: any, res: any, next: any) => void) => void }) => {
    middlewares.use((req, res, next) => {
      const pathname = (req.url ?? '').split('?')[0] ?? ''
      const upstream = DRIVE_VIDEO_UPSTREAM[pathname]
      if (!upstream || (req.method !== 'GET' && req.method !== 'HEAD')) return next()

      const headers: Record<string, string> = {}
      const range = req.headers.range
      if (typeof range === 'string') headers.range = range

      const upstreamReq = https.request(
        upstream,
        { method: req.method, headers },
        (upstreamRes) => {
          res.statusCode = upstreamRes.statusCode ?? 502
          for (const [rawKey, rawVal] of Object.entries(upstreamRes.headers)) {
            if (rawVal === undefined) continue
            const key = rawKey.toLowerCase()
            if (SKIP_OUT_HEADERS.has(key)) continue
            if (Array.isArray(rawVal)) {
              for (const v of rawVal) res.appendHeader(rawKey, v)
            } else {
              res.setHeader(rawKey, rawVal)
            }
          }
          res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin')
          if (req.method === 'HEAD') {
            upstreamRes.resume()
            res.end()
          } else {
            upstreamRes.pipe(res)
          }
        },
      )
      upstreamReq.on('error', () => {
        if (!res.headersSent) {
          res.statusCode = 502
          res.end()
        } else {
          res.destroy()
        }
      })
      upstreamReq.end()
    })
  }

  return {
    name: 'apme-drive-video-proxy',
    enforce: 'pre',
    configureServer(server) {
      attach(server.middlewares)
    },
    configurePreviewServer(server) {
      attach(server.middlewares)
    },
  }
}

// https://vite.dev/config/
// Deploy the `dist` folder to your add-on domain docroot (e.g. public_html/apmeconf.com).
// Keep `base` as `/` when that folder is the site root for https://apmeconf.com/
export default defineConfig({
  plugins: [driveVideoProxyPlugin(), react()],
  base: '/',
  server: {
    proxy: {
      // PHP backend: run `php -S 127.0.0.1:8080 -t apme-backend` then use VITE_API_BASE_URL=/apme-api in .env
      '/apme-api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apme-api/, ''),
      },
    },
  },
  preview: {
    proxy: {
      '/apme-api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apme-api/, ''),
      },
    },
  },
})
