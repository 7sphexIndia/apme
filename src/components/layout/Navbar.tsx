import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonLink } from '../common/ButtonLink'
import Container from '../common/Container'
import { Pad } from '../common/Pad'

const navLinkClassName = ({
  isActive,
}: {
  isActive: boolean
}) =>
  [
    'text-[16px] transition-all duration-300',
    'text-[#F5F7FA]',
    isActive ? 'font-bold' : 'font-normal',
    'hover:opacity-80',
  ].join(' ')

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const links: Array<{ to: string; label: string }> = [
    { to: '/', label: 'Home' },
    { to: '/cfp', label: 'CFP' },
    { to: '/publication', label: 'Publication' },
    { to: '/committees', label: 'Committees' },
    { to: '/speakers', label: 'Speakers' },
    { to: '/agenda', label: 'Agenda' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/venue', label: 'Venue' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="Navbar"
      className={[
        'fixed top-0 z-[999] w-full border-b backdrop-blur-[30px] transition-all duration-300',
        scrolled
          ? 'border-primary/10 bg-primary shadow-sm'
          : 'border-white/10 bg-white/[0.02]',
      ].join(' ')}
    >
      <Pad as="div">
        <Container>
          <div className="flex items-center justify-between py-[30px] transition-all duration-300">
            <NavLink className="inline-flex items-center" to="/">
              <img
                src="/img/logo.svg"
                alt="APME Logo"
                decoding="async"
                fetchPriority="high"
                className="h-[50px] w-auto object-contain transition-all duration-300"
              />
            </NavLink>

            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-[#F5F7FA] xl:hidden"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    open
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>

            <div
              className={[
                'w-full xl:flex xl:w-auto xl:items-center xl:gap-[34px]',
                open ? 'block' : 'hidden xl:block',
              ].join(' ')}
            >
              <ul className="flex flex-col gap-3 pb-5 pt-4 xl:flex-row xl:items-center xl:gap-[34px] xl:pb-0 xl:pt-0">
                {links.map((link) => (
                  <li key={link.to} className="xl:flex xl:items-center">
                    <NavLink
                      className={({ isActive }) =>
                        navLinkClassName({ isActive })
                      }
                      to={link.to}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="pb-6 xl:flex xl:items-center xl:pb-0">
                <ButtonLink
                  to="/contact"
                  variant="primary"
                  className={[
                    'transition-all duration-300',
                    scrolled
                      ? 'bg-secondary hover:!bg-primary'
                      : 'bg-primary hover:!bg-secondary',
                  ].join(' ')}
                >
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Pad>
    </nav>
  )
}


