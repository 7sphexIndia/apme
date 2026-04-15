import { PageHero } from '../components/common/PageHero'
import { CommitteesTabsSection } from '../components/pages/committees/CommitteesTabsSection'
import CTA from '../components/common/CTA'

export function Committees() {
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
            Our Committees
          </>
        }
        subtitle={
          <>
            Meet the distinguished panel of experts, academics, and industry leaders guiding APME 2026 towards excellence.
          </>
        }
      />

      <CommitteesTabsSection />

      <CTA
        className="bg-white py-[100px]"
        variant="form"
        tagText="STAY UPDATED"
        heading="Don't Miss APME 2026"
        description="Get the latest news on publication deadlines, indexing updates, and conference schedules"
        submitLabel="Subscribe"
      />
    </>
  )
}
 

