import { ButtonLink } from '../../common/ButtonLink'
import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'
import aboutImage from '../../../assets/img/about-img.webp'
import tagGreen from '../../../assets/img/green-dot.svg'
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



export function AboutSection() {
  return (
    <section className="pt-[100px] pb-[100px] max-[991px]:pt-[30px] max-[991px]:pb-[60px]">
      <Pad>
        <Container>
          <Reveal className="grid grid-cols-1 items-center gap-[30px] lg:grid-cols-2">
            <div className="h-[467px] overflow-hidden rounded-[10px] max-[767px]:h-[250px]">
              <img
                src={aboutImage}
                alt="Conference audience and keynote presentation"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="mt-[30px] lg:mt-0">
              <Reveal className="mb-6">
                <DarkIconTitle iconSrc={tagGreen} animate={true} iconSize={11}>
                  About APME 2026
                </DarkIconTitle>
              </Reveal>

              <h2 className="mt-[30px] font-heading text-[40px] font-extrabold leading-[46px] text-primary max-[991px]:text-[28px]">
                A Global Forum for the <br /> Sciences That{' '}
                <span className="text-secondary">Power Tomorrow</span>
              </h2>

              <p className="my-[40px] text-[18px] text-mini max-[991px]:text-[16px]">
                APME 2026 brings together the world's foremost researchers,
                mathematicians, and energy scientists — sharing rigorous work,
                forging cross-disciplinary collaborations, and shaping the
                trajectory of applied science. Three days. Three tracks. Endless
                possibility.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <ButtonLink to="/contact" variant="primary">
                  Submit Your Paper
                </ButtonLink>
                <ButtonLink to="/contact" variant="secondary">
                  Register Now
                </ButtonLink>
              </div>
            </div>
          </Reveal>
          <div className='border-t border-stroke !my-[60px]'></div>
          <Reveal className="mb-10 text-center max-[991px]:mb-10">
            <h2 className="font-heading text-[22px] font-bold leading-[46px] max-[991px]:text-[28px] text-primary">
              The <span className="text-secondary">Core Disciplines</span> Driving APME 2026
            </h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="border border-stroke rounded-[10px] bg-white hover-card p-[24px]"
              >
                <div className="mb-[30px] overflow-hidden rounded-[4px]">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="hover-card-media aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h3 className="font-heading text-[22px] font-bold text-primary">
                  {card.title}
                </h3>
                <p className="mt-[14px] text-[14px] italic text-mini">{card.subtitle}</p>
                <p className="mt-[14px] pt-[14px] flex-1 text-[16px] text-body line-clamp-4 border-t border-stroke">
                  {card.description}
                </p>

                <div className="mt-[30px]">
                  <ButtonLink to={card.readMoreTo} variant="tertiary">
                    Read More
                  </ButtonLink>
                </div>
              </article>
            ))}
          </Reveal>
        </Container>
      </Pad>
    </section>
  )


}

