import { useState } from 'react'
import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import advisoryTag from '../../../assets/img/advisory-tag.svg'

export type CommitteePanel = {
  /** Short label for vertical tab */
  tabLabel: string
  /** Small badge above title (e.g. ADVISORY COMMITTEE) */
  kicker: string
  /** Plain title line before the highlighted span */
  titleBefore: string
  /** Highlighted part of title (secondary color) */
  titleHighlight: string
  subtitle: string
  /** Each string is one member block (name + affiliation) */
  members: string[]
}

export const COMMITTEE_PANELS: CommitteePanel[] = [
  {
    tabLabel: 'Conference Advisory Committee Chairs',
    kicker: 'ADVISORY COMMITTEE',
    titleBefore: 'Conference Advisory ',
    titleHighlight: 'Committee Chairs',
    subtitle: 'Distinguished experts providing strategic guidance',
    members: [
      'Dr. CAROL LYNN R. MACAGBA, MD, ABIHM — President and Chairman of the Board, Lorma Colleges Inc., La Union, Philippines',
      'Dr. Marilyn D. Cardoso — Senior Vice President for Programs Development and QA, Samar College Catbalogan City & President Emeritus, Samar State University, Catbalogan City, Philippines',
      "Mr. Marco Alfredo M. Benitez - President, Philippine Women's University, Philippines",
      "Dr. Dharm Singh Jat, UNESCO Chairholder on Secure High-performance Computing for Higher Education and Research, Namibia's University of Science and Technology, Windhoek, Namibia",
      'Dr. Eva Tuba, Assistant Professor, Trinity University - San Antonio, Texas, United States',
      'Dr. Sheng-Lung Peng, Taipei National University of Business, Taiwan',
      'Dr. Meelis Kitsing, PhD, Professor, Estonian Business School, Estonia',
      'Dr. Pancham Shukla, PhD, Associate Professor, Imperial College, United Kingdom',
      'Dr. Tomonobu Senjyu, PhD, Editorial Advisory Board, Renewable Energy Focus, University of the Ryukyus, Okinawa, Japan'
    ],
  },
  {
    tabLabel: 'Conference Chairs & Secretary',
    kicker: 'LEADERSHIP',
    titleBefore: 'Conference ',
    titleHighlight: 'Chairs & Secretary',
    subtitle: 'Overall conference leadership and coordination',
    members: [
      'Conference Chair — To be announced',
      'Conference Co-Chair — To be announced',
      'Secretary — To be announced',
    ],
  },
  {
    tabLabel: 'Technical Program Chairs & Committee',
    kicker: 'TECHNICAL PROGRAM',
    titleBefore: 'Technical Program ',
    titleHighlight: 'Chairs & Committee',
    subtitle: 'Peer review, sessions, and scientific program',
    members: [
      'Technical Program Chair — To be announced',
      'Technical Program Co-Chairs — To be announced',
      'Track Chairs — To be announced',
    ],
  },
  {
    tabLabel: 'Publicity Chairs',
    kicker: 'PUBLICITY',
    titleBefore: 'Publicity ',
    titleHighlight: 'Chairs',
    subtitle: 'Outreach, media, and community engagement',
    members: [
      'Publicity Chair — To be announced',
      'Publicity Co-Chair — To be announced',
    ],
  },
]

function MemberList({ members }: { members: string[] }) {
  return (
    <ul className="divide-y divide-stroke">
      {members.map((text, i) => (
        <li key={i} className="py-[14px] text-left text-[16px] text-body first:pt-0 last:pb-0">
          {text}
        </li>
      ))}
    </ul>
  )
}

function CommitteeHeadingBlock({
  panel,
  titleClassName,
}: {
  panel: CommitteePanel
  titleClassName: string
}) {
  return (
    <>
      <div className="mb-[30px] flex justify-center">
        <DarkIconTitle iconSrc={advisoryTag}>
          {panel.kicker}
        </DarkIconTitle>
      </div>
      <h2 className={titleClassName}>
        {panel.titleBefore}
        <span className="text-secondary">{panel.titleHighlight}</span>
      </h2>
      <p className="mx-auto mt-10 max-w-[720px] text-[16px] text-body/70 max-[991px]:text-[15px]">
        {panel.subtitle}
      </p>
    </>
  )
}

