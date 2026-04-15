import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { clearAdminToken } from '../lib/api'
import { adminLogout } from '../lib/galleryApi'

const navItems = [
  {
    to: '/',
    end: true,
    label: 'Overview',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    to: '/gallery',
    end: false,
    label: 'Gallery',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    to: '/speakers',
    end: false,
    label: 'Speakers',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    to: '/enquiries',
    end: false,
    label: 'Enquiries',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

export function AdminShell() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen bg-[#F4F6FA]">
      {/* Sidebar */}
      <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col bg-[#0B1F3B] px-5 py-7 text-white shadow-xl">
        {/* Branding */}
        <div className="mb-8 px-1">
          <span className="inline-block rounded-md bg-[#0F7B6C] px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white/90">
            Admin
          </span>
          <p className="mt-2 text-xl font-bold leading-tight tracking-tight text-white">
            APME <span className="text-[#0F7B6C]">2026</span>
          </p>
          <p className="mt-0.5 text-[11px] text-white/40">Content Management</p>
        </div>

        {/* Nav */}
        <nav className="flex flex-1 flex-col gap-1">
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-white/30">
            Menu
          </p>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150',
                  isActive
                    ? 'bg-[#0F7B6C] text-white shadow-md shadow-[#0F7B6C]/30'
                    : 'text-white/60 hover:bg-white/8 hover:text-white',
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? 'text-white' : 'text-white/50'}>{item.icon}</span>
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="mt-4 border-t border-white/10 pt-5">
          <button
            type="button"
            onClick={async () => {
              try {
                await adminLogout()
              } finally {
                clearAdminToken()
                navigate('/login', { replace: true })
              }
            }}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/50 transition-all hover:bg-white/8 hover:text-red-400"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Log out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="min-h-screen flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
