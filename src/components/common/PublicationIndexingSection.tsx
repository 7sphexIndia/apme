import type { ReactNode } from 'react'
import Container from './Container'
import DarkIconTitle from './DarkIconTitle'
import { Pad } from './Pad'
import { Reveal } from './Reveal'

export type PublicationIndexingLogo = {
  img: string
  alt: string
}

export type PublicationIndexingSectionProps = {
  kickerIconSrc: string
  kickerText: ReactNode
  heading: ReactNode
  description: ReactNode
  note?: ReactNode
  logos: PublicationIndexingLogo[]
}

export function PublicationIndexingSection({
  kickerIconSrc,
  kickerText,
  heading,
  description,
  note,
  logos,
}: PublicationIndexingSectionProps) {
  return (
    <section className="bg-white py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <div className="flex flex-col items-center text-center">
            <Reveal className="mb-[30px] flex justify-center">
              <DarkIconTitle iconSrc={kickerIconSrc}>{kickerText}</DarkIconTitle>
            </Reveal>

            <Reveal className="mb-10 md:mb-5">
              <h2 className="font-heading text-[36px] font-bold leading-[46px] text-primary max-[991px]:text-[32px]">
                {heading}
              </h2>
            </Reveal>

            <Reveal className="max-w-[800px]">
              <p className="text-[18px] text-body max-[991px]:text-[16px]">{description}</p>
            </Reveal>

            <div className="w-full border-t border-stroke !my-[60px]" />

            {note ? (
              <Reveal className="mb-10">
                <p className="text-[16px] font-regular text-body/80">{note}</p>
              </Reveal>
            ) : null}

            <Reveal className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-5">
              {logos.map((logo, idx) => (
                <div
                  key={`${logo.alt}-${idx}`}
                  className="flex h-[100px] items-center justify-center rounded-[10px] bg-white shadow-none transition-shadow duration-300 hover:shadow-sm"
                >
                  <img src={logo.img} alt={logo.alt} className="h-full w-full object-contain" loading="lazy" />
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </Pad>
    </section>
  )
}

