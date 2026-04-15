import Container from '../../common/Container'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'
import DarkIconTitle from '../../common/DarkIconTitle'


const onsiteSchedule = [
  {
    time: '09:00 AM',
    duration: '60 min',
    title: 'Registration & Welcome Coffee',
    location: 'Conference Hall Lobby',
  },
  {
    time: '10:00 AM',
    duration: '90 min',
    title: 'Opening Ceremony & Keynote',
    location: 'Main Auditorium',
  },
  {
    time: '11:30 AM',
    duration: '30 min',
    title: 'Coffee Break & Networking',
    location: 'Exhibition Area',
  },
  {
    time: '12:00 PM',
    duration: '120 min',
    title: 'Parallel Technical Sessions',
    location: 'Multiple Rooms (6 Tracks)',
  },
  {
    time: '02:00 PM',
    duration: '60 min',
    title: 'Lunch & Poster Session',
    location: 'Banquet Hall',
  },
  {
    time: '03:00 PM',
    duration: '120 min',
    title: 'Parallel Technical Sessions',
    location: 'Multiple Rooms (6 Tracks)',
  },
]

const digitalSchedule = [
  {
    time: '09:30 AM – 11:30 AM',
    duration: '120 min',
    title: 'Parallel Technical Sessions',
    location: 'Virtual Rooms (Multiple Tracks)',
  },
  {
    time: '11:30 AM – 12:00 PM',
    duration: '30 min',
    title: 'Break',
    location: 'Break',
  },
  {
    time: '12:00 PM – 02:00 PM',
    duration: '120 min',
    title: 'Parallel Technical Sessions',
    location: 'Virtual Rooms (Multiple Tracks)',
  },
  {
    time: '02:00 PM – 02:30 PM',
    duration: '30 min',
    title: 'Break',
    location: 'Break',
  },
]

