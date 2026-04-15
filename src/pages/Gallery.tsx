import { PageHero } from '../components/common/PageHero'
import CTA from '../components/common/CTA'
import { GallerySection } from '../components/pages/gallery/GallerySection'

export function Gallery() {
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
        title={<>Gallery</>}
        subtitle={
          <>
            Explore moments from our conferences, showcasing engaging sessions, global participation, and vibrant
            networking experiences.
          </>
        }
      />

      <GallerySection />

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
