import { PublicationIndexingSection } from '../components/common/PublicationIndexingSection'
import { PageHero } from '../components/common/PageHero'
import { PreviousPublications } from '../components/pages/publication/PreviousPublications'
import CTA from '../components/common/CTA'

const HOME_PUBLICATION_LOGOS = [
  { img: '/img/publication-1.svg', alt: 'Scopus' },
  { img: '/img/publication-2.svg', alt: 'EI Compendex' },
  { img: '/img/publication-3.svg', alt: 'IET Inspec' },
  { img: '/img/publication-4.svg', alt: 'WTI Frankfurt' },
  { img: '/img/publication-5.svg', alt: 'zbMATH Open' },
  { img: '/img/publication-6.svg', alt: 'SCImago' },
]

export function Publication() {
  return (
    <>
      <PageHero
        className="h-[703px] max-h-[703px]"
        overlayClassName="bg-[#0B1F3B]"
        contentAlign="center"
        contentClassName="!max-w-[1100px]"
        badge={{
          text: 'APME 2026 — Research Output',
          iconSrc: '/img/green-dot.svg',
          animate: true,
          iconSize: 11,
        }}
        title={
          <>
            Your Research <br /> Published &amp; Indexed Globally
          </>
        }
      />
      <PublicationIndexingSection
        kickerIconSrc="/img/schedule.svg"
        kickerText="Coming Soon"
        heading={
          <>
            Published &<span className="text-secondary">Indexing</span>
          </>
        }
        description={
          <>
            All accepted and presented papers will be considered for publication in internationally indexed proceedings.
          </>
        }
        note={
          <>
            Indexed by SCOPUS, EI Compendex, INSPEC, WTI Frankfurt eG, zbMATH, SCImago. All books published in the series are submitted for consideration in the Web of Science**
          </>
        }
        logos={HOME_PUBLICATION_LOGOS}
        imageFetchPriority="high"
      />
      <PreviousPublications />
      <CTA
        className="bg-white py-[100px]"
        variant="form"
        tagText="STAY UPDATED"
        heading="Don't Miss APME 2026"
        description="Get the latest news on publication deadlines, indexing updates, and conference schedules"
        submitLabel="Subscribe"
      />
    </>
  )
}
 

