import { PageHero } from '../components/common/PageHero'
import { VenueInformation } from '../components/pages/venue/VenueInformation'
import { GettingToDubai } from '../components/pages/venue/GettingToDubai'
import { DubaiAttractions } from '../components/pages/venue/DubaiAttractions'
import { WhyDubaiSection } from '../components/pages/home/WhyDubaiSection'
import CTA from '../components/common/CTA'

export function Venue() {
  return (
    <>
      <PageHero
        className="h-[703px] max-h-[703px]"
        overlayClassName="bg-[#0B1F3B]"
        contentAlign="center"
        contentClassName="max-w-[1100px]"
        badge={{
          text: 'DUBAI, UNITED ARAB EMIRATES',
          iconSrc: '/img/green-dot.svg',
          animate: true,
          iconSize: 11,
        }}
        title={
          <>
          Experience APME Dubai
          </>
        }
        subtitle={
          <>
            Where innovation meets tradition. Join us in the global capital of the future for APME 2026, November 15-17, 2026.
          </>
        }
      />
      <WhyDubaiSection className="bg-white !py-[100px] max-[991px]:py-[60px]" />
      <VenueInformation />
      <GettingToDubai />
      <DubaiAttractions />
      <CTA
        className="bg-white py-[100px]"
        variant="double"
        tagText="Ready to Join Us?"
        heading="Experience Dubai in November 2026"
        description="Perfect weather, world-class facilities, and unforgettable experiences await you at APME 2026."
        primaryButton={{ label: 'Register Now', to: '/contact' }}
        secondaryButton={{ label: 'Have Questions?', to: '/contact', appearance: 'solidSecondary' }}
      />
    </>
  )
}


