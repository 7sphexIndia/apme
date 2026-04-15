/**
 * Hero/CTA background video diagnostics.
 *
 * Disabled by default (so no console noise).
 * Enable temporarily by running:
 *   localStorage.setItem('apme_video_debug', '1')
 * Then reload. Disable with:
 *   localStorage.removeItem('apme_video_debug')
 */
export function isVideoDebugEnabled(): boolean {
  try {
    return typeof window !== 'undefined' && window.localStorage?.getItem('apme_video_debug') === '1'
  } catch {
    return false
  }
}

export const videoDebug = {
  log(scope: string, ...args: unknown[]) {
    if (isVideoDebugEnabled()) console.log(`[APME Video · ${scope}]`, ...args)
  },
  warn(scope: string, ...args: unknown[]) {
    if (isVideoDebugEnabled()) console.warn(`[APME Video · ${scope}]`, ...args)
  },
  error(scope: string, ...args: unknown[]) {
    if (isVideoDebugEnabled()) console.error(`[APME Video · ${scope}]`, ...args)
  },
}
