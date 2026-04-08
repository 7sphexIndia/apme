import { HeroSection } from '../components/pages/home/HeroSection'
import { PublicationIndexing } from '../components/pages/home/PublicationIndexing'
import { AboutSection } from '../components/pages/home/AboutSection'
import { ThreePillars } from '../components/pages/home/ThreePillars'

export function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ThreePillars />
      <PublicationIndexing />
    </>
  )
}