export function SampleSchedule() {
  return (
    <section className="bg-light-bg py-[80px] max-[991px]:py-[50px]">
      <Pad>
        <Container>
          <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[0.7fr_1fr]">
            {/* Left Column: Heading and Sidebar Card */}
            <div className="flex flex-col items-start lg:sticky lg:top-[120px] lg:self-start">
              <Reveal className="mb-[30px]">
                <DarkIconTitle iconSrc="/img/schedule.svg">SCHEDULE IN DEVELOPMENT</DarkIconTitle>
              </Reveal>
              <Reveal className="mb-[44px]">
                <h2 className="font-heading text-[36px] leading-[46px] font-bold text-primary max-[991px]:text-[32px]">
                  Sample Daily <span className="text-secondary">Schedule</span>
                </h2>
              </Reveal>
              <Reveal className="mb-10">
                <p className="text-[18px] text-body max-[991px]:text-[16px]">
                  Here's a glimpse of what a typical conference day might look like.
                </p>
              </Reveal>

              <Reveal className="w-full">
                <div className="hover-card group flex flex-col items-start rounded-[10px] border border-stroke bg-white p-[30px] max-[991px]:p-6">
                  <div className="mb-[30px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-boxIcon text-secondary">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2864_10897)">
                    <path d="M15 0C6.70951 0 0 6.70875 0 15C0 23.2904 6.70875 30 15 30C23.2905 30 30 23.2913 30 15C30 6.70963 23.2913 0 15 0ZM15 27.907C7.88309 27.907 2.09303 22.117 2.09303 15C2.09303 7.88303 7.88309 2.09303 15 2.09303C22.1169 2.09303 27.907 7.88303 27.907 15C27.907 22.117 22.1169 27.907 15 27.907Z" fill="#0F7B6C"/>
                    <path d="M15.0008 12.5C14.1123 12.5 13.4805 12.8752 13.4805 13.4281V20.9507C13.4805 21.4246 14.1123 21.8984 15.0008 21.8984C15.8498 21.8984 16.5408 21.4246 16.5408 20.9507V13.4279C16.5408 12.8752 15.8498 12.5 15.0008 12.5Z" fill="#0F7B6C"/>
                    <path d="M15.0018 7.86719C14.0936 7.86719 13.3828 8.51875 13.3828 9.26904C13.3828 10.0194 14.0936 10.6907 15.0018 10.6907C15.8903 10.6907 16.6012 10.0194 16.6012 9.26904C16.6012 8.51875 15.8903 7.86719 15.0018 7.86719Z" fill="#0F7B6C"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2864_10897">
                    <rect width="30" height="30" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </div>
                  <h4 className="mb-5 text-[18px] font-bold text-primary">Tentative Schedule</h4>
                  <p className="text-[16px] text-body">
                    The final agenda will be updated in collaboration with the scheduling platform (Sched) approximately 10-20 days before the conference dates.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Timeline Content */}
            <div className="relative">
              {/* On-site Section */}
              <div className="relative mb-[60px]">
                {/* Vertical Dashed Line (Desktop only) - centered behind date boxes */}
                <div className="h-[100%] absolute left-0 top-0 lg:left-[90px] lg:top-6 lg:bottom-6 lg:block">
                  <div className="h-[100%] lg:h-[85%] w-px border-l-2 border-dashed border-secondary"></div>
                </div>

                <div className="flex flex-col gap-6 pl-[30px] lg:pl-0">
                  {onsiteSchedule.map((item, idx) => (
                    <Reveal
                      key={idx}
                      className="group relative flex flex-col items-start gap-4 lg:flex-row lg:items-start lg:gap-[60px]"
                    >
                      {/* Time Box Column */}
                      <div className="relative z-10 flex lg:w-[189px] lg:justify-center">
                        <div className="relative min-w-[189px] rounded-[10px] bg-white px-5 py-4 text-center text-[18px] font-bold text-primary border border-stroke transition-[border-color] duration-300 ease-out group-hover:border-secondary">
                          {item.time}
                          <span
                            aria-hidden="true"
                            className="absolute left-[-30px] top-1/2 z-[-1] h-0 w-[60px] -translate-y-1/2 border-t-2 border-dashed border-secondary lg:left-full lg:z-auto lg:block"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute left-[-30px] top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary lg:left-[calc(100%+60px)] lg:block"
                          />
                        </div>
                      </div>

                      {/* Detail Card Column */}
                      <div className="w-full lg:flex-1">
                        <div className="rounded-[12px] bg-white py-[24px] px-[30px] border border-stroke transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-secondary hover:shadow-md max-[991px]:p-5">
                          <div className="text-[14px] italic text-mini">{item.duration}</div>
                          <h4 className="mt-[20px] text-[18px] font-bold leading-[23px] text-primary">
                            {item.title}
                          </h4>
                          <div className="mt-[12px] text-[16px] leading-[23px] text-body">
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* divider */}
              <div className="border-t border-secondary my-[60px]"></div>

              {/* Digital Section Header */}
              <Reveal className="mb-[60px] flex items-center gap-4">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                <span className="text-[18px] font-bold text-primary">Digital Conference Schedule</span>
              </Reveal>

              {/* Digital Section Timeline */}
              <div className="relative">
                {/* Vertical Dashed Line (Desktop only) - centered behind date boxes */}
                <div className="h-[100%] absolute left-0 top-0 lg:left-[90px] lg:top-6 lg:bottom-6 lg:block">
                  <div className="h-[100%] lg:h-[85%] w-px border-l-2 border-dashed border-secondary"></div>
                </div>

                <div className="flex flex-col gap-6 pl-[30px] lg:pl-0">
                  {digitalSchedule.map((item, idx) => (
                    <Reveal
                      key={idx}
                      className="group relative flex flex-col items-start gap-4 lg:flex-row lg:items-start lg:gap-[60px]"
                    >
                      {/* Time Box Column */}
                      <div className="relative z-10 flex lg:w-[189px] lg:justify-center">
                        <div className="relative min-w-[189px] rounded-[10px] bg-white px-4 py-4 text-center text-[18px] font-semibold text-primary border border-stroke transition-[border-color] duration-300 ease-out group-hover:border-secondary leading-tight">
                          {item.time.split(' – ').map((t, i) => (
                            <div key={i}>
                              {i === 0 ? `${t} –` : t}
                            </div>
                          ))}
                          <span
                            aria-hidden="true"
                            className="absolute left-[-30px] top-1/2 z-[-1] h-0 w-[60px] -translate-y-1/2 border-t-2 border-dashed border-secondary lg:left-full lg:z-auto lg:block"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute left-[-30px] top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary lg:left-[calc(100%+60px)] lg:block"
                          />
                        </div>
                      </div>

                      {/* Detail Card Column */}
                      <div className="w-full lg:flex-1">
                        <div className="rounded-[12px] bg-white py-[24px] px-[30px] border border-stroke transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-secondary hover:shadow-md max-[991px]:p-5">
                          <div className="text-[14px] italic text-mini">({item.duration})</div>
                          <h4 className="mt-[20px] text-[18px] font-bold leading-[23px] text-primary">
                            {item.title}
                          </h4>
                          <div className="mt-[12px] text-[16px] leading-[23px] text-body">
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Pad>
    </section>
  )
}
