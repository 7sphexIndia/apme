import type { ReactNode } from 'react'
import defaultIcon from '../../assets/img/dark-heading-icon.svg'

type DarkIconTitleProps = {
  children: ReactNode
  iconSrc?: string
  iconAlt?: string
  className?: string
}

export default function DarkIconTitle({
  children,
  iconSrc,
  iconAlt,
  className = '',
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
      <img
        src={resolvedIcon}
        alt={iconAlt ?? ''}
        aria-hidden={iconAlt ? undefined : true}
        className="h-[17px] w-[20px] object-contain"
      />
      <span>{children}</span>
    </div>
  )
}
