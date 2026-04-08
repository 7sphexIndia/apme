import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

export function Reveal({
  children,
  className = '',
  once = true,
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
}: {
  children: ReactNode
  className?: string
  once?: boolean
  threshold?: number
  rootMargin?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If IO isn't available, just show content.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) obs.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [once, threshold, rootMargin])

  return (
    <div
      ref={ref}
      className={[
        'will-change-transform',
        'transition-[opacity,transform] duration-700 ease-out',
        'motion-reduce:transition-none motion-reduce:transform-none',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}

