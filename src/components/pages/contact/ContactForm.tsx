import React, { useState } from 'react'
import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    inquiryType: '',
    organization: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form Submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <section className="bg-light-bg py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[0.4fr_1fr] lg:gap-[100px]">
            {/* Left Column: Content */}
            <div className="flex flex-col items-start lg:pt-10">
              <Reveal className="mb-6">
                <DarkIconTitle
                  iconSrc="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 4H4C2.89543 4 2 4.89543 2 6V20C2 21.1046 2.89543 22 4 22H18C19.1046 22 20 21.1046 20 20V13' stroke='%230f7b6c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M18.5 2.5C19.3284 2.5 20 3.17157 20 4C20 4.82843 19.3284 5.5 18.5 5.5C17.6716 5.5 17 4.82843 17 4C17 3.17157 17.6716 2.5 18.5 2.5Z' stroke='%230f7b6c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M15 8L18.5 4.5L20 6L16.5 9.5L15 8Z' stroke='%230f7b6c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                >
                  SEND US A MESSAGE
                </DarkIconTitle>
              </Reveal>
              <Reveal className="mb-6">
                <h2 className="font-heading text-[48px] font-bold leading-tight text-primary max-[991px]:text-[36px]">
                  Drop Us <span className="text-secondary">a Line</span>
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-[18px] leading-relaxed text-body max-w-[340px] max-[991px]:text-[16px]">
                  Fill out the form below and we'll get back to you within 48 hours
                </p>
              </Reveal>
            </div>

            {/* Right Column: Form */}
            <Reveal>
              <form onSubmit={handleSubmit} className="rounded-[20px] bg-white p-[50px] shadow-sm max-[991px]:p-[30px]">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                  {/* First Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-bold text-primary">
                      First Name <span className="text-[#E03131]">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      required
                      onChange={handleChange}
                      className="h-[60px] rounded-[10px] border border-stroke px-6 text-[16px] text-body outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary/20"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-bold text-primary">
                      Last Name <span className="text-[#E03131]">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      required
                      onChange={handleChange}
                      className="h-[60px] rounded-[10px] border border-stroke px-6 text-[16px] text-body outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary/20"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-bold text-primary">
                      Email Address <span className="text-[#E03131]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      onChange={handleChange}
                      className="h-[60px] rounded-[10px] border border-stroke px-6 text-[16px] text-body outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary/20"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-bold text-primary">
                      Inquiry Type <span className="text-[#E03131]">*</span>
                    </label>
                    <select
                      name="inquiryType"
                      required
                      onChange={handleChange}
                      className="h-[60px] cursor-pointer rounded-[10px] border border-stroke bg-white px-6 text-[16px] text-body outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary/20 appearance-none"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'8\' viewBox=\'0 0 12 8\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L6 6L11 1\' stroke=\'%23333333\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 24px center' }}
                    >
                      <option value="" disabled selected>Select a category</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Registration">Registration</option>
                      <option value="Speaker/Paper Submission">Speaker/Paper Submission</option>
                      <option value="Sponsorship">Sponsorship</option>
                      <option value="Venue/Accommodation">Venue/Accommodation</option>
                    </select>
                  </div>

                  {/* Organization */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[16px] font-bold text-primary">
                      Organization / Institution <span className="text-[#E03131]">*</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="University of Technology"
                      required
                      onChange={handleChange}
                      className="h-[60px] rounded-[10px] border border-stroke px-6 text-[16px] text-body outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary/20"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[16px] font-bold text-primary">
                      Message <span className="text-[#E03131]">*</span>
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us how we can help you..."
                      required
                      rows={4}
                      onChange={handleChange}
                      className="rounded-[10px] border border-stroke p-6 text-[16px] text-body outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary/20 min-h-[160px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4 md:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex h-[64px] items-center gap-4 rounded-full bg-primary px-8 text-[18px] font-bold text-white transition-all hover:bg-secondary hover:shadow-lg group"
                    >
                      Send Message
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-1 group-hover:scale-110">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </button>
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
