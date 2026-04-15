import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { CTA_VIDEO_SRC } from '../../constants/videos'
import { videoDebug } from '../../debug/videoConsole'
import { isCtaVideoPrimed, markCtaVideoPrimed } from '../../session/videoPrimed'
import Container from './Container'
import DarkIconTitle from './DarkIconTitle'
import { Pad } from './Pad'
import { ButtonLink, getButtonLinkParts } from './ButtonLink'

type CTALinkButton = {
  label: string
  to: string
  className?: string
  /** For double-CTA second button (solid secondary) */
  appearance?: 'outline' | 'solidSecondary'
}

type CTACommonProps = {
  /** Small label above heading (uses the common DarkIconTitle style) */
  tagText: string
  heading: ReactNode
  description: ReactNode
  /** Background video URL (defaults to shared CTA clip on Drive) */
  videoSrc?: string
  overlayClassName?: string
  className?: string
}

type CTAFormVariant = CTACommonProps & {
  variant: 'form'
  inputPlaceholder?: string
  submitLabel: string
  onSubmitEmail?: (email: string) => void
}

type CTASingleVariant = CTACommonProps & {
  variant: 'single'
  button: CTALinkButton
}

type CTADoubleVariant = CTACommonProps & {
  variant: 'double'
  primaryButton: CTALinkButton
  secondaryButton: CTALinkButton
}

export type CTAProps = CTAFormVariant | CTASingleVariant | CTADoubleVariant

export default function CTA(props: CTAProps) {
  const {
    tagText,
    heading,
    description,
    videoSrc = CTA_VIDEO_SRC,
    /** Optional overlay override (must stay translucent so video shows through) */
    overlayClassName = 'bg-primary/70',
    /** Use for section spacing on pages */
    className = '',
  } = props

  const containerRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(
    () => typeof window !== 'undefined' && isCtaVideoPrimed(),
  )
  const [videoReady, setVideoReady] = useState(
    () => typeof window !== 'undefined' && isCtaVideoPrimed(),
  )

  const shouldSkipVideo = useMemo(() => {
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
    videoDebug.log('CTA', 'policy check', {
      src: videoSrc,
      shouldSkipVideo,
      reducedMotion: window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches,
      saveData: conn?.saveData,
      effectiveType: conn?.effectiveType,
    })
  }, [shouldSkipVideo, videoSrc])

  useEffect(() => {
    if (shouldSkipVideo) return
    if (isCtaVideoPrimed()) {
      videoDebug.log('CTA', 'session primed → skip IO + idle gate')
      setShouldLoadVideo(true)
      return
    }
    const el = containerRef.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      videoDebug.log('CTA', 'IntersectionObserver missing → load video immediately')
      setShouldLoadVideo(true)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        videoDebug.log('CTA', 'intersection', {
          isIntersecting: entry?.isIntersecting,
          intersectionRatio: entry?.intersectionRatio,
        })
        if (!entry?.isIntersecting) return

        // Defer heavy media until the browser is idle.
        const ric = (window as any).requestIdleCallback as
          | ((cb: () => void, opts?: { timeout: number }) => number)
          | undefined

        if (ric) {
          videoDebug.log('CTA', 'scheduling load via requestIdleCallback (timeout 1500ms)')
          ric(() => setShouldLoadVideo(true), { timeout: 1500 })
        } else {
          videoDebug.log('CTA', 'scheduling load via setTimeout 300ms')
          setTimeout(() => setShouldLoadVideo(true), 300)
        }
        obs.disconnect()
      },
      { threshold: 0.15 },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [shouldSkipVideo])

  useEffect(() => {
    if (!shouldLoadVideo || shouldSkipVideo) return
    videoDebug.log('CTA', 'mounting <video>', { src: videoSrc })
  }, [shouldLoadVideo, shouldSkipVideo, videoSrc])

  return (
    <section className={className}>
      <Pad>
        <Container>
          <div ref={containerRef} className="relative overflow-hidden rounded-[20px] bg-primary">
            <div className="absolute inset-0 z-0">
              {shouldLoadVideo && !shouldSkipVideo ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload={isCtaVideoPrimed() ? 'auto' : 'metadata'}
                  onLoadStart={() => videoDebug.log('CTA', 'event: loadstart')}
                  onLoadedMetadata={() =>
                    videoDebug.log('CTA', 'event: loadedmetadata', {
                      duration: videoRef.current?.duration,
                      videoWidth: videoRef.current?.videoWidth,
                    })
                  }
                  onLoadedData={() => {
                    videoDebug.log('CTA', 'event: loadeddata → visible')
                    markCtaVideoPrimed()
                    setVideoReady(true)
                  }}
                  onCanPlay={() => videoDebug.log('CTA', 'event: canplay')}
                  onPlaying={() => videoDebug.log('CTA', 'event: playing')}
                  onWaiting={() => videoDebug.warn('CTA', 'event: waiting (buffering)')}
                  onStalled={() => videoDebug.warn('CTA', 'event: stalled')}
                  onError={() => {
                    const v = videoRef.current
                    const err = v?.error
                    videoDebug.error('CTA', 'event: error', {
                      code: err?.code,
                      message: err?.message,
                      networkState: v?.networkState,
                      readyState: v?.readyState,
                      currentSrc: v?.currentSrc,
                    })
                  }}
                  className={[
                    'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
                    videoReady ? 'opacity-100' : 'opacity-0',
                  ].join(' ')}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              ) : null}
            </div>
            <div className={['absolute inset-0 z-0', overlayClassName].join(' ')} />

            <div className="relative z-10 px-[20px] py-[50px] text-white md:px-[60px] md:py-[100px]">
              <div className="mx-auto flex w-full max-w-[900px] flex-col items-center text-center">
                <DarkIconTitle
                  iconSrc="/img/green-dot.svg"
                  animate={true}
                  iconSize={11}
                  className="border-white/15 bg-white/10 backdrop-blur-[10px] !text-[#F5F7FA]"
                >
                  {tagText}
                </DarkIconTitle>

                {/* gap small text -> heading = 30px */}
                <h2 className="mt-[30px] font-heading text-[32px] font-bold leading-[115%] md:text-[44px]">
                  {heading}
                </h2>

                {/* gap heading -> para = 40px */}
                <p className="mt-[40px] max-w-[564px] text-[16px] leading-[23px] text-white/90">
                  {description}
                </p>

                {/* gap after para = 40px */}
                <div className="mt-[40px]">
                  {renderActions(props)}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Pad>
    </section>
  )
}

