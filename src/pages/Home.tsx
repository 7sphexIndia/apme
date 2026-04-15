import { HeroSection } from '../components/pages/home/HeroSection'
import { AboutSection } from '../components/pages/home/AboutSection'
import { WhyDubaiSection } from '../components/pages/home/WhyDubaiSection'
import { ImportantDatesSection } from '../components/pages/home/ImportantDatesSection'
import { JoinSection } from '../components/pages/home/JoinSection'
import { PartnersSection } from '../components/pages/home/PartnersSection'
import { StatsSection } from '../components/pages/home/StatsSection'
import { WhoShouldAttend } from '../components/pages/home/WhoShouldAttend'
import { EventHighlights } from '../components/pages/home/EventHighlights'


import { PublicationIndexingSection } from '../components/common/PublicationIndexingSection'
import CTA from '../components/common/CTA'

const HOME_PUBLICATION_LOGOS = [
  { img: '/img/publication-1.svg', alt: 'Scopus' },
  { img: '/img/publication-2.svg', alt: 'EI Compendex' },
  { img: '/img/publication-3.svg', alt: 'IET Inspec' },
  { img: '/img/publication-4.svg', alt: 'WTI Frankfurt' },
  { img: '/img/publication-5.svg', alt: 'zbMATH Open' },
  { img: '/img/publication-6.svg', alt: 'SCImago' },
]

export function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <PublicationIndexingSection
        kickerIconSrc="/img/home-publication.svg"
        kickerText="PUBLICATION & INDEXING"
        heading={
          <>
            Your Research, Published & <span className="text-secondary">Indexed Globally</span>
          </>
        }
        description={
          <>
            All accepted and presented papers will be considered for publication in internationally indexed proceedings.
          </>
        }
        note={
          <>
            Indexed by SCOPUS, EI Compendex, INSPEC, WTI Frankfurt eG, zbMATH, SCImago. All books published in the
            series are submitted for consideration in the Web of Science**
          </>
        }
        logos={HOME_PUBLICATION_LOGOS}
      />

      <PartnersSection />
      <WhoShouldAttend />
      <EventHighlights />
      <WhyDubaiSection />
      <ImportantDatesSection />
      <JoinSection />
      <CTA
        className="bg-white py-[100px]"
        variant="form"
        tagText="STAY UPDATED"
        heading="Don't Miss APME 2026"
        description="Get speaker announcements, CFP reminders, and exclusive conference updates directly in your inbox."
        submitLabel="Subscribe"
      />
    </>
  )
}