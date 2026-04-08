import { Link } from 'react-router-dom'
import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import publicationImg from '../../../assets/img/publication-img.png'

const INDEXES = [
  'SCOPUS',
  'Web of Science',
  'Springer Nature',
  'IEEE Xplore',
  'Ei Compendex',
  'Google Scholar',
] as const

export function PublicationIndexing() {
  return (
    <section className="bg-white py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <header className="mb-[60px] text-center max-[991px]:mb-10">
            <div className="mb-[30px] flex justify-center">
              <DarkIconTitle>Publication & Indexing</DarkIconTitle>
            </div>

            <h2 className="font-heading text-[36px] font-bold leading-[115%] text-primary max-[991px]:text-[28px]">
              Your Research, <span className="text-secondary">Indexed Globally</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="overflow-hidden rounded-[10px] max-[991px]:max-h-[446px] lg:max-h-none">
              <img
                src={publicationImg}
                alt="Conference hall with audience and speakers on stage"
                className="h-full min-h-[200px] w-full object-cover lg:min-h-[446px]"
                loading="lazy"
              />
            </div>

            <div>
              <p className="mb-8 text-[18px] leading-relaxed text-body max-[991px]:mb-6 max-[991px]:text-[16px]">
                All accepted and presented papers will be considered for publication in
                internationally indexed journals and proceedings.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {INDEXES.map((name) => (
                  <div
                    key={name}
                    className="rounded-md bg-primary px-3 py-3 text-center text-[13px] font-semibold leading-tight text-white sm:px-4 sm:text-[14px]"
                  >
                    {name}
                  </div>
                ))}
              </div>

              <nav
                className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 max-[991px]:mt-6 max-[991px]:flex-col max-[991px]:items-start max-[991px]:gap-y-2"
                aria-label="Publication highlights"
              >
                <Link
                  to="/cfp"
                  className="text-[16px] font-medium text-secondary underline underline-offset-[3px] transition-colors hover:text-primary"
                >
                  Double-Blind Peer Review
                </Link>
                <Link
                  to="/publication"
                  className="text-[16px] font-medium text-secondary underline underline-offset-[3px] transition-colors hover:text-primary"
                >
                  Best Paper Award — Each Track
                </Link>
                <Link
                  to="/publication"
                  className="text-[16px] font-medium text-secondary underline underline-offset-[3px] transition-colors hover:text-primary"
                >
                  Digital Proceedings for All
                </Link>
              </nav>
            </div>
          </div>
        </Container>
      </Pad>
    </section>
  )
}
