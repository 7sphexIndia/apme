import React, { useState } from 'react'
import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'
import { Button } from '../../common/ButtonLink'
import { apiFetch } from '../../../lib/api'

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    inquiryType: '',
    organization: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    setSubmitSuccess(null)
    setIsSubmitting(true)
    try {
      const res = await apiFetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          inquiry_type: formData.inquiryType,
          organization: formData.organization,
          message: formData.message,
        }),
      })
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (!res.ok || json.ok !== true) {
        throw new Error(json.error ?? 'Failed to send message. Please try again.')
      }
      setSubmitSuccess('Thank you for your message! We will get back to you soon.')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        inquiryType: '',
        organization: '',
        message: '',
      })
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldClassName =
    'h-[60px] rounded-[10px] border border-stroke px-6 text-[16px] text-body outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary/20 placeholder:text-[14px] placeholder:text-body placeholder:font-light'

  return (
    <section className="bg-light-bg py-[80px] max-[991px]:py-[50px]">
      <Pad>
        <Container>
          <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-[0.4fr_1fr] lg:gap-[40px]">
            {/* Left Column: Content */}
            <div className="flex flex-col items-start">
              <Reveal className="mb-[30px]">
                <DarkIconTitle
                  iconSrc="/img/send_tag.svg"
                >
                  SEND US A MESSAGE
                </DarkIconTitle>
              </Reveal>
              <Reveal className="mb-10">
                <h2 className="font-heading text-[36px] leading-[46px] font-bold text-primary max-[991px]:text-[32px]">
                  Drop Us <span className="text-secondary">a Line</span>
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-[18px] text-body max-[991px]:text-[16px]">
                  Fill out the form below and we'll get back to you within 48 hours
                </p>
              </Reveal>
            </div>

            {/* Right Column: Form */}
            <Reveal>
              <form onSubmit={handleSubmit} className="rounded-[10px] bg-white border border-stroke p-[60px] max-[991px]:p-[30px]">
                <div className="grid grid-cols-1 gap-x-[30px] gap-y-10 md:grid-cols-2">
                  {/* First Name */}
                  <div className="flex flex-col gap-4">
                    <label className="text-[16px] italic text-body">
                      First Name <span className="text-[#E03131]">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      required
                      onChange={handleChange}
                      value={formData.firstName}
                      className={fieldClassName + ' h-[54px]'}
                    />
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col gap-4">
                    <label className="text-[16px] italic text-body">
                      Last Name <span className="text-[#E03131]">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      required
                      onChange={handleChange}
                      value={formData.lastName}
                      className={fieldClassName}
                    />
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] italic text-body">
                      Email Address <span className="text-[#E03131]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      onChange={handleChange}
                      value={formData.email}
                      className={fieldClassName}
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] italic text-body">
                      Inquiry Type <span className="text-[#E03131]">*</span>
                    </label>
                    <select
                      name="inquiryType"
                      required
                      onChange={handleChange}
                      value={formData.inquiryType}
                      className="h-[60px] cursor-pointer rounded-[10px] border border-stroke bg-white px-6 text-[16px] text-body outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary/20 appearance-none"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'8\' viewBox=\'0 0 12 8\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L6 6L11 1\' stroke=\'%23333333\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 24px center' }}
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Registration">Registration</option>
                      <option value="Speaker/Paper Submission">Speaker/Paper Submission</option>
                      <option value="Sponsorship">Sponsorship</option>
                      <option value="Venue/Accommodation">Venue/Accommodation</option>
                    </select>
                  </div>

                  {/* Organization */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[16px] italic text-body">
                      Organization / Institution <span className="text-[#E03131]">*</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="University of Technology"
                      required
                      onChange={handleChange}
                      value={formData.organization}
                      className={fieldClassName}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[16px] italic text-body">
                      Message <span className="text-[#E03131]">*</span>
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us how we can help you..."
                      required
                      rows={4}
                      onChange={handleChange}
                      value={formData.message}
                      className="rounded-[10px] border border-stroke p-6 text-[16px] text-body outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary/20 min-h-[160px] placeholder:text-[14px] placeholder:text-body placeholder:font-light"
                    />
                  </div>

                  {submitError ? (
                    <div className="md:col-span-2 rounded-[10px] border border-[#E03131]/30 bg-[#E03131]/5 px-5 py-3 text-[14px] text-[#E03131]">
                      {submitError}
                    </div>
                  ) : null}

                  {submitSuccess ? (
                    <div className="md:col-span-2 rounded-[10px] border border-emerald-500/25 bg-emerald-500/10 px-5 py-3 text-[14px] text-emerald-700">
                      {submitSuccess}
                    </div>
                  ) : null}

                  {/* Submit Button */}
                  <div className="mt-4 md:col-span-2">
                    <Button variant="primary" type="submit" className="w-full justify-center sm:w-fit" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending…' : 'Send Message'}
                    </Button>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </Container>
      </Pad>
    </section>
  )
}
