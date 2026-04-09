import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'
import calenderIcon from '../../../assets/img/calender-icon.svg'

const milestones = [
  {
    date: 'June 1, 2026',
    label: 'ABSTRACT SUBMISSION OPENS',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    date: 'Aug 31, 2026',
    label: 'FULL PAPER DEADLINE',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    date: 'Sep 30, 2026',
    label: 'ACCEPTANCE NOTIFICATION',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    date: 'Oct 15, 2026',
    label: 'EARLY BIRD REGISTRATION',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    date: 'Oct 15, 2026',
    label: 'CONFERENCE DATES',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/>
      </svg>
    ),
  },
]

export function ImportantDatesSection() {
  return (
    <section className="py-[100px] bg-white max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <div className="flex flex-col items-center text-center">
            <Reveal className="mb-6">
              <DarkIconTitle iconSrc={calenderIcon}>Key Milestones</DarkIconTitle>
            </Reveal>
            <Reveal className="mb-[80px]">
              <h2 className="font-heading text-[40px] font-extrabold text-primary max-[767px]:text-[32px]">
                Important <span className="text-secondary">Dates</span>
              </h2>
            </Reveal>
          </div>

          <div className="relative">
            {/* Faded Horizontal Line */}
            <div 
              className="absolute top-[86px] left-0 right-0 h-[2px] bg-secondary/30 hidden md:block"
              style={{ 
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
              }}
            />
            
            <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-0">
              {milestones.map((milestone, idx) => (
                <Reveal key={idx} delay={idx * 0.1} className="relative flex flex-col items-center text-center px-4">
                  {/* Top Icon Circle (Hollow) */}
                  <div className="relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-secondary bg-white text-secondary transition-all hover:bg-secondary hover:text-white group">
                    <div className="scale-90 transition-transform group-hover:scale-100">
                      {milestone.icon}
                    </div>
                  </div>
                  
                  {/* Vertical Connector Line */}
                  <div className="h-[26px] w-[2px] bg-secondary/30 hidden md:block" />
                  
                  {/* Small Hollow Node Circle on the horizontal line */}
                  <div className="relative z-10 h-[10px] w-[10px] rounded-full border-2 border-secondary bg-white hidden md:block -mt-[6px] mb-6" />
                  
                  {/* Text Content */}
                  <div className="mt-4 md:mt-0">
                    <h3 className="mb-2 text-xl font-bold text-primary max-[767px]:text-lg">
                      {milestone.date}
                    </h3>
                    <p className="text-[13px] font-bold uppercase tracking-widest text-primary/60 max-[767px]:text-[11px]">
                      {milestone.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Pad>
    </section>
  )
}
