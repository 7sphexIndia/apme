import { CallForPapers } from '../components/pages/cfp/CallForPapers'
import { PageHero } from '../components/common/PageHero'
import tagGreen from '../assets/img/green-dot.svg'
import { MarkYourCalendar } from '../components/pages/cfp/MarkYourCalendar'
import { ResearchAreas } from '../components/pages/cfp/ResearchAreas'
import { SubmitNow } from '../components/pages/cfp/SubmitNow'
import { PublicationIndexingSection } from '../components/common/PublicationIndexingSection'
import scheduleTag from '../assets/img/schedule.svg'
import publication1 from '../assets/img/publication-1.svg'
import publication2 from '../assets/img/publication-2.svg'
import publication3 from '../assets/img/publication-3.svg'
import publication4 from '../assets/img/publication-4.svg'
import publication5 from '../assets/img/publication-5.svg'
import publication6 from '../assets/img/publication-6.svg'

const HOME_PUBLICATION_LOGOS = [
  { img: publication1, alt: 'Scopus' },
  { img: publication2, alt: 'EI Compendex' },
  { img: publication3, alt: 'IET Inspec' },
  { img: publication4, alt: 'WTI Frankfurt' },
  { img: publication5, alt: 'zbMATH Open' },
  { img: publication6, alt: 'SCImago' },
]

export function Cfp() {
  return (
    <>
      <PageHero
        className="h-[703px] max-h-[703px]"
        overlayClassName="bg-[#0B1F3B]"
        contentAlign="center"
        badge={{
          text: 'DUBAI, UAE • NOV 15–17, 2026',
          iconSrc: tagGreen,
        }}
        title={<>Call for Papers</>}
        subtitle={
          <>
            Join the world&apos;s leading researchers in Applied Physics, Mathematics &amp; Energy.
            Submit your groundbreaking research to APME 2026 and help shape the future of
            scientific innovation.
          </>
        }
      />
      <CallForPapers />
      <MarkYourCalendar />
      <ResearchAreas />
      <SubmitNow />
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
    </>
  )
}
 