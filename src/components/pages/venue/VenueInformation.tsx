import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'

export function VenueInformation() {
  return (
    <section className="bg-light-bg py-[80px] max-[991px]:py-[50px]">
      <Pad>
        <Container>
          {/* Header Section */}
          <div className="mb-[60px] flex flex-col items-center text-center max-[991px]:mb-[40px]">
            <Reveal className="mb-[30px]">
              <DarkIconTitle iconSrc="/img/conference_tag.svg">CONFERENCE VENUE</DarkIconTitle>
            </Reveal>
            <Reveal className="mb-[40px]">
              <h2 className="font-heading text-[36px] font-bold leading-tight text-primary max-[991px]:text-[36px]">
                Venue <span className="text-secondary">Information</span>
              </h2>
            </Reveal>
            <Reveal className="max-w-[760px]">
              <p className="text-[18px] text-body max-[991px]:text-[16px]">
                State-of-the-art facilities in the heart of Dubai's business district
              </p>
            </Reveal>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
            {/* Conference Center Card */}
            <Reveal>
              <div className="group relative overflow-hidden hover-card rounded-[10px] border border-stroke bg-white p-5 md:py-[40px] md:px-[30px] max-[991px]:p-[30px]">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-[80px] w-[80px] min-w-[80px] items-center justify-center rounded-[10px] bg-secondary/[0.05] text-secondary group-hover:bg-secondary group-hover:text-white">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 12.1882C7.5 11.6707 7.91906 11.2507 8.4375 11.2507H14.0625C14.5809 11.2507 15 11.6707 15 12.1882C15 12.7057 14.5809 13.1257 14.0625 13.1257H8.4375C7.91906 13.1257 7.5 12.7057 7.5 12.1882ZM14.0625 15.0007H8.4375C7.91906 15.0007 7.5 15.4207 7.5 15.9382C7.5 16.4557 7.91906 16.8757 8.4375 16.8757H14.0625C14.5809 16.8757 15 16.4557 15 15.9382C15 15.4207 14.5809 15.0007 14.0625 15.0007ZM14.0625 18.7507H8.4375C7.91906 18.7507 7.5 19.1707 7.5 19.6882C7.5 20.2057 7.91906 20.6257 8.4375 20.6257H14.0625C14.5809 20.6257 15 20.2057 15 19.6882C15 19.1707 14.5809 18.7507 14.0625 18.7507ZM14.0625 22.5007H8.4375C7.91906 22.5007 7.5 22.9207 7.5 23.4382C7.5 23.9557 7.91906 24.3757 8.4375 24.3757H14.0625C14.5809 24.3757 15 23.9557 15 23.4382C15 22.9207 14.5809 22.5007 14.0625 22.5007ZM28.125 27.1882C28.125 27.7057 27.7059 28.1257 27.1875 28.1257H2.8125C2.29406 28.1257 1.875 27.7057 1.875 27.1882C1.875 26.6707 2.29406 26.2507 2.8125 26.2507H3.75V9.01757C3.75 8.30226 4.1475 7.66007 4.78594 7.34039L16.0359 1.71539C16.6228 1.42289 17.3034 1.45289 17.8603 1.79695C18.4172 2.14101 18.7491 2.73726 18.7491 3.39257V10.3132H24.3741C25.4081 10.3132 26.2491 11.1541 26.2491 12.1882V26.2507H27.1866C27.705 26.2507 28.125 26.6707 28.125 27.1882ZM18.75 12.1882V26.2507H24.375V12.1882H18.75ZM5.625 26.2507H16.875V3.39257L5.625 9.01757V26.2507Z" fill="currentcolor" />
                      </svg>

                    </div>
                    <div>
                      <h3 className="text-[22px] font-bold text-primary mb-[10px]">Conference Center</h3>
                      <p className="text-[16px] font-semibold text-secondary">Dubai World Trade Centre</p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-5">
                    <li className="flex items-start gap-[10px]">
                      <div className="mt-1 text-secondary">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.99772 0C4.80256 0 2.20312 2.59944 2.20312 5.79456C2.20312 9.75981 7.38872 15.581 7.6095 15.8269C7.81687 16.0579 8.17894 16.0575 8.38594 15.8269C8.60672 15.581 13.7923 9.75981 13.7923 5.79456C13.7922 2.59944 11.1928 0 7.99772 0ZM7.99772 8.70997C6.39016 8.70997 5.08234 7.40212 5.08234 5.79456C5.08234 4.187 6.39019 2.87919 7.99772 2.87919C9.60525 2.87919 10.9131 4.18703 10.9131 5.79459C10.9131 7.40216 9.60525 8.70997 7.99772 8.70997Z" fill="#0F7B6C" />
                        </svg>

                      </div>
                      <p className="text-[16px] leading-relaxed text-body">
                        Sheikh Rashid Tower, Convention Gate, Dubai, UAE
                      </p>
                    </li>
                    <li className="flex items-start gap-[10px]">
                      <div className="mt-1 text-secondary">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 2C3.57841 2 0 5.578 0 10C0 14.4215 3.578 18 8 18C12.4216 18 16 14.422 16 10C16 5.57847 12.422 2 8 2ZM8 16.8837C4.20431 16.8837 1.11628 13.7957 1.11628 10C1.11628 6.20428 4.20431 3.11628 8 3.11628C11.7957 3.11628 14.8837 6.20428 14.8837 10C14.8837 13.7957 11.7957 16.8837 8 16.8837Z" fill="#0F7B6C" />
                          <path d="M7.99834 8.67188C7.52447 8.67188 7.1875 8.872 7.1875 9.16684V13.1789C7.1875 13.4317 7.52447 13.6843 7.99834 13.6843C8.45116 13.6843 8.81969 13.4317 8.81969 13.1789V9.16678C8.81969 8.87197 8.45116 8.67188 7.99834 8.67188Z" fill="#0F7B6C" />
                          <path d="M8.00019 6.19531C7.51578 6.19531 7.13672 6.54281 7.13672 6.94297C7.13672 7.34316 7.51581 7.70119 8.00019 7.70119C8.47406 7.70119 8.85319 7.34316 8.85319 6.94297C8.85319 6.54281 8.47403 6.19531 8.00019 6.19531Z" fill="#0F7B6C" />
                        </svg>

                      </div>
                      <p className="text-[16px] leading-relaxed text-body">
                        The region's premier events venue, hosting world-class international conferences since 1979
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Conference Dates Card */}
            <Reveal>
              <div className="group relative overflow-hidden hover-card rounded-[10px] border border-stroke bg-white p-5 md:py-[40px] md:px-[30px] max-[991px]:p-[30px]">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex items-center gap-6">
                    <div className="flex h-[80px] w-[80px] min-w-[80px] items-center justify-center rounded-[10px] bg-secondary/[0.05] text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2864_11492)">
                          <path d="M0.878978 24.664H5.2735V27.3007C5.2735 27.7861 5.66702 28.1796 6.1524 28.1796H29.1211C29.6065 28.1796 30 27.7861 30 27.3007V4.44921C30 3.96382 29.6065 3.57031 29.1211 3.57031H24.7266V2.6914C24.7266 2.20601 24.3331 1.8125 23.8477 1.8125C23.3623 1.8125 22.9688 2.20601 22.9688 2.6914V3.57031H18.5157V2.6914C18.5157 2.20601 18.1221 1.8125 17.6368 1.8125C17.1514 1.8125 16.7579 2.20601 16.7579 2.6914V3.57031H12.3633V2.6914C12.3633 2.20601 11.9698 1.8125 11.4844 1.8125C10.999 1.8125 10.6055 2.20601 10.6055 2.6914V3.57031H6.1524C5.66702 3.57031 5.2735 3.96382 5.2735 4.44921V9.72264C5.2735 16.2002 2.58142 21.1833 0.316303 23.1099C0.0320068 23.3468 -0.0734031 23.7364 0.0525146 24.0844C0.17855 24.4323 0.5089 24.664 0.878978 24.664ZM28.2422 26.4218H7.03131V24.664H23.8477C24.0533 24.664 24.2524 24.5919 24.4104 24.4603C25.4669 23.5803 27.1035 21.4851 28.2422 18.8016V26.4218ZM7.03131 5.32812H10.6055V6.20702C10.6055 6.69241 10.999 7.08593 11.4844 7.08593C11.9698 7.08593 12.3633 6.69241 12.3633 6.20702V5.32812H16.7579V6.20702C16.7579 6.69241 17.1514 7.08593 17.6368 7.08593C18.1221 7.08593 18.5157 6.69241 18.5157 6.20702V5.32812H22.9688V6.20702C22.9688 6.69241 23.3623 7.08593 23.8477 7.08593C24.3331 7.08593 24.7266 6.69241 24.7266 6.20702V5.32812H28.2422V8.84374H7.03131V5.32812ZM7.01625 10.601H28.2266C28.0286 16.1764 25.8887 20.5632 23.503 22.9062H2.87813C5.58123 19.462 6.87123 14.9774 7.01625 10.601Z" fill="currentColor" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2864_11492">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                    </div>
                    <div>
                      <h3 className="text-[22px] font-bold text-primary mb-[10px]">Conference Dates</h3>
                      <p className="text-[16px] font-semibold text-secondary">November 15-17, 2026</p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-5">
                    <li className="flex items-start gap-[10px]">
                      <div className="mt-1 text-secondary">
                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.8491 12.4119L8.61828 10.7388V7.33062C8.61828 6.98794 8.34128 6.71094 7.99859 6.71094C7.65591 6.71094 7.37891 6.98794 7.37891 7.33062V11.0487C7.37891 11.2439 7.47062 11.4279 7.62678 11.5444L10.1055 13.4035C10.217 13.4871 10.3472 13.5274 10.4767 13.5274C10.6657 13.5274 10.8516 13.4425 10.973 13.2789C11.1788 13.0056 11.123 12.6171 10.8491 12.4119Z" fill="#0F7B6C" />
                          <path d="M8 3C3.58853 3 0 6.58853 0 11C0 15.4115 3.58853 19 8 19C12.4115 19 16 15.4115 16 11C16 6.58853 12.4115 3 8 3ZM8 17.7607C4.27266 17.7607 1.23934 14.7273 1.23934 11C1.23934 7.27266 4.27266 4.23934 8 4.23934C11.728 4.23934 14.7607 7.27266 14.7607 11C14.7607 14.7273 11.7273 17.7607 8 17.7607Z" fill="#0F7B6C" />
                        </svg>


                      </div>
                      <p className="text-[16px] leading-relaxed text-body">
                        Three full days of keynotes, paper presentations, workshops, and networking sessions
                      </p>
                    </li>
                    <li className="flex items-start gap-[10px]">
                      <div className="mt-1 text-secondary">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_2864_11509)">
                            <mask id="mask0_2864_11509" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                              <path d="M0 0H16V16H0V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_2864_11509)">
                              <path fillRule="evenodd" clipRule="evenodd" d="M7.5 3.33594V1.33594H8.5V3.33594H7.5ZM3.97978 4.68949L2.64645 3.35616L3.35355 2.64905L4.68689 3.98238L3.97978 4.68949ZM13.3535 3.35616L12.0202 4.68949L11.3131 3.98238L12.6465 2.64905L13.3535 3.35616ZM4.69439 7.51574C4.7951 7.50707 4.89703 7.5026 5 7.5026C5.39169 7.5026 5.76904 7.56714 6.12154 7.68627C6.57925 7.16554 7.251 6.83594 8 6.83594C9.02833 6.83594 9.91107 7.45647 10.2951 8.34354C10.6207 8.2306 10.9701 8.16927 11.3333 8.16927C11.3774 8.16927 11.4213 8.1702 11.4649 8.17194C11.2235 6.4745 9.7642 5.16927 8 5.16927C6.47143 5.16927 5.17105 6.14956 4.69439 7.51574ZM12.4913 8.38767C12.346 6.03358 10.3907 4.16927 8 4.16927C5.81148 4.16927 3.98868 5.7311 3.5838 7.80094C2.35633 8.34474 1.5 9.57367 1.5 11.0026C1.5 12.9356 3.067 14.5026 5 14.5026H11.3333C13.0823 14.5026 14.5 13.0849 14.5 11.3359C14.5 9.99574 13.6675 8.85 12.4913 8.38767ZM8 7.83594C7.45833 7.83594 6.9832 8.12274 6.71887 8.55514L6.48363 8.94007L6.07661 8.74554C5.75117 8.58994 5.38649 8.5026 5 8.5026C3.61929 8.5026 2.5 9.62187 2.5 11.0026C2.5 12.3833 3.61929 13.5026 5 13.5026H11.3333C12.5299 13.5026 13.5 12.5325 13.5 11.3359C13.5 10.1393 12.5299 9.16927 11.3333 9.16927C10.9305 9.16927 10.5547 9.27874 10.2325 9.46927L9.593 9.8474L9.48353 9.11247C9.376 8.3902 8.75227 7.83594 8 7.83594Z" fill="currentColor" />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_2864_11509">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-[16px] leading-relaxed text-body">
                        Perfect November weather: 18–28°C with minimal rainfall
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Pad>
    </section>
  )
}
