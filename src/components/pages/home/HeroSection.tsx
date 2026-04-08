import { ButtonLink } from '../../common/ButtonLink'
import Container from '../../common/Container'
import { Pad } from '../../common/Pad'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Reveal } from '../../common/Reveal'
import tagGreen from '../../../assets/img/tag-green.svg'
import heroVideo from '../../../assets/video/hero-video.mp4'

export function HeroSection() {
  return (
    <section className="relative flex h-[110svh] pt-[144px] items-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="absolute left-0 top-0 -z-20 h-full w-full overflow-hidden">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-primary/70" />

      <Pad className="flex h-full w-full items-center text-white">
        <Container className="flex h-full items-center">
          <Reveal className="flex h-full w-full items-center justify-between gap-10 pb-[140px] max-[991px]:pb-[100px]">
            <div className="w-full max-w-[808px] pt-[3vw]">
              <DarkIconTitle
                iconSrc={tagGreen}
                className="animate-float-y border-white/15 bg-white/10 !text-[#F5F7FA]"
              >
                Now Accepting Submissions - Dubai, UAE
              </DarkIconTitle>

              <h1 className="my-[30px] font-heading text-[66px] font-bold leading-[77px] max-[991px]:text-[40px]">
                International Conference on Applied Physics, Mathematics &amp; Energy
              </h1>
              <p className="mb-[40px] max-w-[588px] text-[18px] max-[991px]:text-[16px]">
                A premier global platform uniting researchers, academicians, and innovators
                from 60+ nations in the heart of Dubai.
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-4">
                <ButtonLink
                  to="/contact"
                  variant="primary"
                  className="bg-secondary hover:!bg-primary"
                >
                  Submit Your Paper
                </ButtonLink>
                <ButtonLink to="/contact" variant="secondary">
                  Register Now
                </ButtonLink>
              </div>
            </div>

            <div className="relative hidden h-[200px] w-[200px] min-w-[200px] items-center justify-center self-end lg:flex">
              <div className="absolute z-10 text-center text-white">
                <h2 className="m-0 text-[36px] font-bold leading-none">15-17</h2>
                <p className="m-0 text-[16px]">NOVEMBER</p>
              </div>

              <div className="h-full w-full animate-rotate-circle">
                <svg viewBox="0 0 200 200" role="img" aria-label="Dubai World Trade Centre">
                  <path
                    id="textPath"
                    d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                    fill="none"
                  />

                  <path
                    d="M 20, 60 A 85,85 0 0 0 20, 145"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M 180, 60 A 85,85 0 0 1 180, 145"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  />

                  <text fill="white" fontFamily="sans-serif" fontSize="14px">
                    <textPath href="#textPath" startOffset="25%" textAnchor="middle">
                      Dubai World Trade Centre
                    </textPath>
                    <textPath href="#textPath" startOffset="75%" textAnchor="middle">
                      Dubai World Trade Centre
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </Reveal>
        </Container>
      </Pad>
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden border-t border-primary bg-primary/30 py-8 max-[767px]:py-[20px]">
        <div className="flex animate-scroll-loop items-center gap-[50px] will-change-transform max-[767px]:animate-scroll-loop-fast">
          <ScrollingGroup items={items} ariaHidden={false} />
          <ScrollingGroup items={items} ariaHidden />
        </div>
      </div>
    </section>
  )
}

const items = [
  'Applied Physics',
  'Mathematical Sciences',
  'Energy Innovation',
  'Quantum Technologies',
  'Plasma Physics',
  'Renewable Energy',
  'Computational Science',
  'Nuclear Fusion',
  'Dubai 2026',
]

function ScrollingGroup({
  items,
  ariaHidden,
}: {
  items: string[]
  ariaHidden: boolean
}) {
  return (
    <div
      className="flex flex-shrink-0 items-center gap-[50px]"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((item, idx) => (
        <FragmentItem key={`${item}-${idx}`} item={item} showDot={true} />
      ))}
    </div>
  )
}

function FragmentItem({ item, showDot }: { item: string; showDot: boolean }) {
  return (
    <span className="inline-flex items-center gap-[50px]">
      {showDot ? (
        <span className="text-[14px] font-semibold tracking-[0.011em] text-white" aria-hidden="true">
          ◎
        </span>
      ) : null}
      <span className="whitespace-nowrap text-[22px] font-semibold tracking-[0.011em] leading-4 text-white max-[767px]:text-[18px]">
        {item}
      </span>
    </span>
  )
}

