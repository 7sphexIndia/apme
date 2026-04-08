import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { ButtonLink } from '../../common/ButtonLink'
import { Pad } from '../../common/Pad'
import pillarsImg1 from '../../../assets/img/pillars-img-1.webp'
import pillarsImg2 from '../../../assets/img/pillars-img-2.webp'
import pillarsImg3 from '../../../assets/img/pillars-img-3.webp'

const cards = [
  {
    image: pillarsImg1,
    imageAlt: 'Physics formulas and scientific notation on a dark background',
    title: 'Applied Physics & Photonics',
    subtitle: 'Quantum · Condensed Matter · Nanoscience',
    description:
      'Track I convenes researchers working at the experimental and theoretical frontiers of modern physics. Sessions span the quantum behaviour of top...',
    readMoreTo: '/cfp',
  },
  {
    image: pillarsImg2,
    imageAlt: 'Abstract geometric shapes representing mathematical concepts',
    title: 'Mathematical Sciences',
    subtitle: 'PDEs · Topology · Numerical Methods',
    description:
      'Track II sessions span nonlinear dynamics, stochastic PDEs, high-dimensional computation, and algebraic topology — collectively redefining how the communit...',
    readMoreTo: '/publication',
  },
  {
    image: pillarsImg3,
    imageAlt: 'Solar panels in a field under a blue sky',
    title: 'Energy Innovation',
    subtitle: 'Fusion · Solar · Hydrogen Economy',
    description:
      'Track III treats energy as a deep scientific and engineering problem demanding first-principles thinking. Fusion physicists, photovoltaics engineers,...',
    readMoreTo: '/agenda',
  },
] as const

export function ThreePillars() {
  return (
    <section
      id="three-pillars"
      className="bg-light-bg py-[100px] max-[991px]:py-[60px]"
    >
      <Pad>
        <Container>
          <header className="mb-12 text-center max-[991px]:mb-10">
            <div className="mb-[30px] flex justify-center">
              <DarkIconTitle>Three Pillars of Inquiry</DarkIconTitle>
            </div>

            <h2 className="font-heading text-[36px] font-bold leading-[115%] max-[991px]:text-[28px] text-primary">
              The <span className="text-secondary">Core Disciplines</span> Driving APME 2026
            </h2>
          </header>

          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col overflow-hidden rounded-[10px] bg-white p-[24px] border border-stroke shadow-none transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-[6px] hover:shadow-[0_14px_40px_-8px_rgba(11,31,59,0.1)]"
              >
                <div className="mb-[30px] overflow-hidden rounded-[4px]">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="font-heading text-[22px] font-bold text-primary">
                  {card.title}
                </h3>
                <p className="mt-[14px] text-[14px] italic text-mini">{card.subtitle}</p>
                <p className="mt-[14px] pt-[14px] flex-1 text-[16px] leading-relaxed text-body line-clamp-4 border-t border-stroke">
                  {card.description}
                </p>

                <ButtonLink to={card.readMoreTo} variant="tertiary" className="mt-[30px]">
                  Read More
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </Pad>
    </section>
  )
}
