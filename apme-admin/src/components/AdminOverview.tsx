import { NavLink } from 'react-router-dom'

const stats = [
  {
    label: 'Gallery Items',
    value: '—',
    sub: 'Images & videos',
    color: 'from-[#0F7B6C] to-[#12a093]',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    label: 'Speakers',
    value: '—',
    sub: 'Guests & invitees',
    color: 'from-[#2563EB] to-[#3b82f6]',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: 'Enquiries',
    value: '—',
    sub: 'Contact submissions',
    color: 'from-[#7C3AED] to-[#9f55ff]',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Event Year',
    value: '2026',
    sub: 'Asia Pacific Media Expo',
    color: 'from-[#D97706] to-[#f59e0b]',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
]

const quickActions = [
  {
    to: '/gallery',
    title: 'Manage Gallery',
    description: 'Upload new images or videos, reorder and remove existing gallery items shown on the public site.',
    badge: 'Gallery',
    badgeColor: 'bg-[#0F7B6C]/10 text-[#0F7B6C]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    iconBg: 'bg-[#0F7B6C]/10 text-[#0F7B6C]',
    arrowColor: 'text-[#0F7B6C]',
  },
  {
    to: '/speakers',
    title: 'Manage Speakers',
    description: 'Add, edit or remove guests, speakers and invitees — filter by year and type for the public Speakers page.',
    badge: 'Speakers',
    badgeColor: 'bg-[#2563EB]/10 text-[#2563EB]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    iconBg: 'bg-[#2563EB]/10 text-[#2563EB]',
    arrowColor: 'text-[#2563EB]',
  },
  {
    to: '/enquiries',
    title: 'View Enquiries',
    description: 'Browse and search contact form submissions from visitors — filter by name, email, organization or message.',
    badge: 'Enquiries',
    badgeColor: 'bg-[#7C3AED]/10 text-[#7C3AED]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    iconBg: 'bg-[#7C3AED]/10 text-[#7C3AED]',
    arrowColor: 'text-[#7C3AED]',
  },
]

const tips = [
  {
    icon: '📸',
    title: 'Gallery',
    text: 'Upload high-resolution images (JPG/PNG) or videos (MP4). Items appear immediately on the public gallery page after saving.',
  },
  {
    icon: '🎤',
    title: 'Speakers',
    text: 'Tag each speaker with a year and type (e.g. Keynote, Panelist). This allows visitors to filter by year on the public page.',
  },
  {
    icon: '📬',
    title: 'Enquiries',
    text: 'Use the search bar to quickly find submissions by name, email, or keyword. All data is read-only in this panel.',
  },
]

export function AdminOverview() {
  const now = new Date()
  const greeting =
    now.getHours() < 12 ? 'Good morning' : now.getHours() < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="min-h-screen p-8 max-[767px]:p-5">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-medium text-[#6B7280]">{greeting} 👋</p>
        <h1 className="mt-1 text-[28px] font-bold text-[#0B1F3B]">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-[#6B7280]">
          Welcome to the APME 2026 admin panel. Manage your content from here.
        </p>
      </div>

      {/* Stat cards */}
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E7F2F1]"
          >
            <div className={`mb-3 inline-flex rounded-xl bg-gradient-to-br ${s.color} p-2.5 text-white shadow-md`}>
              {s.icon}
            </div>
            <p className="text-2xl font-bold text-[#0B1F3B]">{s.value}</p>
            <p className="mt-0.5 text-sm font-semibold text-[#0B1F3B]">{s.label}</p>
            <p className="mt-0.5 text-xs text-[#9CA3AF]">{s.sub}</p>
            {/* Decorative blob */}
            <div className={`absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br ${s.color} opacity-[0.07]`} />
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mb-8">
        <h2 className="mb-4 text-base font-bold text-[#0B1F3B]">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {quickActions.map((action) => (
            <NavLink
              key={action.to}
              to={action.to}
              className="group flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#E7F2F1] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-[#0F7B6C]/20"
            >
              <div className="flex items-start justify-between">
                <div className={`rounded-xl p-3 ${action.iconBg}`}>{action.icon}</div>
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${action.badgeColor}`}>
                  {action.badge}
                </span>
              </div>
              <div>
                <p className="font-semibold text-[#0B1F3B]">{action.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">{action.description}</p>
              </div>
              <div className={`flex items-center gap-1 text-xs font-semibold ${action.arrowColor}`}>
                Go to {action.badge}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-150 group-hover:translate-x-0.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Tips / How to use */}
      <div>
        <h2 className="mb-4 text-base font-bold text-[#0B1F3B]">How to Use</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E7F2F1]"
            >
              <span className="mt-0.5 shrink-0 text-2xl">{tip.icon}</span>
              <div>
                <p className="text-sm font-semibold text-[#0B1F3B]">{tip.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">{tip.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
