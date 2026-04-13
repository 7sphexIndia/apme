import Container from '../../common/Container'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'

const partners = [
  {
    label: 'Supporting Local Partner',
    logo: '/img/partner-logo1.svg',
    alt: 'Global Chamber London',
  },
  {
    label: 'International Organizing Partner',
    logo: '/img/partner-logo2.svg',
    alt: 'GR Foundation',
  },
  {
    label: 'International Managing Partner',
    logo: '/img/partner-logo3.svg',
    alt: 'GR Scholastic',
  },
  {
    label: 'Publication Partner',
    logo: '/img/partner-logo4.svg',
    alt: 'Springer Nature',
  },
]

export function PartnersSection() {
  return (
    <section className="bg-secondary py-[66px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex flex-col items-center gap-5">
                <span className="text-center text-[18px] font-bold text-white">
                  {partner.label}
                </span>
                <div className="flex h-[160px] w-full items-center justify-center rounded-[10px] bg-white shadow-none">
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </Pad>
    </section>
  )
}
