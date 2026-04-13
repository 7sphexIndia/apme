import { Link } from 'react-router-dom'
import Container from '../common/Container'
import { Pad } from '../common/Pad'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'CFP', to: '/cfp' },
  { label: 'Publication', to: '/publication' },
  { label: 'Committees', to: '/committees' },
  { label: 'Speakers', to: '/speakers' },
  { label: 'Agenda', to: '/agenda' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Venue', to: '/venue' },
]

const authorLinks = [
  { label: 'Call for Papers', to: '/cfp' },
  { label: 'Submission Guidelines', to: '/cfp' },
  { label: 'Author Guidelines', to: '/cfp' },
  { label: 'Important Dates', to: '/#important-dates' },
  { label: 'Publication', to: '/publication' },
]

const contactLinks = [
  { label: 'Support', to: '/contact' },
  { label: 'Venue Details', to: '/venue' },
  { label: 'Get in Touch', to: '/contact' },
]

const socialLinks = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="4" fill="#1877F2"/>
        <path d="M13.25 10H11.5V16H9.25V10H8V8.25H9.25V7.125C9.2504 6.2201 9.6879 5.3879 10.421 4.8879C11.1541 4.3879 12.1159 4.2504 12.875 4.5V6.25H11.875C11.4111 6.25 11.25 6.4111 11.25 6.875V8.25H13.25L13.125 10H13.25Z" fill="white"/>
      </svg>
    ),
    href: 'https://facebook.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="4" fill="#0077B5"/>
        <path d="M6 16V8.5H3.5V16H6ZM4.75 7.5C5.44036 7.5 6 6.94036 6 6.25C6 5.55964 5.44036 5 4.75 5C4.05964 5 3.5 5.55964 3.5 6.25C3.5 6.94036 4.05964 7.5 4.75 7.5Z" fill="white"/>
        <path d="M16.5 16V11.75C16.5 9.66447 15.3355 8.5 13.75 8.5C12.4795 8.5 11.9118 9.2045 11.5947 9.6972V8.5H9.25V16H11.5947V12.125C11.5947 11.0963 11.7766 10.25 13.0625 10.25C14.3484 10.25 14.375 11.25 14.375 12.25V16H16.5Z" fill="white"/>
      </svg>
    ),
    href: 'https://linkedin.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="4" fill="url(#instagram_grad)"/>
        <path d="M10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5ZM10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10C11.5 10.8284 10.8284 11.5 10 11.5Z" fill="white"/>
        <path d="M12.75 6.5C12.75 6.91421 12.4142 7.25 12 7.25C11.5858 7.25 11.25 6.91421 11.25 6.5C11.25 6.08579 11.5858 5.75 12 5.75C12.4142 5.75 12.75 6.08579 12.75 6.5Z" fill="white"/>
        <path d="M14.5 10C14.5 8.25 14.5 7.5 14.2 6.8C13.8 5.9 13.1 5.2 12.2 4.8C11.5 4.5 10.75 4.5 9 4.5C7.25 4.5 6.5 4.5 5.8 4.8C4.9 5.2 4.2 5.9 3.8 6.8C3.5 7.5 3.5 8.25 3.5 10C3.5 11.75 3.5 12.5 3.8 13.2C4.2 14.1 4.9 14.8 5.8 15.2C6.5 15.5 7.25 15.5 9 15.5C10.75 15.5 11.5 15.5 12.2 15.2C13.1 14.8 13.8 14.1 14.2 13.2C14.5 12.5 14.5 11.75 14.5 10ZM13.35 13.05C13.1 13.7 12.6 14.2 11.95 14.45C11.45 14.65 10.8 14.65 9 14.65C7.2 14.65 6.55 14.65 6.05 14.45C5.4 14.2 4.9 13.7 4.65 13.05C4.45 12.55 4.45 11.9 4.45 10C4.45 8.1 4.45 7.45 4.65 6.95C4.9 6.3 5.4 5.8 6.05 5.55C6.55 5.35 7.2 5.35 9 5.35C10.8 5.35 11.45 5.35 11.95 5.55C12.6 5.8 13.1 6.3 13.35 6.95C13.55 7.45 13.55 8.1 13.55 10C13.55 11.9 13.55 12.55 13.35 13.05Z" fill="white"/>
        <defs>
          <linearGradient id="instagram_grad" x1="2.5" y1="17.5" x2="17.5" y2="2.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F58529"/>
            <stop offset="0.5" stopColor="#D62976"/>
            <stop offset="1" stopColor="#8134AF"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    href: 'https://instagram.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="4" fill="black"/>
        <path d="M12.33 4.5H13.84L10.542 8.354L14.42 13.596H11.381L9.001 10.413L6.277 13.596H4.766L8.294 9.47L4.58 4.5H7.694L9.845 7.411L12.33 4.5ZM11.799 12.665H12.636L7.245 5.385H6.347L11.799 12.665Z" fill="white"/>
      </svg>
    ),
    href: 'https://twitter.com',
  },
]

export function Footer() {
  return (
    <footer className="bg-primary pt-[100px] text-white">
      <Pad>
        <Container>
          <div className="grid grid-cols-1 gap-[60px] md:grid-cols-2 lg:grid-cols-4 lg:gap-[40px]">
            {/* Logo and Intro Section */}
            <div className="flex flex-col">
              <Link to="/">
                <img
                  src="/img/logo.svg"
                  alt="APME Logo"
                  className="mb-8 h-[60px] w-auto object-contain"
                />
              </Link>
              <p className="mb-10 text-[16px] leading-[24px] text-white/70">
                International Committee on <br /> Applied Physics, Mathematics & <br /> Energy
                <br />
                <span className="mt-2 block">Dubai, UAE — November 15-17, 2026.</span>
              </p>
              <div className="flex items-center gap-[10px]">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-white/[0.08] transition-all hover:bg-secondary hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h4 className="mb-8 text-[20px] font-bold">Quick Links</h4>
              <ul className="flex flex-col gap-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[16px] text-white/70 transition-colors hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Authors Section */}
            <div>
              <h4 className="mb-8 text-[20px] font-bold">For Authors</h4>
              <ul className="flex flex-col gap-4">
                {authorLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[16px] text-white/70 transition-colors hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="mb-8 text-[20px] font-bold">Contact</h4>
              <ul className="flex flex-col gap-4">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[16px] text-white/70 transition-colors hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="mt-[100px] border-t border-white/10 py-[30px] md:mt-[60px]">
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
              <p className="text-[14px] text-white/50 text-center md:text-left">
                © {new Date().getFullYear()} APME. All Rights Reserved. International Conference on Applied Physics, Mathematics & Energy — Dubai, UAE. | Design by <span className="text-white/70 font-semibold uppercase tracking-wider">7sphex</span>
              </p>
              <div className="flex items-center gap-6 text-[14px] text-white/50">
                <Link to="/contact" className="hover:text-white transition-colors">Terms of Use</Link>
                <span className="text-white/10">|</span>
                <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
                <span className="text-white/10">|</span>
                <Link to="/contact" className="hover:text-white transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </Container>
      </Pad>
    </footer>
  )
}
