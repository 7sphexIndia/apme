import { ButtonLink } from '../../common/ButtonLink'
import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import aboutImage from '../../../assets/img/about-img.webp'

export function AboutSection() {
  return (
    <section className="py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className="h-[467px] overflow-hidden rounded-[10px] max-[767px]:h-[250px]">
              <img
                src={aboutImage}
                alt="Conference audience and keynote presentation"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-[30px] lg:mt-0">
              <DarkIconTitle>About APME 2026</DarkIconTitle>

              <h2 className="mt-[30px] font-heading text-[36px] font-bold leading-[115%] text-primary max-[991px]:text-[28px]">
                A Global Forum for the <br /> Sciences That{' '}
                <span className="text-secondary">Power Tomorrow</span>
              </h2>

              <p className="my-[40px] text-[18px] text-body max-[991px]:text-[16px]">
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
          </div>
        </Container>
      </Pad>
    </section>
  )
}

