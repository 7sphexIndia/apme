import type { ReactNode } from 'react'

export interface ContainerProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function Container({
  children,
  className = '',
  id,
}: ContainerProps) {
  return (
    <div
      id={id}
      className={`mx-auto w-full max-w-[1440px] ${className}`}
    >
      {children}
    </div>
  )
}