import { useState } from 'react'
import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'




type PublicationCard = {
  id: string
  title: string
  img: string
  pdf: string
}

type YearlyPublications = {
  [year: string]: {
    ict4sd: PublicationCard[]
    worlds4: PublicationCard[]
  }
}

const TEMP_PDF_URL =
  'https://drive.google.com/file/d/1j5-NRWOcDA-2prvREydsGqaAC_3bk76n/view?usp=sharing'

const PUBLICATIONS_DATA: YearlyPublications = {
  '2024': {
    ict4sd: [
      { id: '2024-1', title: 'ICT4SD Vol 1', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
      { id: '2024-2', title: 'ICT4SD Vol 2', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
      { id: '2024-3', title: 'ICT4SD Vol 3', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
      { id: '2024-4', title: 'ICT4SD Vol 4', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
      { id: '2024-9', title: 'ICT4SD Vol 5', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
      { id: '2024-10', title: 'ICT4SD Vol 6', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
      { id: '2024-11', title: 'ICT4SD Vol 7', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
      { id: '2024-12', title: 'ICT4SD Vol 8', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
    ],
    worlds4: [
      { id: '2024-5', title: 'Worlds4 Vol 1', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
      { id: '2024-6', title: 'Worlds4 Vol 2', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
      { id: '2024-7', title: 'Worlds4 Vol 3', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
      { id: '2024-8', title: 'Worlds4 Vol 4', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
    ],
  },
  '2023': {
    ict4sd: [
      { id: '2023-1', title: 'ICT4SD Vol 1', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
      { id: '2023-2', title: 'ICT4SD Vol 2', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
      { id: '2023-3', title: 'ICT4SD Vol 3', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
      { id: '2023-4', title: 'ICT4SD Vol 4', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
    ],
    worlds4: [],
  },
  '2022': {
    ict4sd: [
      { id: '2022-1', title: 'ICT4SD Vol 1', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
      { id: '2022-2', title: 'ICT4SD Vol 2', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
    ],
    worlds4: [],
  },
  '2021': {
    ict4sd: [
      { id: '2021-1', title: 'ICT4SD Vol 1', img: '/img/publication.webp', pdf: TEMP_PDF_URL },
    ],
    worlds4: [],
  },
}

function PublicationCardItem({
  pub,
}: {
  pub: PublicationCard
}) {
  return (
    <Reveal>
      <a
        href={pub.pdf}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${pub.title} PDF`}
        className="group block cursor-pointer overflow-hidden rounded-[10px] border border-stroke bg-white p-3 transition-all duration-500 hover:border-secondary/20 hover:shadow-xl md:p-4"
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-[12px] bg-gray-50 mb-4">
          <img
            src={pub.img}
            alt={pub.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          
          {/* Simple Hover Overlay: Download Icon Only */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-2xl transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="text-left">
          <h3 className="line-clamp-1 font-medium text-primary text-[16px]">
            {pub.title}
          </h3>
        </div>
      </a>
    </Reveal>
  )
}

export function PreviousPublications() {
  const years = Object.keys(PUBLICATIONS_DATA).sort((a, b) => b.localeCompare(a))
  const [activeYear, setActiveYear] = useState(years[0])

  const currentYearData = PUBLICATIONS_DATA[activeYear]

  return (
    <section className="bg-light-bg py-[50px] md:py-[80px]">
      <Pad>
        <Container>
          <div className="flex flex-col items-center">
            <Reveal className="mb-6 flex justify-center">
              <DarkIconTitle iconSrc="/img/publication-tag.svg">PUBLICATION</DarkIconTitle>
            </Reveal>

            <Reveal className="mb-10 text-center md:mb-[60px]">
              <h2 className="text-[32px] font-bold leading-tight text-primary md:text-[42px]">
                Previous Publication <span className="text-secondary">Proceedings</span>
              </h2>
            </Reveal>

            {/* Tabs & Dropdown */}
            <Reveal className="mb-10 w-full md:mb-[60px]">
              {/* Desktop Tabs */}
              <div className="hidden justify-center gap-4 md:flex">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`flex h-14 min-w-[110px] items-center justify-center rounded-[10px] border px-6 text-[18px] font-bold transition-all duration-300 ${
                      activeYear === year
                        ? 'border-secondary bg-secondary text-white'
                        : 'border-[rgba(11, 31, 59, 0.10)] bg-[rgba(11, 31, 59, 0.02)] text-primary hover:border-secondary/30 hover:bg-secondary/5'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>

              {/* Mobile Dropdown */}
              <div className="relative mx-auto max-w-[280px] md:hidden">
                <select
                  value={activeYear}
                  onChange={(e) => setActiveYear(e.target.value)}
                  className="h-12 w-full appearance-none rounded-[10px] border border-primary/10 bg-white px-5 pr-10 text-sm font-bold text-primary outline-none focus:border-secondary transition-all"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      Year {year}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    className="h-4 w-4 text-primary/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </Reveal>

            {/* Stable Layout Grid */}
            <div className="grid w-full grid-cols-1 gap-[40px] lg:grid-cols-2">
              {/* ICT4SD Group (Spans Left half on desktop) */}
              {currentYearData.ict4sd.length > 0 && (
                <div className="w-full">
                  <div className="grid grid-cols-2 gap-[20px] md:grid-cols-4 lg:grid-cols-4">
                    {currentYearData.ict4sd.map((pub) => (
                      <PublicationCardItem 
                        key={pub.id} 
                        pub={pub} 
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Worlds4 Group (Spans Right half on desktop) */}
              {currentYearData.worlds4.length > 0 ? (
                <div className="w-full">
                  <div className="grid grid-cols-2 gap-[20px] md:grid-cols-4 lg:grid-cols-4">
                    {currentYearData.worlds4.map((pub) => (
                      <PublicationCardItem 
                        key={pub.id} 
                        pub={pub} 
                      />
                    ))}
                  </div>
                </div>
              ) : (
                /* Empty placeholder to maintain layout grid on desktop */
                <div className="hidden lg:block w-full" />
              )}
            </div>
          </div>
        </Container>
      </Pad>
    </section>
  )
}
