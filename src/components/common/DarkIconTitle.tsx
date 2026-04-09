import type { ReactNode } from 'react'
import defaultIcon from '../../assets/img/dark-heading-icon.svg'

type DarkIconTitleProps = {
  children: ReactNode
  iconSrc?: string
  iconAlt?: string
  className?: string
  animate?: boolean
  iconSize?: number
}

export default function DarkIconTitle({
  children,
  iconSrc,
  iconAlt,
  className = '',
  animate = false,
  iconSize = 17,
}: DarkIconTitleProps) {
  const resolvedIcon = iconSrc ?? defaultIcon

  return (
    <div
      className={[
        'inline-flex items-center gap-2 rounded-[10px]',
        'border border-primary/10 bg-primary/[0.02]',
        'px-3 py-2',
        'text-[14px] font-medium uppercase text-primary',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="relative flex items-center justify-center">
        {animate && (
          <div className="absolute h-full w-full animate-pulse-dot rounded-full" />
        )}
        <img
          src={resolvedIcon}
          alt={iconAlt ?? ''}
          aria-hidden={iconAlt ? undefined : true}
          style={{ height: `${iconSize}px`, width: `${iconSize}px` }}
          className="relative z-10 object-contain"
        />
      </div>
      <span className="relative z-10">{children}</span>
    </div>
  )
}
