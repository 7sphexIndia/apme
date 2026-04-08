import Container from '../../common/Container'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'
import DarkIconTitle from '../../common/DarkIconTitle'
import highlightsIcon from '../../../assets/img/highlights.svg'

const highlightsList = [
  {
    title: 'Visionary Keynotes',
    tag: 'INSIGHT',
    description: 'Thought-provoking addresses by global pioneers shaping the future of science, innovation, and energy.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="8" y1="22" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    title: 'Frontier Research Showcases',
    tag: 'RESEARCH',
    description: 'High-impact presentations unveiling cutting-edge advancements across physics, mathematics, and energy.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Strategic Networking',
    tag: 'CONNECT',
    description: 'Curated opportunities to engage with global experts, peers, and industry pioneers through meaningful interactions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Publication Pathways',
    tag: 'PUBLISH',
    description: 'Opportunities to elevate your research through guided publication pathways, ensuring seamless access to global visibility.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Global Collaboration Platforms',
    tag: 'COLLAB',
    description: 'Structured opportunities to initiate cross-border partnerships, research alliances, and institutional collaborations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Innovation & Impact Exhibits',
    tag: 'INNOVATE',
    description: 'A curated showcase of transformative ideas, breakthrough research, and pioneering solutions shaping tomorrow.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

export function EventHighlights() {
  return (
    <section className="bg-white py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <div className="mb-14 flex flex-col items-center text-center">
            <Reveal className="mb-6">
              <DarkIconTitle iconSrc={highlightsIcon}>CONFERENCE EXPERIENCE</DarkIconTitle>
            </Reveal>
            <Reveal className="mb-6">
              <h2 className="font-heading text-[40px] font-bold leading-tight text-primary max-[991px]:text-[32px]">
                Event <span className="text-secondary">Highlights</span>
              </h2>
            </Reveal>
            <Reveal className="max-w-[760px]">
              <p className="text-[17px] font-medium text-body/80 max-[991px]:text-[16px]">
                APME 2026 is crafted as a transformative knowledge journey — every format is designed to inspire, connect, and elevate your research impact on a global stage.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlightsList.map((item, idx) => (
              <Reveal key={idx}>
                <div className="group h-full rounded-[12px] border border-stroke bg-white p-8 transition-all duration-300 hover:border-secondary/30 hover:shadow-[0_20px_40px_-15px_rgba(11,31,59,0.08)]">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-secondary/[0.08] text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                      {item.icon}
                    </div>
                    <span className="text-[12px] font-bold tracking-[0.05em] text-secondary/70">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-[20px] font-bold text-primary transition-colors group-hover:text-secondary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] text-body">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Pad>
    </section>
  )
}