function renderActions(props: CTAProps) {
  if (props.variant === 'form') {
    return (
      <CTAEmailForm
        inputPlaceholder={props.inputPlaceholder}
        submitLabel={props.submitLabel}
        onSubmitEmail={props.onSubmitEmail}
      />
    )
  }
  if (props.variant === 'double') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-[12px]">
        <CTASingleButton {...props.primaryButton} />
        <CTASingleButton {...props.secondaryButton} />
      </div>
    )
  }
  return <CTASingleButton {...props.button} />
}

function CTASingleButton({ label, to, className = '', appearance = 'outline' }: CTALinkButton) {
  if (appearance === 'solidSecondary') {
    return (
      <ButtonLink
        to={to}
        variant="secondary"
        variantClassName="bg-secondary text-white hover:bg-primary hover:text-white outline-none"
        arrowCircleClassName="bg-white"
        arrowIconClassName="fill-primary"
        className={className}
      >
        {label}
      </ButtonLink>
    )
  }
  return (
    <ButtonLink
      to={to}
      variant="secondary"
      // Use common "secondary" button style:
      // - normal: light bg + border
      // - hover: primary bg + white text
      className={className}
    >
      {label}
    </ButtonLink>
  )
}

function CTAEmailForm({
  inputPlaceholder = 'Enter Your Email Address',
  submitLabel,
  onSubmitEmail,
}: {
  inputPlaceholder?: string
  submitLabel: string
  onSubmitEmail?: (email: string) => void
}) {
  const [email, setEmail] = useState('')

  const isValid = useMemo(() => {
    if (!email) return false
    return /\S+@\S+\.\S+/.test(email)
  }, [email])

  return (
    <form
      className="mx-auto flex w-full max-w-[620px] flex-col gap-[12px] sm:flex-row items-center sm:gap-[10px]"
      onSubmit={(e) => {
        e.preventDefault()
        if (!isValid) return
        onSubmitEmail?.(email)
      }}
    >
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={inputPlaceholder}
        type="email"
        inputMode="email"
        autoComplete="email"
        className={[
          'w-[280px] rounded-[999px] bg-light-bg px-[26px] py-[15px] text-[16px] text-primary outline-none',
          'md:w-[443px] md:max-w-[443px]',
          'placeholder:text-[16px] placeholder:text-body',
        ].join(' ')}
      />

      <button
        type="submit"
        aria-disabled={!isValid}
        className={getButtonLinkParts({ variant: 'secondary', className: 'cursor-pointer' }).rootClassName}
      >
        <span>{submitLabel}</span>
        <span
          className={getButtonLinkParts({ variant: 'secondary' }).circleClassName}
          aria-hidden="true"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            className={getButtonLinkParts({ variant: 'secondary' }).arrowClassName}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.68541 9.31456C0.964352 9.59351 1.41661 9.59351 1.69556 9.31456L9.79078 1.21933C10.0697 0.940378 10.0697 0.48819 9.79078 0.209238C9.51182 -0.0697126 9.05954 -0.0697126 8.78059 0.209238L0.68541 8.30441C0.406458 8.58336 0.406458 9.03561 0.68541 9.31456Z" />
            <path d="M9.28572 10C9.68019 10 10 9.68021 10 9.28572V0.714283C10 0.319808 9.68019 0 9.28572 0H0.714283C0.319789 0 0 0.319808 0 0.714283C0 1.10885 0.319789 1.42857 0.714283 1.42857H8.57143V9.28572C8.57143 9.68021 8.89115 10 9.28572 10Z" />
          </svg>
        </span>
      </button>
    </form>
  )
}

 