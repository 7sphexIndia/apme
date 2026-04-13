import Container from '../components/common/Container'
import { Pad } from '../components/common/Pad'
import { Reveal } from '../components/common/Reveal'
import { PageHero } from '../components/common/PageHero'
import CTA from '../components/common/CTA'

const GALLERY_ITEMS = [
  { url: '/img/about-img.webp', file: 'About Conference', kind: 'image' },
  { url: '/img/pillars-img-1.webp', file: 'Track I Highlights', kind: 'image' },
  { url: '/img/pillars-img-2.webp', file: 'Track II Highlights', kind: 'image' },
  { url: '/img/pillars-img-3.webp', file: 'Track III Highlights', kind: 'image' },
  { url: '/img/community1.webp', file: 'Dubai Discovery', kind: 'image' },
  { url: '/img/cfp-image.webp', file: 'Call for Papers Illustration', kind: 'image' },
  { url: '/video/hero-video.mp4', file: 'Conference Hero Intro', kind: 'video' },
  { url: '/video/cta-video.mp4', file: 'Call to Action Preview', kind: 'video' },
] as const

export function Gallery() {
  const items = GALLERY_ITEMS

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
            Gallery
          </>
        }
        subtitle={
          <>
            Explore moments from our conferences, showcasing engaging sessions, global participation, and vibrant networking experiences.
          </>
        }
      />
    <section className="py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <Reveal>
            <h2 className="mb-[40px] font-heading text-[36px] font-bold leading-[115%] text-primary max-[991px]:text-[28px]">
              Gallery
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <div key={item.url}>
                  <div className="overflow-hidden rounded-[10px] bg-white shadow-sm ring-1 ring-border">
                    {item.kind === 'video' ? (
                      <video className="block w-full" controls preload="metadata">
                        <source src={item.url} />
                        Sorry, your browser doesn’t support embedded videos.
                      </video>
                    ) : (
                      <img
                        src={item.url}
                        alt={item.file}
                        className="block aspect-video w-full object-cover"
                        loading={items.indexOf(item) === 0 ? undefined : 'lazy'}
                        fetchPriority={items.indexOf(item) === 0 ? 'high' : undefined}
                      />
                    )}
                    <div className="px-4 py-3">
                      <div className="truncate text-sm text-body">{item.file}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Pad>
    </section>
    <CTA
        className="bg-white py-[100px]"
        variant="double"
        tagText="Stay Informed"
        heading="Don't Miss Any Updates"
        description="Subscribe to receive the detailed agenda as soon as it's released, along with speaker announcements and conference highlights."
        videoSrc="/video/cta-video.mp4"
        primaryButton={{ label: 'Subscribe for Updates', to: '/contact' }}
        secondaryButton={{ label: 'View Call for Papers', to: '/contact', appearance: 'solidSecondary' }}
      />
    </> 
  )
}



