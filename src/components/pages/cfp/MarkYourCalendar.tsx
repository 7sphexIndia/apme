import Container from '../../common/Container'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'
import DarkIconTitle from '../../common/DarkIconTitle'
import calenderIcon from '../../../assets/img/calender-icon.svg'
 
const milestones = [
  {
    step: 'Step 01',
    date: 'May 1, 2026',
    title: 'Paper Submission Opens',
    description: 'Begin submitting your original research papers and contributions through the EasyChair portal.',
    highlight: true,
  },
  {
    step: 'Step 02',
    date: 'July 31, 2026',
    title: 'Paper Due',
    description: 'Final deadline for submitting completed manuscripts for peer review. No extensions will be granted.',
  },
  {
    step: 'Step 03',
    date: 'Sep 10, 2026',
    title: 'Acceptance Notification',
    description: 'Authors will be notified of review outcomes via email with detailed feedback from the program committee.',
  },
  {
    step: 'Step 04',
    date: 'Sep 25, 2026',
    title: 'Registration Due',
    description: 'Complete your conference registration to secure your presentation slot.',
  },
  {
    step: 'Step 05',
    date: 'Sep 25, 2026',
    title: 'Camera Ready Submission',
    description: 'Upload the final version of accepted papers with all revisions incorporated.',
  },
  {
    step: 'Step 06',
    date: 'Nov 15-17, 2026',
    title: 'Conference Dates',
    description: 'Join us for the conference where accepted papers will be presented and discussed.',
  },
]
 
export function MarkYourCalendar() {
  return (
    <section className="bg-[#F8FAFB] py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <div className="grid grid-cols-1 gap-[100px] lg:grid-cols-[0.65fr_1fr]">
            {/* Left Column: Heading and Tag */}
            <div className="flex flex-col items-start lg:sticky lg:top-[120px] lg:self-start">
              <Reveal className="mb-6">
                <DarkIconTitle iconSrc={calenderIcon}>Mark Your Calendar</DarkIconTitle>
              </Reveal>
              <Reveal className="mb-6">
                <h2 className="font-heading text-[40px] font-bold leading-tight text-primary max-[991px]:text-[32px]">
                  Important <span className="text-secondary">Dates</span>
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-[18px] leading-relaxed text-body/80 max-[991px]:text-[16px]">
                  Critical submission deadlines and milestones for APME 2026.
                </p>
              </Reveal>
            </div>
 
            {/* Vertical Timeline Wrapper */}
            <div className="relative">
              {/* Vertical Dashed Line (Desktop only) - centered behind date boxes */}
              <div className="h-[100%] absolute left-0 top-0 lg:left-[90px] lg:top-6 lg:bottom-6 lg:block">
                <div className="h-[100%] lg:h-[85%] w-px border-l-2 border-dashed border-secondary"></div>
              </div>
 
              <div className="flex flex-col gap-6 pl-[30px] lg:pl-0">
                {milestones.map((m, idx) => (
                  <Reveal
                    key={idx}
                    className="group relative flex flex-col items-start gap-4 lg:flex-row lg:items-start lg:gap-[60px]"
                  >
                    {/* Date Box Column */}
                    <div className="relative z-10 flex lg:w-[189px] lg:justify-center">
                      <div className={[
                        'relative rounded-[10px] bg-white px-5 py-4 text-[18px] font-bold text-primary text-center min-w-[189px]',
                        'border border-stroke transition-[border-color] duration-300 ease-out group-hover:border-secondary'
                      ].join(' ')}>
                        {m.date}
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
                      <div className="rounded-[12px] bg-white p-7 border border-stroke transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-secondary hover:shadow-md">
                        <div className="text-[14px] italic text-mini">{m.step}</div>
                        <h4 className="mt-[20px] text-[18px] font-bold leading-[23px] text-primary">
                          {m.title}
                        </h4>
                        <p className="mt-[12px] text-[16px] leading-[23px] text-body">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Pad>
    </section>
  )
}
 