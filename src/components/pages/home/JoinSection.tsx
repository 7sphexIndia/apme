import Container from '../../common/Container'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'
import DarkIconTitle from '../../common/DarkIconTitle'
import greenTick from '../../../assets/img/green-tick.svg'
import whiteTick from '../../../assets/img/white-tick.svg'

const tiers = [
  {
    name: 'Physical Registration',
    type: 'Per Delegate',
    features: [
      'Paper Submission',
      '1-day conference pass',
      'All-Day virtual pass',
      'Coffee breaks & lunch',
      'Participation Certificate',
      'Physical Presentation Opportunity',
    ],
    cta: 'Register Now',
    note: 'Valid student ID required',
    highlighted: false,
  },
  {
    name: 'Digital Registration',
    type: 'Per Delegate',
    features: [
      'Paper Submission',
      'All-Day virtual pass',
      'Participation Certificate',
      'Digital Presentation Opportunity',
      'Cost-Effective Participation',
      'Live & Interactive Sessions',
    ],
    cta: 'Register Now',
    note: 'Recommended for all researchers',
    highlighted: true,
    badge: 'MOST POPULAR',
  },
  {
    name: 'Global Sponsor',
    type: 'Per Delegate',
    features: [
      'Global Brand Exposure',
      'Access to High-Value Audience',
      'Association with Quality Research',
      'Networking & Partnerships',
      'Brand Credibility & Trust',
      'Long-Term Visibility & ROI',
    ],
    cta: 'Contact Us',
    note: 'Includes sponsorship opportunities',
    highlighted: false,
  },
]

export function JoinSection() {
  return (
    <section className="py-[120px] bg-light-bg max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <div className="flex flex-col items-center text-center">
            <Reveal className="mb-6">
              <DarkIconTitle 
                iconSrc={`data:image/svg+xml;base64,${btoa('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%230F7B6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>')}`}
              >
                SECURE YOUR PLACE
              </DarkIconTitle>
            </Reveal>
            <Reveal className="mb-6">
              <h2 className="font-heading text-[40px] font-extrabold text-primary max-[767px]:text-[32px]">
                Join APME 2026 in <span className="text-secondary">Dubai</span>
              </h2>
            </Reveal>
            <Reveal className="mb-[60px] max-w-[600px]">
              <p className="text-lg text-body/70">
                2000+ researchers & innovators from 60+ nations. Dubai awaits.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-center gap-[30px] lg:grid-cols-3">
            {tiers.map((tier, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="h-full">
                <div 
                  className={`relative flex h-full flex-col rounded-[10px] p-[40px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                    ${tier.highlighted 
                      ? 'bg-secondary text-white lg:-mt-4 lg:mb-4 shadow-[0_20px_40px_rgba(15,123,108,0.15)]' 
                      : 'bg-white text-primary hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
                    }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-[8px] bg-white px-5 py-1.5 text-[11px] font-bold tracking-widest text-secondary shadow-md min-w-[140px] text-center">
                      {tier.badge}
                    </div>
                  )}

                  <div className="mb-8 border-b border-current/20 pb-8 text-left">
                    <span className={`text-[15px] font-medium opacity-80 italic`}>{tier.type}</span>
                    <h3 className="mt-2 text-[26px] font-extrabold leading-tight">
                      {tier.name}
                    </h3>
                  </div>

                  <ul className="mb-10 space-y-5 flex-grow text-left">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-4 text-[16px] leading-tight">
                        <img 
                          src={tier.highlighted ? whiteTick : greenTick} 
                          alt="check" 
                          className="mt-0.5 h-5 w-5 shrink-0" 
                        />
                        <span className="opacity-95">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col items-center">
                    <button className={`w-full rounded-full py-4 text-lg font-bold transition-all
                      ${tier.highlighted 
                        ? 'bg-white text-primary border border-transparent hover:bg-white/95' 
                        : 'border border-primary bg-primary/[0.02] text-primary hover:bg-primary/[0.05]'
                      }`}
                    >
                      {tier.cta}
                    </button>
                    <p className="mt-4 text-center text-[13px] opacity-70 italic font-medium">
                      {tier.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-semibold text-primary/40 text-center">
              <span>Participation modes:</span>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                <span>Physical Attendance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary/60" />
                <span>Virtual Access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary/40" />
                <span>Hybrid</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </Pad>
    </section>
  )
}
