import type { ReactNode } from 'react'

/**
 * Animation-free wrapper.
 *
 * We intentionally render content immediately to avoid delayed rendering/loading
 * (especially noticeable on images/videos) and to keep scrolling smooth.
 */
export function Reveal({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
  once?: boolean
  threshold?: number
  rootMargin?: string
  delay?: number
}) {
  return <div className={className}>{children}</div>
}

