import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'

const ATTRACTIONS = [
  {
    title: 'Burj Khalifa',
    subtitle: "World's Tallest Tower",
    description: "World's largest shopping destination with 1,200+ stores, aquarium, ice rink, and entertainment.",
    img: '/img/discover_1.webp',
  },
  {
    title: 'The Dubai Mall',
    subtitle: 'Shopping & Entertainment',
    description: 'A global destination for high-end fashion, fine dining, and world-class attractions.',
    img: '/img/discover_2.webp',
  },
  {
    title: 'Palm Jumeirah',
    subtitle: 'Architectural Marvel',
    description: 'An iconic palm-shaped island featuring luxury resorts and stunning coastline views.',
    img: '/img/discover_3.webp',
  },
  {
    title: 'Dubai Marina',
    subtitle: 'Waterfront Living',
    description: 'A spectacular urban canal district with luxury yachts and towering skyscrapers.',
    img: '/img/discover_4.webp',
  },
  {
    title: 'Gold Souk',
    subtitle: 'Traditional Market',
    description: 'A traditional market offering an endless selection of gold, silver, and precious gems.',
    img: '/img/discover_5.webp',
  },
  {
    title: 'Desert Safari',
    subtitle: 'Arabian Adventure',
    description: 'Experience the thrill of the dunes with traditional desert camps and sunset views.',
    img: '/img/discover_6.webp',
  },
  {
    title: 'Jumeirah Beach',
    subtitle: 'Beach Paradise',
    description: 'Pristine white sands and turquoise waters overlooking the iconic Burj Al Arab.',
    img: '/img/discover_7.webp',
  },
  {
    title: 'Museum of the Future',
    subtitle: 'Innovation Hub',
    description: 'An architectural and engineering marvel that explores the possibilities of tomorrow.',
    img: '/img/discover_8.webp',
  },
]

export function DubaiAttractions() {
  return (
    <section className="bg-light-bg py-[80px] max-[991px]:py-[50px]">
      <Pad>
        <Container>
          {/* Header */}
          <div className="mb-[60px] flex flex-col items-center text-center max-[991px]:mb-[40px]">
            <Reveal className="mb-[30px]">
              <DarkIconTitle iconSrc="/img/discover_tag.svg">DISCOVER DUBAI</DarkIconTitle>
            </Reveal>
            <Reveal className="mb-[44px]">
              <h2 className="font-heading text-[36px] font-bold leading-tight text-primary max-[991px]:text-[36px]">
                Unmissable <span className="text-secondary">Attractions</span>
                </h2>
            </Reveal>
            <Reveal className="max-w-[760px]">
              <p className="text-[18px] leading-relaxed text-body max-[991px]:text-[16px]">
                Explore iconic landmarks and hidden gems during your stay in the City of Gold
              </p>
            </Reveal>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
            {ATTRACTIONS.map((item, idx) => (
              <Reveal key={item.title} delay={idx % 4 * 100}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-[10px] bg-light-bg transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient overlays (match Figma) */}
                  <div
                    aria-hidden="true"
                    className={[
                      'pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-500 ease-out',
                      // Initial: Linear(180deg): transparent at 55% -> black at 100%
                      'bg-[linear-gradient(180deg,rgba(0,0,0,0)_55%,rgba(0,0,0,0.85)_100%)]',
                      // Hover: switch to stronger overlay
                      'group-hover:opacity-0',
                    ].join(' ')}
                  />
                  <div
                    aria-hidden="true"
                    className={[
                      'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out',
                      // Hover: stronger gradient like Figma hover
                      'bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(0,0,0,0.95)_100%)]',
                      'group-hover:opacity-100',
                    ].join(' ')}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <h3 className="mb-3 text-[22px] font-bold text-white">{item.title}</h3>
                    <p className="text-[14px] text-white italic tracking-[-1%]">
                      {item.subtitle}
                    </p>

                    {/* Description (hover only) */}
                    <p
                      className={[
                        'text-[16px] text-white',
                        'overflow-hidden',
                        'opacity-0 translate-y-2 max-h-0',
                        'transition-[opacity,transform,max-height] duration-500 ease-out',
                        'group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[72px] group-hover:mt-3',
                        'line-clamp-3',
                      ].join(' ')}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Pad>
    </section>
  )
}
