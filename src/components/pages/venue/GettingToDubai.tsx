import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'

export function GettingToDubai() {
  return (
    <section className="bg-white py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[0.5fr_1fr]">
            {/* Left Column: Heading */}
            <div className="flex flex-col items-start lg:pt-10">
              <Reveal className="mb-[30px]">
                <DarkIconTitle iconSrc="/img/travel_tag.svg">TRAVEL INFORMATION</DarkIconTitle>

              </Reveal>
              <Reveal>
                <h2 className="font-heading text-[36px] font-bold leading-tight text-primary max-[991px]:text-[36px]">
                  Getting to <span className="text-secondary">Dubai</span>
                </h2>
              </Reveal>
            </div>

            {/* Right Column: Card */}
            <Reveal>
              <div className="relative overflow-hidden rounded-[10px] border border-stroke bg-white p-5 md:py-[40px] md:px-[30px] shadow-sm max-[991px]:p-[30px]">
                <div className="flex flex-col gap-[30px]">
                  {/* Card Header */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-[80px] w-[80px] min-w-[80px] items-center justify-center rounded-[10px] bg-secondary/[0.05] text-secondary">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2864_11600)">
                          <path d="M0.878978 24.664H5.2735V27.3007C5.2735 27.7861 5.66702 28.1796 6.1524 28.1796H29.1211C29.6065 28.1796 30 27.7861 30 27.3007V4.44921C30 3.96382 29.6065 3.57031 29.1211 3.57031H24.7266V2.6914C24.7266 2.20601 24.3331 1.8125 23.8477 1.8125C23.3623 1.8125 22.9688 2.20601 22.9688 2.6914V3.57031H18.5157V2.6914C18.5157 2.20601 18.1221 1.8125 17.6368 1.8125C17.1514 1.8125 16.7579 2.20601 16.7579 2.6914V3.57031H12.3633V2.6914C12.3633 2.20601 11.9698 1.8125 11.4844 1.8125C10.999 1.8125 10.6055 2.20601 10.6055 2.6914V3.57031H6.1524C5.66702 3.57031 5.2735 3.96382 5.2735 4.44921V9.72264C5.2735 16.2002 2.58142 21.1833 0.316303 23.1099C0.0320068 23.3468 -0.0734031 23.7364 0.0525146 24.0844C0.17855 24.4323 0.5089 24.664 0.878978 24.664ZM28.2422 26.4218H7.03131V24.664H23.8477C24.0533 24.664 24.2524 24.5919 24.4104 24.4603C25.4669 23.5803 27.1035 21.4851 28.2422 18.8016V26.4218ZM7.03131 5.32812H10.6055V6.20702C10.6055 6.69241 10.999 7.08593 11.4844 7.08593C11.9698 7.08593 12.3633 6.69241 12.3633 6.20702V5.32812H16.7579V6.20702C16.7579 6.69241 17.1514 7.08593 17.6368 7.08593C18.1221 7.08593 18.5157 6.69241 18.5157 6.20702V5.32812H22.9688V6.20702C22.9688 6.69241 23.3623 7.08593 23.8477 7.08593C24.3331 7.08593 24.7266 6.69241 24.7266 6.20702V5.32812H28.2422V8.84374H7.03131V5.32812ZM7.01625 10.601H28.2266C28.0286 16.1764 25.8887 20.5632 23.503 22.9062H2.87813C5.58123 19.462 6.87123 14.9774 7.01625 10.601Z" fill="currentColor" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2864_11600">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                    </div>
                    <div>
                      <h3 className="text-[22px] font-bold text-primary mb-[10px]">Visa Requirements</h3>
                      <p className="text-[16px] font-semibold text-secondary">Easy Entry for Most Nationalities</p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <p className="text-[16px] leading-relaxed text-body">
                    Citizens of 70+ countries receive visa-free entry or visa-on-arrival. Others can easily apply for an e-visa online. We provide conference invitation letters to support your visa application.
                  </p>

                  <ul className="flex flex-col gap-[10px]">
                    {[
                      'Tourist visas valid for 30–90 days',
                      'Processing typically takes 3–5 business days',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="h-[6px] w-[6px] rounded-full bg-body" />
                        <span className="text-[16px] text-body">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link */}
                  <div>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-3 text-[18px] font-bold text-secondary transition-all hover:gap-5"
                    >
                      Request Invitation Letter
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Bottom Accent Bar */}
                <div className="absolute bottom-0 left-0 h-[6px] w-full bg-orange" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Pad>
    </section>
  )
}
