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
import homePublicationTag from '../assets/img/home-publication.svg'
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

export function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <PublicationIndexingSection
        kickerIconSrc={homePublicationTag}
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
    </>
  )
}