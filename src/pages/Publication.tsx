import { PublicationIndexingSection } from '../components/common/PublicationIndexingSection'
import { PageHero } from '../components/common/PageHero'
import scheduleTag from '../assets/img/schedule.svg'
import publication1 from '../assets/img/publication-1.svg'
import publication2 from '../assets/img/publication-2.svg'
import publication3 from '../assets/img/publication-3.svg'
import publication4 from '../assets/img/publication-4.svg'
import publication5 from '../assets/img/publication-5.svg'
import publication6 from '../assets/img/publication-6.svg'
import tagGreen from '../assets/img/green-dot.svg'
import { PreviousPublications } from '../components/pages/publication/PreviousPublications'
import ctaVideo from '../assets/video/cta-video.mp4'
import CTA from '../components/common/CTA'

const HOME_PUBLICATION_LOGOS = [
  { img: publication1, alt: 'Scopus' },
  { img: publication2, alt: 'EI Compendex' },
  { img: publication3, alt: 'IET Inspec' },
  { img: publication4, alt: 'WTI Frankfurt' },
  { img: publication5, alt: 'zbMATH Open' },
  { img: publication6, alt: 'SCImago' },
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
          iconSrc: tagGreen,
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
        kickerIconSrc={scheduleTag}
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
      />
      <PreviousPublications />
      <CTA
        className="bg-white py-[100px]"
        variant="form"
        tagText="STAY UPDATED"
        heading="Don't Miss APME 2026"
        description="Get the latest news on publication deadlines, indexing updates, and conference schedules"
        videoSrc={ctaVideo}
        submitLabel="Subscribe"
      />
    </>
  )
}
 

