import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'

export function ContactMap() {
  return (
    <section className="bg-white py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          {/* Header */}
          <div className="mb-[60px] flex flex-col items-center text-center max-[991px]:mb-[40px]">
            <Reveal className="mb-6">
              <DarkIconTitle iconSrc="/img/location.svg">CONFERENCE VENUE</DarkIconTitle>
            </Reveal>
            <Reveal>
              <h2 className="font-heading text-[48px] font-bold leading-tight text-primary max-[991px]:text-[36px]">
                Find Us <span className="text-secondary">in Dubai</span>
              </h2>
            </Reveal>
          </div>

          {/* Map Area */}
          <Reveal className="mb-[60px]">
            <div className="relative h-[500px] w-full overflow-hidden rounded-[20px] border border-stroke shadow-sm max-[991px]:h-[350px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231280.41390533614!2d55.06233704355974!3d25.076242067619972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1776078672231!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Reveal>

          {/* Info Grid */}
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
            {/* Conference Venue Card */}
            <Reveal delay={100}>
              <div className="flex items-center gap-6 rounded-[20px] bg-light-bg p-8 transition-all hover:bg-white hover:shadow-md border border-transparent hover:border-stroke">
                <div className="flex h-[64px] w-[64px] min-w-[64px] items-center justify-center rounded-full bg-white text-secondary">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 21V10H14V21M10 21H3V8L12 3L21 8V21H14M10 21H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-primary">Conference Venue</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-body">
                    Dubai International Convention Centre <br />
                    Sheikh Zayed Road, Dubai, UAE
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Office Hours Card */}
            <Reveal delay={200}>
              <div className="flex items-center gap-6 rounded-[20px] bg-light-bg p-8 transition-all hover:bg-white hover:shadow-md border border-transparent hover:border-stroke">
                <div className="flex h-[64px] w-[64px] min-w-[64px] items-center justify-center rounded-full bg-white text-secondary">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-primary">Office Hours</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-body">
                    Monday - Friday: 9:00 AM - 6:00 PM GST <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Get Directions Card */}
            <Reveal delay={300}>
              <div className="flex items-center gap-6 rounded-[20px] bg-light-bg p-8 transition-all hover:bg-white hover:shadow-md border border-transparent hover:border-stroke">
                <div className="flex h-[64px] w-[64px] min-w-[64px] items-center justify-center rounded-full bg-white text-secondary">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2.00012 12H22.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2.00012C14.5013 4.73847 15.9228 8.29215 16 12.0001C15.9228 15.7081 14.5013 19.2618 12 22.0001C9.4988 19.2618 8.07725 15.7081 8.00012 12.0001C8.07725 8.29215 9.4988 4.73847 12 2.00012Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-primary">Get Directions</h3>
                  <a
                    href="https://maps.app.goo.gl/3fX3f3f3f3f3f3f3f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 text-[15px] font-semibold text-secondary hover:underline"
                  >
                    Open in Google Maps
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Pad>
    </section>
  )
}
