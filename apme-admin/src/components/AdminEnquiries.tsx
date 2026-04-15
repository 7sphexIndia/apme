import { useEffect, useMemo, useState } from 'react'
import type { Enquiry } from '../types/enquiry'
import { adminFetchEnquiries } from '../lib/galleryApi'

function formatDateTime(v: string): string {
  const d = new Date(v)
  if (Number.isNaN(d.getTime())) return v
  return d.toLocaleString()
}

export function AdminEnquiries() {
  const [items, setItems] = useState<Enquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [q, setQ] = useState('')

  useEffect(() => {
    let alive = true
    ;(async () => {
      setLoading(true)
      setError(null)
      try {
        const rows = await adminFetchEnquiries()
        if (!alive) return
        setItems(rows)
      } catch (e) {
        if (!alive) return
        setError(e instanceof Error ? e.message : 'Failed to load enquiries')
      } finally {
        if (!alive) return
        setLoading(false)
      }
    })()
    return () => {
      alive = false
    }
  }, [])

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return items
    return items.filter((it) => {
      const hay = [
        it.first_name,
        it.last_name,
        it.email,
        it.inquiry_type,
        it.organization,
        it.message,
      ]
        .join(' ')
        .toLowerCase()
      return hay.includes(s)
    })
  }, [items, q])

  return (
    <div className="px-8 py-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-primary">Enquiries</h1>
          <p className="mt-1 text-sm text-body">Contact form submissions</p>
        </div>

        <div className="w-full sm:w-[360px]">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-body/70">Search</label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Name, email, organization, message…"
            className="h-[44px] w-full rounded-lg border border-stroke bg-white px-4 text-sm text-body outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20"
          />
        </div>
      </div>

      {loading ? <div className="text-sm text-body">Loading…</div> : null}
      {error ? (
        <div className="rounded-lg border border-[#E03131]/30 bg-[#E03131]/5 px-4 py-3 text-sm text-[#E03131]">
          {error}
        </div>
      ) : null}

      {!loading && !error && filtered.length === 0 ? (
        <div className="rounded-lg border border-stroke bg-white p-6 text-sm text-body">No enquiries found.</div>
      ) : null}

      {!loading && !error && filtered.length > 0 ? (
        <div className="overflow-hidden rounded-xl border border-stroke bg-white">
          <div className="overflow-auto">
            <table className="min-w-[900px] w-full border-collapse text-left text-sm">
              <thead className="bg-light-bg">
                <tr className="text-body/70">
                  <th className="px-5 py-3 font-semibold">Date</th>
                  <th className="px-5 py-3 font-semibold">Name</th>
                  <th className="px-5 py-3 font-semibold">Email</th>
                  <th className="px-5 py-3 font-semibold">Inquiry</th>
                  <th className="px-5 py-3 font-semibold">Organization</th>
                  <th className="px-5 py-3 font-semibold">Message</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((it) => (
                  <tr key={it.id} className="border-t border-stroke align-top">
                    <td className="px-5 py-4 whitespace-nowrap text-body">{formatDateTime(it.created_at)}</td>
                    <td className="px-5 py-4 whitespace-nowrap font-semibold text-primary">
                      {it.first_name} {it.last_name}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-body">{it.email}</td>
                    <td className="px-5 py-4 whitespace-nowrap text-body">{it.inquiry_type}</td>
                    <td className="px-5 py-4 whitespace-nowrap text-body">{it.organization}</td>
                    <td className="px-5 py-4 text-body">
                      <div className="max-w-[520px] whitespace-pre-wrap">{it.message}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  )
}

