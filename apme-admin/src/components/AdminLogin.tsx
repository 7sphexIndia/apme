import { type FormEvent, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { getAdminToken, setAdminToken } from '../lib/api'
import { adminLogin } from '../lib/galleryApi'

export function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('Admin@apme.com')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  if (getAdminToken()) {
    return <Navigate to="/" replace />
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setBusy(true)
    try {
      const token = await adminLogin(email.trim(), password)
      setAdminToken(token)
      navigate('/', { replace: true })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left decorative panel */}
      <div
        className="hidden flex-col justify-between p-12 lg:flex lg:w-[45%] xl:w-[42%]"
        style={{ background: 'linear-gradient(145deg, #0B1F3B 0%, #0e2d4a 60%, #0F7B6C 100%)' }}
      >
        {/* Top branding */}
        <div>
          <span className="inline-block rounded-md bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white/70">
            Admin Panel
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white">
            APME <span className="text-[#0F7B6C]" style={{ color: '#2dd4bf' }}>2026</span>
          </h1>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
            Asia Pacific Media Expo — Content management portal for gallery, speakers and enquiries.
          </p>
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-4">
          {[
            { icon: '🖼️', label: 'Gallery Management', desc: 'Upload & organise media' },
            { icon: '🎤', label: 'Speakers & Guests', desc: 'Manage all editions' },
            { icon: '📬', label: 'Enquiries Inbox', desc: 'View contact submissions' },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                {f.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{f.label}</p>
                <p className="text-xs text-white/45">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-[11px] text-white/25">© 2026 APME. All rights reserved.</p>
      </div>

      {/* Right form panel */}
      <div className="flex flex-1 items-center justify-center bg-[#F4F6FA] px-6 py-12">
        <div className="w-full max-w-[420px]">
          {/* Mobile logo */}
          <div className="mb-8 lg:hidden">
            <span className="inline-block rounded-md bg-[#0B1F3B] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white/80">
              APME Admin
            </span>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#E7F2F1]">
            <div className="mb-7">
              <h2 className="text-2xl font-bold text-[#0B1F3B]">Sign in</h2>
              <p className="mt-1.5 text-sm text-[#6B7280]">
                Enter your credentials to access the dashboard.
              </p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={(e) => void onSubmit(e)}>
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="login-email" className="text-sm font-semibold text-[#374151]">
                  Email address
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  inputMode="email"
                  className="h-[46px] rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 text-sm text-[#111827] outline-none transition focus:border-[#0F7B6C] focus:bg-white focus:ring-2 focus:ring-[#0F7B6C]/20"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="login-password" className="text-sm font-semibold text-[#374151]">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    className="h-[46px] w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] py-0 pl-4 pr-16 text-sm text-[#111827] outline-none transition focus:border-[#0F7B6C] focus:bg-white focus:ring-2 focus:ring-[#0F7B6C]/20"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold text-[#0F7B6C] hover:bg-[#0F7B6C]/10"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-pressed={showPassword}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error ? (
                <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {error}
                </div>
              ) : null}

              {/* Submit */}
              <button
                type="submit"
                disabled={busy}
                className="mt-1 flex h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-[#0F7B6C] text-sm font-semibold text-white shadow-md shadow-[#0F7B6C]/25 transition-all hover:bg-[#0d6b5e] disabled:opacity-60"
              >
                {busy ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Signing in…
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
