import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'

const SOCIALS = [
  {
    name: 'Facebook',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    href: 'https://facebook.com',
  },
  {
    name: 'X (Twitter)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M12.33 4.5H13.84L10.542 8.354L14.42 13.596H11.381L9.001 10.413L6.277 13.596H4.766L8.294 9.47L4.58 4.5H7.694L9.845 7.411L12.33 4.5ZM11.799 12.665H12.636L7.245 5.385H6.347L11.799 12.665Z" fill="black"/>
      </svg>
    ),
    href: 'https://twitter.com',
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#0077B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 9H2V21H6V9Z" stroke="#0077B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#0077B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    href: 'https://linkedin.com',
  },
  {
    name: 'Instagram',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#insta_grad)" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" stroke="url(#insta_grad)" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="url(#insta_grad)"/>
        <defs>
          <linearGradient id="insta_grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F58529"/>
            <stop offset="0.5" stopColor="#D62976"/>
            <stop offset="1" stopColor="#8134AF"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    href: 'https://instagram.com',
  },
]

export function SocialMediaSection() {
  return (
    <section className="bg-[#F8FAFB] py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[0.8fr_1fr] lg:gap-[100px] items-center">
            {/* Left Column: Content */}
            <div className="flex flex-col items-start">
              <Reveal className="mb-6">
                <DarkIconTitle
                  iconSrc="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='18' cy='5' r='3' stroke='%230f7b6c' stroke-width='2'/%3E%3Ccircle cx='6' cy='12' r='3' stroke='%230f7b6c' stroke-width='2'/%3E%3Ccircle cx='18' cy='19' r='3' stroke='%230f7b6c' stroke-width='2'/%3E%3Cline x1='8.59' y1='13.51' x2='15.42' y2='17.49' stroke='%230f7b6c' stroke-width='2'/%3E%3Cline x1='15.41' y1='6.51' x2='8.59' y2='10.49' stroke='%230f7b6c' stroke-width='2'/%3E%3C/svg%3E"
                >
                  STAY CONNECTED
                </DarkIconTitle>
              </Reveal>
              <Reveal className="mb-6">
                <h2 className="font-heading text-[48px] font-bold leading-tight text-primary max-[991px]:text-[36px]">
                  Follow Us on <span className="text-secondary">Social Media</span>
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-[18px] leading-relaxed text-body max-w-[400px] max-[991px]:text-[16px]">
                  Stay updated with the latest news, announcements, and highlights from APME 2026
                </p>
              </Reveal>
            </div>

            {/* Right Column: Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {SOCIALS.map((social, idx) => (
                <Reveal key={social.name} delay={idx * 100}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-[140px] flex-col items-center justify-center gap-4 overflow-hidden rounded-[20px] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {social.icon}
                    </div>
                    <span className="text-[18px] font-bold text-primary group-hover:text-secondary transition-colors">
                      {social.name}
                    </span>
                    
                    {/* Bottom Accent Bar */}
                    <div className="absolute bottom-0 left-0 h-[4px] w-full bg-secondary scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    
                    {/* Default subtle border indicator */}
                    <div className="absolute bottom-0 left-0 h-[4px] w-full bg-secondary/10" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Pad>
    </section>
  )
}
