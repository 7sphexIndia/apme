import { CallForPapers } from '../components/pages/cfp/CallForPapers'
import { PageHero } from '../components/common/PageHero'
import { MarkYourCalendar } from '../components/pages/cfp/MarkYourCalendar'
import { ResearchAreas } from '../components/pages/cfp/ResearchAreas'
import { SubmitNow } from '../components/pages/cfp/SubmitNow'
import { PublicationIndexingSection } from '../components/common/PublicationIndexingSection'
import { Resources } from '../components/pages/cfp/Resources'
import CTA from '../components/common/CTA'

const HOME_PUBLICATION_LOGOS = [
  { img: '/img/publication-1.svg', alt: 'Scopus' },
  { img: '/img/publication-2.svg', alt: 'EI Compendex' },
  { img: '/img/publication-3.svg', alt: 'IET Inspec' },
  { img: '/img/publication-4.svg', alt: 'WTI Frankfurt' },
  { img: '/img/publication-5.svg', alt: 'zbMATH Open' },
  { img: '/img/publication-6.svg', alt: 'SCImago' },
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
          iconSrc: '/img/green-dot.svg',
          animate: true,
          iconSize: 11,
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
      />
      <Resources />
      <CTA
        className="bg-white py-[100px]"
        variant="single"
        tagText="READY TO CONTRIBUTE?"
        heading="Submit Your Research Today"
        description="Join leading researchers from around the world at APME 2026. Share your innovative work and connect with the scientific community."
        videoSrc="/video/cta-video.mp4"
        button={{ label: 'Submit Paper Now', to: '/contact' 
          
        }}
      />
      
    </>
  )
}
 