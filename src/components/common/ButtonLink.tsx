import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'tertiary'

export function getButtonLinkParts({
  variant,
  variantClassName,
  arrowCircleClassName,
  arrowIconClassName,
  className,
}: {
  variant: Variant
  className?: string
  variantClassName?: string
  arrowCircleClassName?: string
  arrowIconClassName?: string
}) {
  if (variant === 'tertiary') {
    return {
      rootClassName: [
        'group inline-flex items-center gap-[7px] text-[16px] font-semibold text-secondary no-underline transition-colors duration-300 hover:text-primary',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' '),
      circleClassName: '',
      arrowClassName:
        'h-[10px] w-[10px] shrink-0 fill-current transition-transform duration-300 ease-linear group-hover:rotate-45',
    }
  }

  const computedVariantClass =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-secondary'
      : 'bg-light-bg text-primary outline outline-1 outline-primary hover:bg-primary hover:text-white'

  const computedCircleClass = variant === 'primary' ? 'bg-white' : 'bg-primary group-hover:bg-white'

  const computedArrowClass =
    variant === 'primary' ? 'fill-primary' : 'fill-white group-hover:fill-primary'

  return {
    rootClassName: [
      'group relative inline-flex items-center rounded-[43px] px-[22px] py-[21px] pr-[55px] text-[16px] font-semibold leading-[12px] no-underline transition duration-300',
      variantClassName ?? computedVariantClass,
      className ?? '',
    ]
      .filter(Boolean)
      .join(' '),
    circleClassName: [
      'absolute bottom-[9px] right-[9px] top-[9px] grid h-[36px] w-[36px] place-items-center rounded-full transition duration-300 group-hover:rotate-45',
      arrowCircleClassName ?? computedCircleClass,
    ].join(' '),
    arrowClassName: ['transition duration-300', arrowIconClassName ?? computedArrowClass].join(' '),
  }
}

export function Button({
  variant,
  children,
  className = '',
  type = 'button',
  disabled,
  onClick,
  variantClassName,
  arrowCircleClassName,
  arrowIconClassName,
}: {
  variant: Variant
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  variantClassName?: string
  arrowCircleClassName?: string
  arrowIconClassName?: string
}) {
  const parts = getButtonLinkParts({
    variant,
    className,
    variantClassName,
    arrowCircleClassName,
    arrowIconClassName,
  })

  if (variant === 'tertiary') {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={parts.rootClassName}
      >
        <span>{children}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className={parts.arrowClassName}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.68541 9.31456C0.964352 9.59351 1.41661 9.59351 1.69556 9.31456L9.79078 1.21933C10.0697 0.940378 10.0697 0.48819 9.79078 0.209238C9.51182 -0.0697126 9.05954 -0.0697126 8.78059 0.209238L0.68541 8.30441C0.406458 8.58336 0.406458 9.03561 0.68541 9.31456Z" />
          <path d="M9.28572 10C9.68019 10 10 9.68021 10 9.28572V0.714283C10 0.319808 9.68019 0 9.28572 0H0.714283C0.319789 0 0 0.319808 0 0.714283C0 1.10885 0.319789 1.42857 0.714283 1.42857H8.57143V9.28572C8.57143 9.68021 8.89115 10 9.28572 10Z" />
        </svg>
      </button>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={parts.rootClassName}
    >
      <span>{children}</span>
      <span className={parts.circleClassName} aria-hidden="true">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className={parts.arrowClassName}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.68541 9.31456C0.964352 9.59351 1.41661 9.59351 1.69556 9.31456L9.79078 1.21933C10.0697 0.940378 10.0697 0.48819 9.79078 0.209238C9.51182 -0.0697126 9.05954 -0.0697126 8.78059 0.209238L0.68541 8.30441C0.406458 8.58336 0.406458 9.03561 0.68541 9.31456Z" />
          <path d="M9.28572 10C9.68019 10 10 9.68021 10 9.28572V0.714283C10 0.319808 9.68019 0 9.28572 0H0.714283C0.319789 0 0 0.319808 0 0.714283C0 1.10885 0.319789 1.42857 0.714283 1.42857H8.57143V9.28572C8.57143 9.68021 8.89115 10 9.28572 10Z" />
        </svg>
      </span>
    </button>
  )
}

export function ButtonLink({
  to,
  variant,
  children,
  className = '',
  variantClassName,
  arrowCircleClassName,
  arrowIconClassName,
}: {
  to: string
  variant: Variant
  children: ReactNode
  className?: string
  /** Override computed variant background/text classes */
  variantClassName?: string
  /** Override computed inner circle classes */
  arrowCircleClassName?: string
  /** Override computed arrow icon classes */
  arrowIconClassName?: string
}) {
  if (variant === 'tertiary') {
    return (
      <Link
        to={to}
        className={getButtonLinkParts({ variant, className }).rootClassName}
      >
        <span>{children}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className={getButtonLinkParts({ variant, className }).arrowClassName}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.68541 9.31456C0.964352 9.59351 1.41661 9.59351 1.69556 9.31456L9.79078 1.21933C10.0697 0.940378 10.0697 0.48819 9.79078 0.209238C9.51182 -0.0697126 9.05954 -0.0697126 8.78059 0.209238L0.68541 8.30441C0.406458 8.58336 0.406458 9.03561 0.68541 9.31456Z" />
          <path d="M9.28572 10C9.68019 10 10 9.68021 10 9.28572V0.714283C10 0.319808 9.68019 0 9.28572 0H0.714283C0.319789 0 0 0.319808 0 0.714283C0 1.10885 0.319789 1.42857 0.714283 1.42857H8.57143V9.28572C8.57143 9.68021 8.89115 10 9.28572 10Z" />
        </svg>
      </Link>
    )
  }
  const parts = getButtonLinkParts({
    variant,
    className,
    variantClassName,
    arrowCircleClassName,
    arrowIconClassName,
  })

  return (
    <Link
      to={to}
      className={parts.rootClassName}
    >
      <span>{children}</span>
      <span className={parts.circleClassName} aria-hidden="true">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className={parts.arrowClassName}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.68541 9.31456C0.964352 9.59351 1.41661 9.59351 1.69556 9.31456L9.79078 1.21933C10.0697 0.940378 10.0697 0.48819 9.79078 0.209238C9.51182 -0.0697126 9.05954 -0.0697126 8.78059 0.209238L0.68541 8.30441C0.406458 8.58336 0.406458 9.03561 0.68541 9.31456Z" />
          <path d="M9.28572 10C9.68019 10 10 9.68021 10 9.28572V0.714283C10 0.319808 9.68019 0 9.28572 0H0.714283C0.319789 0 0 0.319808 0 0.714283C0 1.10885 0.319789 1.42857 0.714283 1.42857H8.57143V9.28572C8.57143 9.68021 8.89115 10 9.28572 10Z" />
        </svg>
      </span>
    </Link>
  )
}

 