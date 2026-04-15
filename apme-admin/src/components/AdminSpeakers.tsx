import { type FormEvent, useCallback, useEffect, useMemo, useState } from 'react'
import {
  adminCreateSpeaker,
  adminDeleteSpeaker,
  adminFetchSpeakers,
  adminReorderSpeakers,
  adminUpdateSpeaker,
} from '../lib/speakersApi'
import type { Speaker, SpeakerType } from '../types/speaker'

function readDefaultEditionYear(): number {
  const raw = import.meta.env.VITE_CONFERENCE_YEAR as string | undefined
  if (raw !== undefined && raw !== '') {
    const n = Number.parseInt(raw, 10)
    if (!Number.isNaN(n) && n >= 1990 && n <= 2100) return n
  }
  return 2026
}

const defaultEditionYear = readDefaultEditionYear()

const TYPE_LABELS: Record<SpeakerType, string> = {
  speaker: 'Speaker',
  guest: 'Guest',
  invitee: 'Invitee',
}

function speakerLine(s: Speaker): string {
  const parts = [s.designation, s.organization].filter(Boolean)
  return parts.length ? parts.join(' — ') : '—'
}

export function AdminSpeakers() {
  const [items, setItems] = useState<Speaker[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filterYear, setFilterYear] = useState<number | 'all'>('all')
  const [filterType, setFilterType] = useState<SpeakerType | 'all'>('all')
  const [search, setSearch] = useState('')
  const [orderDraft, setOrderDraft] = useState<Record<number, string>>({})
  const [savingOrder, setSavingOrder] = useState(false)

  const [editing, setEditing] = useState<Speaker | null>(null)
  const [createOpen, setCreateOpen] = useState(false)

  const [createName, setCreateName] = useState('')
  const [createDesignation, setCreateDesignation] = useState('')
  const [createOrganization, setCreateOrganization] = useState('')
  const [createBio, setCreateBio] = useState('')
  const [createType, setCreateType] = useState<SpeakerType>('speaker')
  const [createYear, setCreateYear] = useState(defaultEditionYear)
  const [createFeatured, setCreateFeatured] = useState(false)
  const [createSort, setCreateSort] = useState(0)
  const [createFile, setCreateFile] = useState<File | null>(null)
  const [createImageUrl, setCreateImageUrl] = useState('')
  const [createBusy, setCreateBusy] = useState(false)

  const [editName, setEditName] = useState('')
  const [editDesignation, setEditDesignation] = useState('')
  const [editOrganization, setEditOrganization] = useState('')
  const [editBio, setEditBio] = useState('')
  const [editType, setEditType] = useState<SpeakerType>('speaker')
  const [editYear, setEditYear] = useState(defaultEditionYear)
  const [editFeatured, setEditFeatured] = useState(false)
  const [editSort, setEditSort] = useState(0)
  const [editFile, setEditFile] = useState<File | null>(null)
  const [editImageUrl, setEditImageUrl] = useState('')
  const [editBusy, setEditBusy] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await adminFetchSpeakers()
      setItems(data)
      setOrderDraft({})
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load speakers')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  useEffect(() => {
    if (!editing) return
    setEditName(editing.name)
    setEditDesignation(editing.designation ?? '')
    setEditOrganization(editing.organization ?? '')
    setEditBio(editing.bio ?? '')
    setEditType(editing.type)
    setEditYear(editing.year)
    setEditFeatured(editing.is_featured)
    setEditSort(editing.sort_order)
    setEditFile(null)
    setEditImageUrl('')
  }, [editing])

  useEffect(() => {
    if (!createOpen) return
    setCreateName('')
    setCreateDesignation('')
    setCreateOrganization('')
    setCreateBio('')
    setCreateType('speaker')
    setCreateYear(defaultEditionYear)
    setCreateFeatured(false)
    setCreateSort(0)
    setCreateFile(null)
    setCreateImageUrl('')
  }, [createOpen])

  const yearOptions = useMemo(() => {
    const ys = new Set<number>()
    for (const s of items) ys.add(s.year)
    return [...ys].sort((a, b) => b - a)
  }, [items])

  const displayed = useMemo(() => {
    const q = search.trim().toLowerCase()
    return items
      .filter((s) => (filterYear === 'all' ? true : s.year === filterYear))
      .filter((s) => (filterType === 'all' ? true : s.type === filterType))
      .filter((s) => {
        if (!q) return true
        return (
          s.name.toLowerCase().includes(q) ||
          (s.designation?.toLowerCase().includes(q) ?? false) ||
          (s.organization?.toLowerCase().includes(q) ?? false) ||
          (s.bio?.toLowerCase().includes(q) ?? false)
        )
      })
      .sort((a, b) => {
        if (a.year !== b.year) return b.year - a.year
        if (a.type !== b.type) return a.type.localeCompare(b.type)
        if (a.is_featured !== b.is_featured) return a.is_featured ? -1 : 1
        if (a.sort_order !== b.sort_order) return a.sort_order - b.sort_order
        return a.name.localeCompare(b.name)
      })
  }, [items, filterYear, filterType, search])

  function orderValue(row: Speaker): string {
    return orderDraft[row.id] ?? String(row.sort_order)
  }

  async function onSavePositions() {
    const payload = displayed.map((row) => ({
      id: row.id,
      sort_order: Math.trunc(Number(orderValue(row)) || 0),
    }))
    if (payload.length === 0) return
    setSavingOrder(true)
    setError(null)
    try {
      await adminReorderSpeakers(payload)
      setOrderDraft({})
      await load()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not save order')
    } finally {
      setSavingOrder(false)
    }
  }

  async function onCreate(e: FormEvent) {
    e.preventDefault()
    if (!createFile && !createImageUrl.trim()) {
      setError('Add a portrait file or paste an image URL.')
      return
    }
    setCreateBusy(true)
    setError(null)
    try {
      const fd = new FormData()
      fd.append('name', createName)
      fd.append('designation', createDesignation)
      fd.append('organization', createOrganization)
      fd.append('bio', createBio)
      fd.append('type', createType)
      fd.append('year', String(createYear))
      fd.append('is_featured', createFeatured ? '1' : '0')
      fd.append('sort_order', String(createSort))
      if (createFile) fd.append('image', createFile)
      if (createImageUrl.trim()) fd.append('image_url', createImageUrl.trim())
      await adminCreateSpeaker(fd)
      setCreateOpen(false)
      await load()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Create failed')
    } finally {
      setCreateBusy(false)
    }
  }

  async function onUpdate(e: FormEvent) {
    e.preventDefault()
    if (!editing) return
    setEditBusy(true)
    setError(null)
    try {
      const fd = new FormData()
      fd.append('id', String(editing.id))
      fd.append('name', editName)
      fd.append('designation', editDesignation)
      fd.append('organization', editOrganization)
      fd.append('bio', editBio)
      fd.append('type', editType)
      fd.append('year', String(editYear))
      fd.append('is_featured', editFeatured ? '1' : '0')
      fd.append('sort_order', String(editSort))
      if (editFile) fd.append('image', editFile)
      if (editImageUrl.trim()) fd.append('image_url', editImageUrl.trim())
      await adminUpdateSpeaker(fd)
      setEditing(null)
      await load()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Update failed')
    } finally {
      setEditBusy(false)
    }
  }

  async function onDelete(id: number) {
    if (!window.confirm('Delete this person from the database?')) return
    setError(null)
    try {
      await adminDeleteSpeaker(id)
      if (editing?.id === id) setEditing(null)
      await load()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed')
    }
  }

  function renumberDisplayed() {
    const next: Record<number, string> = { ...orderDraft }
    displayed.forEach((row, i) => {
      next[row.id] = String(i)
    })
    setOrderDraft(next)
  }

  return (
    <div className="p-8 max-[767px]:p-5">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="m-0 font-heading text-[28px] font-bold text-primary">Speakers &amp; guests</h1>
          <p className="mt-2 max-w-[640px] text-sm text-body">
            Public site: rows with <strong>year = {defaultEditionYear}</strong> (set <code className="text-xs">VITE_CONFERENCE_YEAR</code> in{' '}
            <code className="text-xs">.env</code> to change) appear in the <strong>top</strong> section. Any <strong>earlier year</strong> appears in the{' '}
            <strong>past editions</strong> block below on the site (all types). Use <strong>type</strong> for labels; use <strong>order</strong> for sort
            within the same year.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setCreateOpen(true)}
          className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95"
        >
          + Add person
        </button>
      </div>

      {error ? (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</div>
      ) : null}

      <section className="mb-6 rounded-[16px] bg-white p-6 shadow-sm ring-1 ring-border">
        <h2 className="m-0 font-heading text-lg font-bold text-primary">Filters</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          <label className="flex min-w-[160px] flex-col gap-1 text-sm font-medium text-primary">
            Year
            <select
              value={filterYear === 'all' ? '' : String(filterYear)}
              onChange={(e) => {
                const v = e.target.value
                setFilterYear(v === '' ? 'all' : Number(v))
              }}
              className="rounded-lg border border-border px-3 py-2 text-body"
            >
              <option value="">All years</option>
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </label>
          <label className="flex min-w-[160px] flex-col gap-1 text-sm font-medium text-primary">
            Type
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as SpeakerType | 'all')}
              className="rounded-lg border border-border px-3 py-2 text-body"
            >
              <option value="all">All types</option>
              {(Object.keys(TYPE_LABELS) as SpeakerType[]).map((t) => (
                <option key={t} value={t}>
                  {TYPE_LABELS[t]}
                </option>
              ))}
            </select>
          </label>
          <label className="flex min-w-[220px] flex-1 flex-col gap-1 text-sm font-medium text-primary">
            Search
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Name, role, organization…"
              className="rounded-lg border border-border px-3 py-2 text-body"
            />
          </label>
        </div>
        <p className="mt-3 text-xs text-body">
          Tip: filter to one year and type, adjust the order column, then use <strong>Save order for visible rows</strong>{' '}
          to update only the people shown below.
        </p>
      </section>

      <section className="rounded-[16px] bg-white p-6 shadow-sm ring-1 ring-border">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="m-0 font-heading text-lg font-bold text-primary">
            Directory <span className="text-sm font-normal text-body">({displayed.length} shown)</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => renumberDisplayed()}
              className="rounded-lg border border-border bg-light-bg px-4 py-2 text-sm font-semibold text-primary hover:bg-border/40"
            >
              Renumber visible (0…n)
            </button>
            <button
              type="button"
              disabled={savingOrder || displayed.length === 0}
              onClick={() => void onSavePositions()}
              className="rounded-lg border border-secondary/40 bg-secondary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-secondary/15 disabled:opacity-50"
            >
              {savingOrder ? 'Saving…' : 'Save order for visible rows'}
            </button>
            <button
              type="button"
              onClick={() => void load()}
              className="rounded-lg border border-border bg-light-bg px-4 py-2 text-sm font-semibold text-primary hover:bg-border/40"
            >
              Refresh
            </button>
          </div>
        </div>

        {loading ? (
          <p className="mt-6 text-sm text-body">Loading…</p>
        ) : items.length === 0 ? (
          <p className="mt-6 text-sm text-body">
            No speakers yet. Run <code className="rounded bg-light-bg px-1">speakers.sql</code> on your database, then
            add people here.
          </p>
        ) : displayed.length === 0 ? (
          <p className="mt-6 text-sm text-body">No rows match these filters.</p>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wide text-body">
                  <th className="pb-3 pr-3 font-semibold">Photo</th>
                  <th className="pb-3 pr-3 font-semibold">Name</th>
                  <th className="pb-3 pr-3 font-semibold">Role / org</th>
                  <th className="pb-3 pr-3 font-semibold">Type</th>
                  <th className="pb-3 pr-3 font-semibold">Year</th>
                  <th className="pb-3 pr-3 font-semibold">Featured</th>
                  <th className="pb-3 pr-3 font-semibold">Order</th>
                  <th className="pb-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {displayed.map((row) => (
                  <tr key={row.id} className="border-b border-border/80">
                    <td className="py-3 pr-3">
                      <img src={row.image} alt="" className="h-14 w-14 rounded-full object-cover ring-1 ring-border" />
                    </td>
                    <td className="py-3 pr-3 font-semibold text-primary">{row.name}</td>
                    <td className="max-w-[240px] py-3 pr-3 text-xs text-body">{speakerLine(row)}</td>
                    <td className="py-3 pr-3 text-body">{TYPE_LABELS[row.type]}</td>
                    <td className="py-3 pr-3 text-body">{row.year}</td>
                    <td className="py-3 pr-3 text-body">{row.is_featured ? 'Yes' : '—'}</td>
                    <td className="py-3 pr-3">
                      <input
                        type="number"
                        className="w-16 rounded border border-border px-2 py-1 text-body"
                        value={orderValue(row)}
                        onChange={(e) => setOrderDraft((d) => ({ ...d, [row.id]: e.target.value }))}
                      />
                    </td>
                    <td className="py-3">
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-white"
                          onClick={() => setEditing(row)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700"
                          onClick={() => void onDelete(row.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {editing ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true">
          <div className="max-h-[92vh] w-full max-w-[520px] overflow-y-auto rounded-[16px] bg-white p-6 shadow-xl">
            <h3 className="mt-0 font-heading text-lg font-bold text-primary">Edit #{editing.id}</h3>
            <form className="mt-4 flex flex-col gap-4" onSubmit={(e) => void onUpdate(e)}>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Full name
                <input
                  required
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="rounded-lg border border-border px-3 py-2 text-body"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Designation / title
                <input
                  value={editDesignation}
                  onChange={(e) => setEditDesignation(e.target.value)}
                  className="rounded-lg border border-border px-3 py-2 text-body"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Organization
                <input
                  value={editOrganization}
                  onChange={(e) => setEditOrganization(e.target.value)}
                  className="rounded-lg border border-border px-3 py-2 text-body"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Bio <span className="font-normal text-body">(optional, long text)</span>
                <textarea
                  value={editBio}
                  onChange={(e) => setEditBio(e.target.value)}
                  rows={4}
                  className="resize-y rounded-lg border border-border px-3 py-2 text-body"
                />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                  Type
                  <select
                    value={editType}
                    onChange={(e) => setEditType(e.target.value as SpeakerType)}
                    className="rounded-lg border border-border px-3 py-2 text-body"
                  >
                    {(Object.keys(TYPE_LABELS) as SpeakerType[]).map((t) => (
                      <option key={t} value={t}>
                        {TYPE_LABELS[t]}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                  Year
                  <input
                    type="number"
                    min={1990}
                    max={2100}
                    value={editYear}
                    onChange={(e) => setEditYear(Number(e.target.value))}
                    className="rounded-lg border border-border px-3 py-2 text-body"
                  />
                </label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                  Sort order
                  <input
                    type="number"
                    value={editSort}
                    onChange={(e) => setEditSort(Number(e.target.value))}
                    className="rounded-lg border border-border px-3 py-2 text-body"
                  />
                </label>
                <label className="mt-6 flex items-center gap-2 text-sm text-body">
                  <input type="checkbox" checked={editFeatured} onChange={(e) => setEditFeatured(e.target.checked)} />
                  Featured on site
                </label>
              </div>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Replace photo <span className="font-normal text-body">(optional file)</span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={(e) => setEditFile(e.target.files?.[0] ?? null)}
                  className="text-sm text-body"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Or set image URL <span className="font-normal text-body">(optional; file takes priority if both set)</span>
                <input
                  value={editImageUrl}
                  onChange={(e) => setEditImageUrl(e.target.value)}
                  placeholder="https://…"
                  className="rounded-lg border border-border px-3 py-2 text-body"
                />
              </label>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  disabled={editBusy}
                  className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
                >
                  {editBusy ? 'Saving…' : 'Save'}
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-primary"
                  onClick={() => setEditing(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {createOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true">
          <div className="max-h-[92vh] w-full max-w-[520px] overflow-y-auto rounded-[16px] bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="mt-0 font-heading text-lg font-bold text-primary">Add person</h3>
                <p className="mt-1 text-sm text-body">Upload a portrait or paste a direct image URL.</p>
              </div>
              <button
                type="button"
                className="rounded-lg border border-border px-3 py-2 text-sm font-semibold text-primary"
                onClick={() => (createBusy ? null : setCreateOpen(false))}
              >
                Close
              </button>
            </div>

            <form className="mt-4 flex flex-col gap-4" onSubmit={(e) => void onCreate(e)}>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Full name
                <input
                  required
                  value={createName}
                  onChange={(e) => setCreateName(e.target.value)}
                  className="rounded-lg border border-border px-3 py-2 text-body"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Designation
                <input
                  value={createDesignation}
                  onChange={(e) => setCreateDesignation(e.target.value)}
                  className="rounded-lg border border-border px-3 py-2 text-body"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Organization
                <input
                  value={createOrganization}
                  onChange={(e) => setCreateOrganization(e.target.value)}
                  className="rounded-lg border border-border px-3 py-2 text-body"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Bio
                <textarea
                  value={createBio}
                  onChange={(e) => setCreateBio(e.target.value)}
                  rows={4}
                  className="resize-y rounded-lg border border-border px-3 py-2 text-body"
                />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                  Type
                  <select
                    value={createType}
                    onChange={(e) => setCreateType(e.target.value as SpeakerType)}
                    className="rounded-lg border border-border px-3 py-2 text-body"
                  >
                    {(Object.keys(TYPE_LABELS) as SpeakerType[]).map((t) => (
                      <option key={t} value={t}>
                        {TYPE_LABELS[t]}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                  Year
                  <input
                    type="number"
                    min={1990}
                    max={2100}
                    value={createYear}
                    onChange={(e) => setCreateYear(Number(e.target.value))}
                    className="rounded-lg border border-border px-3 py-2 text-body"
                  />
                </label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                  Sort order
                  <input
                    type="number"
                    value={createSort}
                    onChange={(e) => setCreateSort(Number(e.target.value))}
                    className="rounded-lg border border-border px-3 py-2 text-body"
                  />
                </label>
                <label className="mt-6 flex items-center gap-2 text-sm text-body">
                  <input type="checkbox" checked={createFeatured} onChange={(e) => setCreateFeatured(e.target.checked)} />
                  Featured on site
                </label>
              </div>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Portrait file
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={(e) => setCreateFile(e.target.files?.[0] ?? null)}
                  className="text-sm text-body"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Image URL <span className="font-normal text-body">(if no file)</span>
                <input
                  value={createImageUrl}
                  onChange={(e) => setCreateImageUrl(e.target.value)}
                  placeholder="https://…"
                  className="rounded-lg border border-border px-3 py-2 text-body"
                />
              </label>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  disabled={createBusy}
                  className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95 disabled:opacity-60"
                >
                  {createBusy ? 'Saving…' : 'Create'}
                </button>
                <button
                  type="button"
                  disabled={createBusy}
                  className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-primary disabled:opacity-60"
                  onClick={() => setCreateOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}
