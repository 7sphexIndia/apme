import { ComingSoon } from '../components/pages/agenda/ComingSoon'
import { SampleSchedule } from '../components/pages/agenda/SampleSchedule'
import { PageHero } from '../components/common/PageHero'
import CTA from '../components/common/CTA'


export function Agenda() {
  return (
    <>
    <PageHero
        className="h-[703px] max-h-[703px]"
        overlayClassName="bg-[#0B1F3B]"
        contentAlign="center"
        contentClassName="max-w-[1100px]"
        badge={{
          text: 'DUBAI, UAE • NOV 15-17, 2026',
          iconSrc: '/img/green-dot.svg',
          animate: true,
          iconSize: 11,
        }}
        title={
          <>
            Conference Agenda
          </>
        }
        subtitle={
          <>
            Explore the detailed schedule of keynotes, technical sessions, workshops, and networking events across three transformative days.
          </>
        }
      />
      <ComingSoon />
      <SampleSchedule />
      <CTA
        className="bg-white py-[100px]"
        variant="double"
        tagText="Stay Informed"
        heading="Don't Miss Any Updates"
        description="Subscribe to receive the detailed agenda as soon as it's released, along with speaker announcements and conference highlights."
        primaryButton={{ label: 'Subscribe for Updates', to: '/contact' }}
        secondaryButton={{ label: 'View Call for Papers', to: '/contact', appearance: 'solidSecondary' }}
      />
    </>
  )
}



