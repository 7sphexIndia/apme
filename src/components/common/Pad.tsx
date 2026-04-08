import type { ReactNode } from 'react'

export function Pad({
  children,
  className = '',
  as: Component = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'header' | 'main' | 'footer' | 'section' | 'nav'
}) {
  return (
    <Component
      className={[
        'px-4 sm:px-6 lg:px-14',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Component>
  )
}

