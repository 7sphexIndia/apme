import Container from '../../common/Container'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'
import DarkIconTitle from '../../common/DarkIconTitle'


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
    <section className="py-[80px] bg-light-bg max-[991px]:py-[50px]">
      <Pad>
        <Container>
          <div className="flex flex-col items-center text-center">
            <Reveal className="mb-[30px]">

              <DarkIconTitle iconSrc="/img/profile.svg">SECURE YOUR PLACE</DarkIconTitle>

            </Reveal>
            <Reveal className="mb-10">
              <h2 className="font-heading text-[36px] leading-[46px] font-bold text-primary max-[767px]:text-[32px]">
                Join APME 2026 in <span className="text-secondary">Dubai</span>
              </h2>
            </Reveal>
            <Reveal className="mb-[60px] max-w-[600px]">
              <p className="text-[18px] text-body">
                2000+ researchers & innovators from 60+ nations. Dubai awaits.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-center gap-[30px] lg:grid-cols-3">
            {tiers.map((tier, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="h-full">
                <div 
                  className={`relative flex h-full flex-col rounded-[10px] p-[50px] transition-all duration-300
                    ${tier.highlighted 
                      ? 'bg-secondary text-white scale-[102%] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]' 
                      : 'bg-white text-primary hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
                    }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 rounded-b-[8px] bg-white px-5 py-1.5 text-[11px] font-bold tracking-widest text-secondary min-w-[140px] text-center">
                      {tier.badge}
                    </div>
                  )}

                  <div className="mb-[30px] border-b-[2px] border-stroke pb-8 text-left">
                    <span
                      className={`text-[14px] text-mini italic tracking-[-1%] ${tier.highlighted ? 'text-white' : ''}`}
                    >
                      {tier.type}
                    </span>
                    <h3 className={`mt-[14px] text-[22px] font-bold leading-tight ${tier.highlighted ? 'text-white' : ''}`}>
                      {tier.name}
                    </h3>
                  </div>

                  <ul className="mb-[30px] space-y-3 flex-grow text-left">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-[7px] text-[16px] leading-tight">
                        <img 
                          src={tier.highlighted ? '/img/white-tick.svg' : '/img/green-tick.svg'} 
                          alt="check" 
                          className="mt-0.5 h-[18px] w-[18px] shrink-0" 
                          loading="lazy"
                          decoding="async"
                        />
                        <span className={tier.highlighted ? 'text-white' : 'text-body'}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col items-center">
                    <button className={`w-full rounded-full py-[20px] max-h-[54px] flex items-center justify-center text-[16px] font-semibold transition-colors duration-300 ease-in-out
                      ${tier.highlighted 
                        ? 'bg-white text-primary border border-primary hover:bg-primary hover:text-white' 
                        : 'border border-primary bg-light-bg text-primary hover:bg-primary hover:text-white'
                      }`}
                    >
                      {tier.cta}
                    </button>
                    <p
                      className={`mt-4 text-center text-[14px] text-mini tracking-[-1%] italic ${tier.highlighted ? 'text-white' : ''}`}
                    >
                      {tier.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-[60px]">
            <div className="flex flex-wrap justify-center text-[16px] text-mini text-center">
              Participation modes:  <span className="text-body font-semibold"> &nbsp; ⋇ Physical Attendance &nbsp;  ⋇ Virtual Access &nbsp;  ⋇ Hybrid</span>
            </div>
          </Reveal>
        </Container>
      </Pad>
    </section>
  )
}
