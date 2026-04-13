import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import type { ReactNode } from 'react'

type ResourceCard = {
  title: string
  subtitle: string
  /** Change the import at the top and point here when a row needs its own file */
  pdfUrl: string
}

const TEMP_PDF_URL =
  'https://drive.google.com/file/d/1j5-NRWOcDA-2prvREydsGqaAC_3bk76n/view?usp=sharing'

const guidelineCards: ResourceCard[] = [
  {
    title: 'Proceedings Guidelines for Authors',
    subtitle: 'Manuscript preparation standards',
    pdfUrl: TEMP_PDF_URL,
  },
  {
    title: 'Author Guideline for Paper Submission',
    subtitle: 'Step-by-step submission walkthrough',
    pdfUrl: TEMP_PDF_URL,
  },
  {
    title: 'Paper Submission Guidelines',
    subtitle: 'Paper Submission Guidelines',
    pdfUrl: TEMP_PDF_URL,
  },
]

const templateCards: ResourceCard[] = [
  {
    title: 'Sample LaTeX Paper',
    subtitle: 'Reference template to build upon',
    pdfUrl: TEMP_PDF_URL,
  },
  {
    title: 'LaTeX Instructions for Authors',
    subtitle: 'Compilation & macro guide',
    pdfUrl: TEMP_PDF_URL,
  },
  {
    title: 'LaTeX Package',
    subtitle: 'Full style files & class packages',
    pdfUrl: TEMP_PDF_URL,
  },
  {
    title: 'Word Templates',
    subtitle: 'Microsoft Word manuscript template',
    pdfUrl: TEMP_PDF_URL,
  },
]

export function Resources() {
  return (
    <section className="bg-light-bg py-[80px] max-[991px]:py-[50px]">
      <Pad>
        <Container>
          <div>
            <div className="flex flex-col gap-[30px] lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[680px]">
                <DarkIconTitle iconSrc="/img/folder-icon.svg">Resources</DarkIconTitle>

                <h2 className="mt-[30px] font-heading text-[36px] font-bold leading-[115%] text-primary max-[991px]:text-[28px]">
                  Guidelines, <span className="text-secondary">Templates</span> &amp; Policies
                </h2>

                <p className="mt-[44px] text-[18px] leading-[23px] text-body max-[991px]:text-[16px]">
                  Download all the files you need to format and submit a high-quality manuscript.
                </p>
              </div>

              <div className="flex gap-[16px]">
                <CountBox number="7" label="Files" />
                <CountBox number="3" label="Formats" />
              </div>
            </div>

            <Divider className="mt-[60px] mb-[60px]" />

            <SectionBlock title="Guidelines">
              <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
                {guidelineCards.map((c) => (
                  <FileCard key={c.title} {...c} />
                ))}
              </div>
            </SectionBlock>

            <Divider className="mt-[40px] mb-[40px]" />

            <SectionBlock title="Manuscript Templates">
              <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-4">
                {templateCards.map((c) => (
                  <FileCard key={c.title} {...c} />
                ))}
              </div>
            </SectionBlock>

            <Divider className="mt-[40px] mb-[40px]" />

            <SectionBlock title="Policies">
              <div className="group hover-card red-hover-card flex flex-row items-start sm:items-center justify-between gap-[20px] rounded-[10px] border border-stroke bg-white px-[20px] py-[20px] md:px-[30px] md:py-[30px]">
                <div className="flex flex-row items-center gap-[16px] flex-col items-baseline md:flex-row md:items-center">
                  <div className="grid h-[55px] min-w-[55px] w-[55px] place-items-center rounded-[100px] bg-[#FFE0E0] md:h-[70px] md:min-w-[70px] md:w-[70px]">
                    <img
                      src="/img/policy-icon.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[28px] w-[28px] object-contain md:h-[36px] md:w-[36px]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold leading-[21px] text-primary md:text-[18px] md:leading-[23px]">
                      Plagiarism Policy
                    </h3>
                    <p className="mt-[7px] text-[14px] leading-[20px] text-body md:text-[16px] md:leading-[23px]">
                      Authors must adhere to the Springer Policy and Procedures on Plagiarism before
                      submitting
                    </p>
                  </div>
                </div>

                <DownloadBox
                  variant="danger"
                  href={TEMP_PDF_URL}
                  label="Download Plagiarism Policy"
                />
              </div>
            </SectionBlock>
          </div>
        </Container>
      </Pad>
    </section>
  )
}

function CountBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="grid h-[90px] w-[90px] place-items-center rounded-[10px] border border-stroke bg-white text-center">
      <div>
        <div className="text-[22px] font-bold leading-[23px] text-primary">{number}</div>
        <div className="mt-[6px] text-[16px] font-normal leading-[23px] text-primary">{label}</div>
      </div>
    </div>
  )
}

function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={['h-px w-full bg-stroke', className].filter(Boolean).join(' ')} />
  )
}

function SectionBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <div className="text-center">
        <div className="text-[18px] font-medium leading-[23px] text-primary underline underline-offset-4">
          {title}
        </div>
      </div>
      <div className="mt-[30px]">{children}</div>
    </div>
  )
}

function FileCard({ title, subtitle, pdfUrl }: ResourceCard) {
  return (
    <article className="group hover-card flex flex-row items-center justify-between gap-[20px] rounded-[10px] border border-stroke bg-white px-[20px] py-[20px] md:px-[30px] md:py-[30px]">
      <div>
        <h3 className="text-[16px] font-bold leading-[21px] text-primary md:text-[18px] md:leading-[23px]">
          {title}
        </h3>
        <p className="mt-[7px] text-[14px] leading-[20px] text-body md:text-[16px] md:leading-[23px]">
          {subtitle}
        </p>
      </div>
      <DownloadBox
        href={pdfUrl}
        label={`Download ${title}`}
      />
    </article>
  )
}

function DownloadBox({
  variant = 'default',
  href,
  label,
}: {
  variant?: 'default' | 'danger'
  href: string
  label: string
}) {
  const boxClass =
    variant === 'danger'
      ? 'bg-[#FF0000]/[0.05] group-hover:bg-[#FF0000]'
      : 'bg-light-bg group-hover:bg-secondary'

  const iconClass =
    variant === 'danger'
      ? 'text-[#FF0000] group-hover:text-white'
      : 'text-secondary group-hover:text-white'

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={[
        'grid h-[45px] w-[45px] shrink-0 place-items-center rounded-[6px]',
        'md:h-[60px] md:w-[60px]',
        'transition-colors duration-300 ease-out',
        iconClass,
        boxClass,
      ].join(' ')}
    >
      <DownloadIcon className="h-[17px] w-[17px] md:h-[22px] md:w-[22px]" />
    </a>
  )
}

function DownloadIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M19.2499 17.4165H2.74992C2.5068 17.4165 2.27365 17.5131 2.10174 17.685C1.92983 17.8569 1.83325 18.0901 1.83325 18.3332C1.83325 18.5763 1.92983 18.8094 2.10174 18.9814C2.27365 19.1533 2.5068 19.2498 2.74992 19.2498H19.2499C19.493 19.2498 19.7262 19.1533 19.8981 18.9814C20.07 18.8094 20.1666 18.5763 20.1666 18.3332C20.1666 18.0901 20.07 17.8569 19.8981 17.685C19.7262 17.5131 19.493 17.4165 19.2499 17.4165Z"
        fill="currentColor"
      />
      <path
        d="M11.0001 1.8335C10.757 1.8335 10.5238 1.93007 10.3519 2.10198C10.18 2.27389 10.0834 2.50705 10.0834 2.75016V12.4577L7.06759 9.43266C6.89498 9.26005 6.66087 9.16308 6.41676 9.16308C6.17265 9.16308 5.93853 9.26005 5.76592 9.43266C5.59331 9.60527 5.49634 9.83939 5.49634 10.0835C5.49634 10.3276 5.59331 10.5617 5.76592 10.7343L10.3493 15.3177C10.4345 15.4036 10.5359 15.4718 10.6476 15.5183C10.7593 15.5649 10.8791 15.5888 11.0001 15.5888C11.1211 15.5888 11.2409 15.5649 11.3526 15.5183C11.4643 15.4718 11.5657 15.4036 11.6509 15.3177L16.2343 10.7343C16.3197 10.6489 16.3875 10.5474 16.4338 10.4357C16.48 10.3241 16.5038 10.2044 16.5038 10.0835C16.5038 9.96263 16.48 9.84294 16.4338 9.73127C16.3875 9.6196 16.3197 9.51813 16.2343 9.43266C16.1488 9.34719 16.0473 9.2794 15.9356 9.23314C15.824 9.18689 15.7043 9.16308 15.5834 9.16308C15.4626 9.16308 15.3429 9.18689 15.2312 9.23314C15.1195 9.2794 15.0181 9.34719 14.9326 9.43266L11.9168 12.4577V2.75016C11.9168 2.50705 11.8202 2.27389 11.6483 2.10198C11.4764 1.93007 11.2432 1.8335 11.0001 1.8335Z"
        fill="currentColor"
      />
    </svg>
  )
}

 