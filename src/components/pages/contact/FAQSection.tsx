import { useState } from 'react'
import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'

const FAQS = [
  {
    question: 'What is the typical response time for inquiries?',
    answer: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters during the conference period, our response time is typically within a few hours.',
  },
  {
    question: 'How can I request an invitation letter for visa purposes?',
    answer: 'Registered attendees can request an invitation letter through the conference dashboard after completing their registration. Alternatively, you can contact us with your registration details.',
  },
  {
    question: 'Can I submit multiple papers to the conference?',
    answer: 'Yes, authors are welcome to submit multiple papers. Each paper will undergo a separate peer-review process.',
  },
  {
    question: 'Is there group registration available?',
    answer: 'Yes, we offer special rates for groups of 5 or more attendees from the same institution. Please contact us for a group discount code.',
  },
  {
    question: 'What are the sponsorship opportunities?',
    answer: 'We have multiple sponsorship tiers available, ranging from Platinum to Bronze. Please reach out to our team for the full sponsorship prospectus.',
  },
]

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="bg-white py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          {/* Header */}
          <div className="mb-[60px] flex flex-col items-center text-center max-[991px]:mb-[40px]">
            <Reveal className="mb-6">
              <DarkIconTitle
                iconSrc="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='10' stroke='%230f7b6c' stroke-width='2'/%3E%3Cpath d='M9.09 9C9.3251 8.2785 9.87321 7.7088 10.5834 7.42081C11.2936 7.13282 12.0864 7.15545 12.7201 7.48512C13.3538 7.8148 13.757 8.42337 13.7997 9.1249C13.8424 9.82643 13.5204 10.4908 12.93 10.92L12 11.5M12 15H12.01' stroke='%230f7b6c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
              >
                COMMON QUESTIONS
              </DarkIconTitle>
            </Reveal>
            <Reveal>
              <h2 className="font-heading text-[48px] font-bold leading-tight text-primary max-[991px]:text-[36px]">
                Frequently Asked <span className="text-secondary">Questions</span>
              </h2>
            </Reveal>
          </div>

          {/* FAQ List */}
          <div className="mx-auto flex max-w-[940px] flex-col gap-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <Reveal key={idx} delay={idx * 50}>
                  <div
                    className={`group overflow-hidden rounded-[12px] border transition-all duration-300 ${
                      isOpen
                        ? 'border-secondary/20 bg-[#F8FAFB] shadow-sm'
                        : 'border-stroke bg-white hover:border-secondary/30'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between px-8 py-6 text-left max-[991px]:px-6"
                    >
                      <span
                        className={`text-[18px] font-bold transition-colors duration-300 max-[991px]:text-[16px] ${
                          isOpen ? 'text-primary' : 'text-primary/80 group-hover:text-primary'
                        }`}
                      >
                        {faq.question}
                      </span>
                      <div
                        className={`flex h-6 w-6 items-center justify-center transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-secondary' : 'text-body/40'
                        }`}
                      >
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L6 6L11 1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-8 pb-8 text-[16px] leading-relaxed text-body max-[991px]:px-6 max-[991px]:pb-6">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </Pad>
    </section>
  )
}
