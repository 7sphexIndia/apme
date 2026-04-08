import { HeroSection } from '../components/pages/home/HeroSection'
import { PublicationIndexing } from '../components/pages/home/PublicationIndexing'
import { AboutSection } from '../components/pages/home/AboutSection'
import { PartnersSection } from '../components/pages/home/PartnersSection'
import { StatsSection } from '../components/pages/home/StatsSection'
import { WhoShouldAttend } from '../components/pages/home/WhoShouldAttend'
import { EventHighlights } from '../components/pages/home/EventHighlights'

export function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <PublicationIndexing />
      <PartnersSection />
      <WhoShouldAttend />
      <EventHighlights />
    </>
  )
}