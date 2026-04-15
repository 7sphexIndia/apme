import { useEffect, useMemo, useRef, useState } from 'react'
import { HERO_VIDEO_SRC } from '../../../constants/videos'
import { videoDebug } from '../../../debug/videoConsole'
import { isHeroVideoPrimed, markHeroVideoPrimed } from '../../../session/videoPrimed'
import { ButtonLink } from '../../common/ButtonLink'
import Container from '../../common/Container'
import { Pad } from '../../common/Pad'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Reveal } from '../../common/Reveal'

export function HeroSection({
  badgeText = 'Now Accepting Submissions - Dubai, UAE',
  badgeIconSrc = '/img/green-dot.svg',
  badgeAnimate = true,
  badgeIconSize = 11,
}: {
  badgeText?: string
  badgeIconSrc?: string
  badgeAnimate?: boolean
  badgeIconSize?: number
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(
    () => typeof window !== 'undefined' && isHeroVideoPrimed(),
  )
  const [videoReady, setVideoReady] = useState(
    () => typeof window !== 'undefined' && isHeroVideoPrimed(),
  )
  const [startTicker, setStartTicker] = useState(false)

  const shouldSkipVideo = useMemo(() => {
    // Respect reduced motion and data-saver connections.
    if (typeof window === 'undefined') return true
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return true
    const conn = (navigator as any).connection
    if (conn?.saveData) return true
    const effectiveType = String(conn?.effectiveType ?? '')
    if (effectiveType.includes('2g') || effectiveType.includes('slow-2g')) return true
    return false
  }, [])

  useEffect(() => {
    const conn = typeof navigator !== 'undefined' ? (navigator as any).connection : undefined
    videoDebug.log('Hero', 'policy check', {
      src: HERO_VIDEO_SRC,
      shouldSkipVideo,
      reducedMotion: window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches,
      saveData: conn?.saveData,
      effectiveType: conn?.effectiveType,
      hint: shouldSkipVideo
        ? 'Video skipped by policy (no element mounted).'
        : isHeroVideoPrimed()
          ? 'Video allowed; session primed (no IO/idle wait).'
          : 'Video allowed; waiting for intersection + idle.',
    })
  }, [shouldSkipVideo])

  useEffect(() => {
    if (shouldSkipVideo) return
    if (isHeroVideoPrimed()) {
      videoDebug.log('Hero', 'session primed → skip IO + idle gate')
      setShouldLoadVideo(true)
      return
    }
    const el = containerRef.current
    if (!el) return

    // If IO isn't available, load right away.
    if (typeof IntersectionObserver === 'undefined') {
      videoDebug.log('Hero', 'IntersectionObserver missing → load video immediately')
      setShouldLoadVideo(true)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        videoDebug.log('Hero', 'intersection', {
          isIntersecting: entry?.isIntersecting,
          intersectionRatio: entry?.intersectionRatio,
        })
        if (entry?.isIntersecting) {
          // Defer heavy media until the browser is idle.
          const ric = (window as any).requestIdleCallback as
            | ((cb: () => void, opts?: { timeout: number }) => number)
            | undefined
          if (ric) {
            videoDebug.log('Hero', 'scheduling load via requestIdleCallback (timeout 1500ms)')
            ric(() => setShouldLoadVideo(true), { timeout: 1500 })
          } else {
            videoDebug.log('Hero', 'scheduling load via setTimeout 300ms')
            setTimeout(() => setShouldLoadVideo(true), 300)
          }
          obs.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const videoElement = el.querySelector('video')
    if (videoElement) {
      obs.observe(videoElement)
    } else {
      videoDebug.log('Hero', 'observing container (video not in DOM yet)')
      obs.observe(el)
    }
    return () => obs.disconnect()
  }, [shouldSkipVideo])

  useEffect(() => {
    if (!shouldLoadVideo) return
    videoDebug.log('Hero', 'mounting <video>', { src: HERO_VIDEO_SRC })
  }, [shouldLoadVideo])

  useEffect(() => {
    // Speed Index is sensitive to above-the-fold visual changes.
    // Delay the infinite ticker animation until the browser is idle.
    const ric = (window as any).requestIdleCallback as
      | ((cb: () => void, opts?: { timeout: number }) => number)
      | undefined

    if (ric) {
      const id = ric(() => setStartTicker(true), { timeout: 2000 })
      return () => {
        try {
          ;(window as any).cancelIdleCallback?.(id)
        } catch {
          // ignore
        }
      }
    }

    const t = window.setTimeout(() => setStartTicker(true), 1200)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <section className="relative flex h-[110svh] pt-[144px] items-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="absolute left-0 top-0 -z-20 h-full w-full overflow-hidden">
        <div
          ref={containerRef}
          className="h-full w-full bg-primary"
          aria-hidden="true"
        >
          {shouldLoadVideo ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload={isHeroVideoPrimed() ? 'auto' : 'metadata'}
              onLoadStart={() => videoDebug.log('Hero', 'event: loadstart')}
              onLoadedMetadata={() =>
                videoDebug.log('Hero', 'event: loadedmetadata', {
                  duration: videoRef.current?.duration,
                  videoWidth: videoRef.current?.videoWidth,
                  videoHeight: videoRef.current?.videoHeight,
                })
              }
              onLoadedData={() => {
                videoDebug.log('Hero', 'event: loadeddata → visible')
                markHeroVideoPrimed()
                setVideoReady(true)
              }}
              onCanPlay={() => videoDebug.log('Hero', 'event: canplay')}
              onPlaying={() => videoDebug.log('Hero', 'event: playing')}
              onWaiting={() => videoDebug.warn('Hero', 'event: waiting (buffering)')}
              onStalled={() => videoDebug.warn('Hero', 'event: stalled')}
              onError={() => {
                const v = videoRef.current
                const err = v?.error
                videoDebug.error('Hero', 'event: error', {
                  code: err?.code,
                  message: err?.message,
                  networkState: v?.networkState,
                  readyState: v?.readyState,
                  currentSrc: v?.currentSrc,
                  hint:
                    'If currentSrc is Google Drive, browsers block it (CORP). Use /video/… on your domain or dev proxy.',
                })
              }}
              className={[
                'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
                videoReady ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            >
              <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>
          ) : null}
        </div>
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-primary/70" />

      <Pad className="flex h-full w-full items-center text-white">
        <Container className="flex h-full items-center">
          <Reveal className="flex h-full w-full items-center justify-between gap-10 pb-[140px] max-[991px]:pb-[100px]">
            <div className="w-full max-w-[808px] pt-[3vw]">
              <Reveal className="mb-6">
                <DarkIconTitle iconSrc={badgeIconSrc} animate={badgeAnimate} iconSize={badgeIconSize}
                  className="animate-float-y border-white/15 bg-white/10 !text-[#F5F7FA]"
                >
                  {badgeText}
                </DarkIconTitle>
              </Reveal>

              <h1 className="my-[30px] font-heading text-[66px] font-bold leading-[77px] max-[991px]:text-[40px]">
                International Conference on Applied Physics, Mathematics &amp; Energy
              </h1>
              <p className="mb-[40px] max-w-[588px] text-[18px] max-[991px]:text-[16px]">
                A premier global platform uniting researchers, academicians, and innovators
                from 60+ nations in the heart of Dubai.
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-4">
                <ButtonLink
                  to="/contact"
                  variant="primary"
                  className="bg-secondary hover:!bg-primary"
                >
                  Submit Your Paper
                </ButtonLink>
                <ButtonLink to="/contact" variant="secondary">
                  Register Now
                </ButtonLink>
              </div>
            </div>

            <div className="relative hidden h-[200px] w-[200px] min-w-[200px] items-center justify-center self-end lg:flex">
              <div className="absolute z-10 text-center text-white">
                <h2 className="m-0 text-[36px] font-bold leading-none">15-17</h2>
                <p className="m-0 text-[16px]">NOVEMBER</p>
              </div>

              <div className="h-full w-full animate-rotate-circle">
                <svg viewBox="0 0 200 200" role="img" aria-label="Dubai World Trade Centre">
                  <path
                    id="textPath"
                    d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                    fill="none"
                  />

                  <path
                    d="M 20, 60 A 85,85 0 0 0 20, 145"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M 180, 60 A 85,85 0 0 1 180, 145"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  />

                  <text fill="white" fontFamily="sans-serif" fontSize="14px">
                    <textPath href="#textPath" startOffset="25%" textAnchor="middle">
                      Dubai World Trade Centre
                    </textPath>
                    <textPath href="#textPath" startOffset="75%" textAnchor="middle">
                      Dubai World Trade Centre
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </Reveal>
        </Container>
      </Pad>
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden border-t border-primary bg-primary/30 py-8 max-[767px]:py-[20px]">
        <div
          className={[
            'flex items-center gap-[50px]',
            startTicker ? 'animate-scroll-loop will-change-transform max-[767px]:animate-scroll-loop-fast' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <ScrollingGroup items={items} ariaHidden={false} />
          <ScrollingGroup items={items} ariaHidden />
        </div>
      </div>
    </section>
  )
}

const items = [
  'Applied Physics',
  'Mathematical Sciences',
  'Energy Innovation',
  'Quantum Technologies',
  'Plasma Physics',
  'Renewable Energy',
  'Computational Science',
  'Nuclear Fusion',
  'Dubai 2026',
]

function ScrollingGroup({
  items,
  ariaHidden,
}: {
  items: string[]
  ariaHidden: boolean
}) {
  return (
    <div
      className="flex flex-shrink-0 items-center gap-[50px]"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((item, idx) => (
        <FragmentItem key={`${item}-${idx}`} item={item} showDot={true} />
      ))}
    </div>
  )
}

function FragmentItem({ item, showDot }: { item: string; showDot: boolean }) {
  return (
    <span className="inline-flex items-center gap-[50px]">
      {showDot ? (
        <span className="text-[14px] font-semibold tracking-[0.011em] text-white" aria-hidden="true">
          ◎
        </span>
      ) : null}
      <span className="whitespace-nowrap text-[22px] font-semibold tracking-[0.011em] leading-4 text-white max-[767px]:text-[18px]">
        {item}
      </span>
    </span>
  )
}

