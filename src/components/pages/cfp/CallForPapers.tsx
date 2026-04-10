import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import speakerIcon from '../../../assets/img/speaker-icon.svg'
import cfpImage from '../../../assets/img/cfp-image.webp'
 
export function CallForPapers() {
  return (
    <section className="py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <div className="grid grid-cols-1 items-center gap-[30px] lg:grid-cols-2">
            <div className="h-[487px] overflow-hidden rounded-[10px] max-[991px]:h-[320px] max-[767px]:h-[220px]">
              <img
                src={cfpImage}
                alt="Scientific illustration representing research innovation"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
 
            <div>
              <DarkIconTitle iconSrc={speakerIcon}>Call For Papers</DarkIconTitle>
 
              <h2 className="mt-[30px] font-heading text-[36px] font-bold leading-[46px] text-primary max-[991px]:text-[28px]">
                Forging the Next Frontier of <br />
                <span className="text-secondary">Scientific Innovation</span>
              </h2>
 
              <div className="mt-[40px] space-y-[7px] text-[18px] leading-[23px] text-body max-[991px]:text-[16px]">
                <p>
                  The International Conference on Applied Physics, Mathematics &amp; Energy (APME
                  2026) invites original and unpublished research papers, case studies, and
                  innovative contributions that explore the intersection of physical sciences,
                  mathematical modeling, and energy systems.
                </p>
                <p>
                  The conference aims to bring together researchers, academicians, industry
                  professionals, and scholars to discuss emerging trends, advanced methodologies,
                  and real-world applications that are driving scientific and technological
                  progress.
                </p>
                <p>
                  Authors are invited to submit original, high-quality papers covering theoretical,
                  experimental, or applied research in applied physics, mathematics, and energy —
                  including interdisciplinary and state-of-the-art contributions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Pad>
    </section>
  )
}
 