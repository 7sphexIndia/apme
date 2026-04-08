import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'tertiary'

export function ButtonLink({
  to,
  variant,
  children,
  className = '',
}: {
  to: string
  variant: Variant
  children: ReactNode
  className?: string
}) {
  if (variant === 'tertiary') {
    return (
      <Link
        to={to}
        className={[
          'group inline-flex items-center gap-[7px] text-[16px] font-semibold text-secondary no-underline transition-colors duration-300 hover:text-primary',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <span>{children}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="h-[10px] w-[10px] shrink-0 fill-current transition-transform duration-300 ease-linear group-hover:rotate-45"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.68541 9.31456C0.964352 9.59351 1.41661 9.59351 1.69556 9.31456L9.79078 1.21933C10.0697 0.940378 10.0697 0.48819 9.79078 0.209238C9.51182 -0.0697126 9.05954 -0.0697126 8.78059 0.209238L0.68541 8.30441C0.406458 8.58336 0.406458 9.03561 0.68541 9.31456Z" />
          <path d="M9.28572 10C9.68019 10 10 9.68021 10 9.28572V0.714283C10 0.319808 9.68019 0 9.28572 0H0.714283C0.319789 0 0 0.319808 0 0.714283C0 1.10885 0.319789 1.42857 0.714283 1.42857H8.57143V9.28572C8.57143 9.68021 8.89115 10 9.28572 10Z" />
        </svg>
      </Link>
    )
  }

  const variantClass =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-secondary'
      : 'bg-light-bg text-primary outline outline-1 outline-primary hover:bg-primary hover:text-white'

  const arrowCircleClass =
    variant === 'primary' ? 'bg-white' : 'bg-primary group-hover:bg-white'

  const arrowIconClass =
    variant === 'primary'
      ? 'fill-primary'
      : 'fill-white group-hover:fill-primary'

  return (
    <Link
      to={to}
      className={[
        'group relative inline-flex items-center rounded-[43px] px-[22px] py-[21px] pr-[55px] text-[16px] font-semibold leading-[12px] no-underline transition duration-300',
        variantClass,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span>{children}</span>
      <span
        className={[
          'absolute bottom-[9px] right-[9px] top-[9px] grid h-[36px] w-[36px] place-items-center rounded-full transition duration-300 group-hover:rotate-45',
          arrowCircleClass,
        ].join(' ')}
        aria-hidden="true"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className={['transition duration-300', arrowIconClass].join(' ')}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.68541 9.31456C0.964352 9.59351 1.41661 9.59351 1.69556 9.31456L9.79078 1.21933C10.0697 0.940378 10.0697 0.48819 9.79078 0.209238C9.51182 -0.0697126 9.05954 -0.0697126 8.78059 0.209238L0.68541 8.30441C0.406458 8.58336 0.406458 9.03561 0.68541 9.31456Z" />
          <path d="M9.28572 10C9.68019 10 10 9.68021 10 9.28572V0.714283C10 0.319808 9.68019 0 9.28572 0H0.714283C0.319789 0 0 0.319808 0 0.714283C0 1.10885 0.319789 1.42857 0.714283 1.42857H8.57143V9.28572C8.57143 9.68021 8.89115 10 9.28572 10Z" />
        </svg>
      </span>
    </Link>
  )
}

