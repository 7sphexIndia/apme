import { useCallback, useEffect, useState } from 'react'
import Container from '../../common/Container'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'
import { fetchGalleryPublic } from '../../../lib/galleryApi'
import type { GalleryItem } from '../../../types/gallery'
import DarkIconTitle from '../../common/DarkIconTitle'

function isVideoUrl(url: string) {
  return /\.(mp4|webm)(\?|#|$)/i.test(url)
}

function EmptyGalleryMessage() {
  const adminBase = (import.meta.env.VITE_ADMIN_APP_URL as string | undefined)?.replace(/\/$/, '')
  if (adminBase) {
    return (
      <p className="text-body">
        No gallery items yet. Add entries in the{' '}
        <a href={`${adminBase}/login`} className="font-semibold text-secondary underline">
          admin dashboard
        </a>{' '}
        dashboard.
      </p>
    )
  }
  return (
    <p className="text-body">
      No gallery items yet. Add entries using the <strong>apme-admin</strong> app in this repo (
      <code className="rounded bg-light-bg px-1">npm run dev:admin</code>).
    </p>
  )
}

export function GallerySection() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchGalleryPublic()
      setItems(data)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not load gallery.')
      setItems([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  return (
    <section className="py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <Reveal>
            <Reveal className="mb-[30px]">
                <DarkIconTitle iconSrc="/img/gallery_tag.svg">Previous Conference</DarkIconTitle>
                </Reveal>
                <Reveal className="mb-[64px]">
                  <h2 className="font-heading text-[36px] leading-[46px] font-bold text-primary max-[991px]:text-[32px]">
                  Glimpses of <span className="text-secondary"> Previous Conference</span>
                  </h2>
              </Reveal>

            {loading ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse overflow-hidden rounded-[10px] bg-white"
                  >
                    <div className="aspect-video w-full bg-border" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="rounded-[10px] border border-border bg-light-bg px-6 py-8 text-body">
                <p className="m-0 font-medium text-primary">Gallery could not be loaded.</p>
                <p className="mt-2 text-sm">{error}</p>
                <button
                  type="button"
                  onClick={() => void load()}
                  className="mt-4 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
                >
                  Retry
                </button>
              </div>
            ) : items.length === 0 ? (
              <EmptyGalleryMessage />
            ) : (
              <div className="columns-2 gap-5 [column-fill:_balance] md:columns-3 lg:columns-5">
                {items.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="group relative mb-5 break-inside-avoid overflow-hidden rounded-[20px]"
                  >
                    <div className="h-[300px] overflow-hidden w-full">
                      {isVideoUrl(item.image) ? (
                        <video 
                          className="h-full w-full object-cover" 
                          controls 
                          preload="metadata" 
                          poster={item.thumbnail ?? undefined}
                        >
                          <source src={item.image} />
                        </video>
                      ) : (
                        <img
                          src={item.thumbnail ?? item.image}
                          alt={item.title ?? `Gallery ${item.year}`}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading={index === 0 ? undefined : 'lazy'}
                          fetchPriority={index === 0 ? 'high' : undefined}
                        />
                      )}
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                        <div className="text-base font-bold text-white leading-tight mb-1">{item.title ?? 'Untitled'}</div>
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                          <span className="text-xs font-semibold text-white/90 tracking-wider ">{item.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </Container>
      </Pad>
    </section>
  )
}
