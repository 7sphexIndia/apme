import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'
import homePublicationTag from '../../../assets/img/home-publication.svg'
import publication1 from '../../../assets/img/publication-1.svg'
import publication2 from '../../../assets/img/publication-2.svg'
import publication3 from '../../../assets/img/publication-3.svg'
import publication4 from '../../../assets/img/publication-4.svg'
import publication5 from '../../../assets/img/publication-5.svg'
import publication6 from '../../../assets/img/publication-6.svg'

const PUBLICATION_LOGOS = [
  { img: publication1, alt: 'Scopus' },
  { img: publication2, alt: 'EI Compendex' },
  { img: publication3, alt: 'IET Inspec' },
  { img: publication4, alt: 'WTI Frankfurt' },
  { img: publication5, alt: 'zbMATH Open' },
  { img: publication6, alt: 'SCImago' },
]

export function PublicationIndexing() {
  return (
    <section className="bg-white py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <div className="flex flex-col items-center text-center">
            <Reveal className="mb-[30px] flex justify-center">
              <DarkIconTitle iconSrc={homePublicationTag}>
                PUBLICATION & INDEXING
              </DarkIconTitle>
            </Reveal>

            <Reveal className="mb-10 md:mb-5">
              <h2 className="font-heading text-[36px] font-bold leading-[46px] text-primary max-[991px]:text-[32px]">
                Your Research, Published & <span className="text-secondary">Indexed Globally</span>
              </h2>
            </Reveal>

            <Reveal className="max-w-[800px]">
              <p className="text-[18px] text-body max-[991px]:text-[16px]">
                All accepted and presented papers will be considered for publication in
                internationally indexed proceedings.
              </p>
            </Reveal>

            <div className="w-full border-t border-stroke !my-[60px]"></div>

            <Reveal className="mb-10">
              <p className="text-[16px] font-regular text-body/80">
                Indexed by SCOPUS, EI Compendex, INSPEC, WTI Frankfurt eG, zbMATH, SCImago. 
                All books published in the series are submitted for consideration in the Web of Science**
              </p>
            </Reveal>

            <Reveal className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-5">
              {PUBLICATION_LOGOS.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex h-[100px] items-center justify-center rounded-[10px] bg-white shadow-none transition-shadow duration-300 hover:shadow-sm"
                >
                  <img
                    src={logo.img}
                    alt={logo.alt}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </Pad>
    </section>
  )
}