export function CommitteesTabsSection() {
  const [active, setActive] = useState(0)
  /** -1 = all panels collapsed on small screens */
  const [openMobile, setOpenMobile] = useState(0)

  const panel = COMMITTEE_PANELS[active]!
  const mobileHeaderIdx = openMobile >= 0 ? openMobile : 0
  const mobilePanel = COMMITTEE_PANELS[mobileHeaderIdx]!

  return (
    <section className="bg-white pt-[100px] max-[991px]:pt-[60px]">
      <Pad>
        <Container>
          {/* Desktop: full-width heading above tabs + list */}
          <div className="hidden text-center lg:mb-[60px] lg:block">
            <CommitteeHeadingBlock
              panel={panel}
              titleClassName="font-heading text-[36px] leading-[46px] font-bold text-primary"
            />
          </div>

          <div className="my-[0px] border-stroke lg:border-t lg:my-[60px]" />

          <div className="hidden gap-[16px] lg:grid lg:grid-cols-[0.5fr_1fr] lg:gap-[30px]">
            <nav className="flex flex-col lg:sticky lg:top-[120px] lg:self-start rounded-[5px] overflow-hidden border border-stroke" aria-label="Committee categories">
              {COMMITTEE_PANELS.map((c, idx) => {
                const isActive = idx === active
                return (
                  <button
                    key={c.tabLabel}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={[
                      'flex w-full items-start gap-3 border-b border-stroke  px-5 py-[23px] text-left text-[16px] font-semibold leading-snug transition-colors duration-200',
                      isActive
                        ? 'border-stroke bg-primary text-white'
                        : 'border-stroke bg-white text-primary hover:border-secondary/40',
                    ].join(' ')}
                  >
                    {isActive ? (
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                        aria-hidden
                      />
                    ) : null}
                    <span>{c.tabLabel}</span>
                  </button>
                )
              })}
            </nav>

            <div className="min-w-0">
              <div className="rounded-[5px] border border-secondary p-[20px] md:p-[30px]">
                <MemberList members={panel.members} />
              </div>
            </div>
          </div>

          {/* Mobile: heading above accordion; updates with opened row */}
          <div className="mb-8 text-center lg:hidden">
            <CommitteeHeadingBlock
              panel={mobilePanel}
              titleClassName="font-heading text-[28px] font-bold leading-tight text-primary max-[400px]:text-[24px]"
            />
          </div>

          {/* Mobile: FAQ-style accordion */}
          <div className="flex flex-col gap-4 lg:hidden">
            {COMMITTEE_PANELS.map((c, idx) => {
              const expanded = openMobile === idx
              return (
                <div
                  key={c.tabLabel}
                  className="overflow-hidden rounded-[10px] border border-stroke bg-white"
                >
                  <button
                    type="button"
                    id={`committee-acc-${idx}`}
                    aria-expanded={expanded}
                    aria-controls={`committee-panel-${idx}`}
                    onClick={() => setOpenMobile(expanded ? -1 : idx)}
                    className={[
                      'flex w-full items-center justify-between gap-3 px-4 py-4 text-left',
                      expanded ? 'bg-primary text-white' : 'bg-white text-primary',
                    ].join(' ')}
                  >
                    <span className="flex items-start gap-3 text-[15px] font-semibold leading-snug">
                      {expanded ? (
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                          aria-hidden
                        />
                      ) : null}
                      {c.tabLabel}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={['shrink-0 transition-transform duration-200', expanded ? 'rotate-180' : ''].join(
                        ' ',
                      )}
                      aria-hidden
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {expanded ? (
                    <div
                      id={`committee-panel-${idx}`}
                      role="region"
                      aria-labelledby={`committee-acc-${idx}`}
                      className="border-t border-stroke bg-light-bg/30 px-4 py-[14px]"
                    >
                      <div className="rounded-[10px] border border-secondary/20 bg-white px-4 py-[14px]">
                        <MemberList members={c.members} />
                      </div>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </Container>
      </Pad>
    </section>
  )
}
