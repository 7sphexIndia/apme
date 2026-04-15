import { PageHero } from '../components/common/PageHero'
import { SpeakersSections } from '../components/pages/speakers/SpeakersSections'

export function Speakers() {
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
            Featured Speakers
          </>
        }
        subtitle={
          <>
           World-renowned researchers, industry leaders, and academic pioneers sharing groundbreaking insights in Applied Physics, Mathematics & Energy.
          </>
        }
      />
      <SpeakersSections />
    </>
  )
}
 

