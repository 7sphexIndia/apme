import { CallForPapers } from '../components/pages/cfp/CallForPapers'
import { PageHero } from '../components/common/PageHero'
import tagGreen from '../assets/img/tag-green.svg'
 
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
    </>
  )
}
 