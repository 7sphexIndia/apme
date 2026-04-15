import { ButtonLink } from '../../common/ButtonLink'
import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'

export function SubmitNow() {
  return (
    <section className="bg-light-bg py-[80px] max-[991px]:py-[50px]">
      <Pad>
        <Container>
          <div className="grid grid-cols-1 items-stretch gap-[30px] lg:grid-cols-[1fr_0.45fr] lg:gap-[60px]">
            <div>
              <DarkIconTitle iconSrc="/img/submit-file-icon.svg">Submit now</DarkIconTitle>

              <h2 className="mt-[30px] font-heading text-[36px] font-bold leading-[115%] text-primary max-[991px]:text-[28px]">
                Submission <span className="text-secondary">Guidelines</span>
              </h2>

              <div className="mt-[40px] space-y-[10px] text-[18px] leading-[23px] text-body max-[991px]:text-[16px]">
                <p>
                  Prospective authors are invited to submit paper(s) with 10 pages standard size
                  and extension in pages possible written in A4 size (Springer format).
                </p>
                <p>
                  Authors are required to also adhere to the Springer Policy and Procedures on
                  Plagiarism:
                </p>
              </div>

              <div className="mt-[40px] flex flex-wrap items-center gap-[16px]">
                <ButtonLink to="/contact" variant="primary">
                  Paper Submission Guidelines
                </ButtonLink>
                <ButtonLink to="/contact" variant="secondary">
                  Submit your paper now
                </ButtonLink>
              </div>
            </div>

            <div className="flex h-full items-center justify-center rounded-[10px] bg-white p-[30px]">
              {/* NOTE: this intentionally uses a runtime path so it won't error if the PNG isn't committed yet. */}
              <img
                src="/img/submit-logo.png"
                alt="Submission platform logo"
                className="max-h-[120px] w-full max-w-[320px] object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </Container>
      </Pad>
    </section>
  )
}

 