import type { ReactNode } from 'react'
import Container from './Container'
import { Pad } from './Pad'
import { Reveal } from './Reveal'

export type PageHeroBadge = {
  text: string
  iconSrc?: string
  iconAlt?: string
}

export type PageHeroAction = {
  key: string
  node: ReactNode
}

export type PageHeroProps = {
  title: ReactNode
  subtitle?: ReactNode
  badge?: PageHeroBadge
  actions?: PageHeroAction[]
  rightSlot?: ReactNode
  overlayClassName?: string
  contentAlign?: 'left' | 'center'
  className?: string
}

export function PageHero({
  title,
  subtitle,
  badge,
  actions,
  rightSlot,
  overlayClassName = 'bg-primary/70',
  contentAlign = 'left',
  className = '',
}: PageHeroProps) {
  const isCenter = contentAlign === 'center'

  return (
    <section
      className={[
        'relative flex h-screen items-center pt-[114px]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={['absolute left-0 top-0 -z-10 h-full w-full', overlayClassName].join(' ')} />

      <Pad className="flex h-full w-full items-center text-white">
        <Container className="flex h-full items-center">
          <Reveal
            className={[
              'flex h-full w-full items-center gap-10 pb-10',
              isCenter ? 'justify-center' : 'justify-between',
            ].join(' ')}
          >
            <div
              className={[
                'w-full pt-[3vw]',
                isCenter ? 'max-w-[900px] text-center' : 'max-w-[808px]',
              ].join(' ')}
            >
              {badge ? (
                <div
                  className={[
                    'animate-float-y',
                    'inline-flex items-center gap-2 rounded-[10px] border border-white/15 bg-white/10 px-3 py-2 text-[14px]',
                    isCenter ? 'mx-auto' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {badge.iconSrc ? (
                    <img
                      src={badge.iconSrc}
                      alt={badge.iconAlt ?? ''}
                      aria-hidden={badge.iconAlt ? undefined : true}
                      className="h-[17px] w-[20px] object-contain"
                    />
                  ) : null}
                  <span>{badge.text}</span>
                </div>
              ) : null}

              <h1 className="my-[30px] font-heading text-[66px] font-bold leading-[77px] max-[991px]:text-[40px]">
                {title}
              </h1>

              {subtitle ? (
                <p
                  className={[
                    'mb-[40px] text-[18px] max-[991px]:text-[16px]',
                    isCenter ? 'mx-auto max-w-[720px]' : 'max-w-[588px]',
                  ].join(' ')}
                >
                  {subtitle}
                </p>
              ) : null}

              {actions?.length ? (
                <div
                  className={[
                    'mt-2 flex flex-wrap items-center gap-3',
                    isCenter ? 'justify-center' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {actions.map((a) => (
                    <span key={a.key}>{a.node}</span>
                  ))}
                </div>
              ) : null}
            </div>

            {rightSlot && !isCenter ? (
              <div className="relative hidden h-[200px] w-[200px] min-w-[200px] items-center justify-center self-end lg:flex">
                {rightSlot}
              </div>
            ) : null}
          </Reveal>
        </Container>
      </Pad>
    </section>
  )
}

