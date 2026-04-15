import { type FormEvent, useCallback, useEffect, useState } from 'react'
import {
  adminCreateGalleryItem,
  adminDeleteGalleryItem,
  adminUpdateGalleryItem,
  fetchGalleryPublic,
} from '../lib/galleryApi'
import type { GalleryItem } from '../types/gallery'

const currentYear = new Date().getFullYear()

function isVideoUrl(url: string) {
  return /\.(mp4|webm)(\?|#|$)/i.test(url)
}

export function AdminGallery() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editing, setEditing] = useState<GalleryItem | null>(null)
  const [createOpen, setCreateOpen] = useState(false)

  const [createTitle, setCreateTitle] = useState('')
  const [createYear, setCreateYear] = useState(currentYear)
  const [createFile, setCreateFile] = useState<File | null>(null)
  const [createThumb, setCreateThumb] = useState<File | null>(null)
  const [createBusy, setCreateBusy] = useState(false)

  const [editTitle, setEditTitle] = useState('')
  const [editYear, setEditYear] = useState(currentYear)
  const [editFile, setEditFile] = useState<File | null>(null)
  const [editThumb, setEditThumb] = useState<File | null>(null)
  const [editClearThumb, setEditClearThumb] = useState(false)
  const [editBusy, setEditBusy] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchGalleryPublic()
      setItems(data)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load gallery')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  useEffect(() => {
    if (!editing) return
    setEditTitle(editing.title ?? '')
    setEditYear(editing.year)
    setEditFile(null)
    setEditThumb(null)
    setEditClearThumb(false)
  }, [editing])

  useEffect(() => {
    if (!createOpen) return
    setCreateTitle('')
    setCreateYear(currentYear)
    setCreateFile(null)
    setCreateThumb(null)
  }, [createOpen])

  async function onCreate(e: FormEvent) {
    e.preventDefault()
    if (!createFile) {
      setError('Choose a main image or video file.')
      return
    }
    setCreateBusy(true)
    setError(null)
    try {
      const fd = new FormData()
      fd.append('title', createTitle)
      fd.append('year', String(createYear))
      fd.append('image', createFile)
      if (createThumb) fd.append('thumbnail', createThumb)
      await adminCreateGalleryItem(fd)
      setCreateTitle('')
      setCreateYear(currentYear)
      setCreateFile(null)
      setCreateThumb(null)
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
      fd.append('title', editTitle)
      fd.append('year', String(editYear))
      if (editFile) fd.append('image', editFile)
      if (editThumb) fd.append('thumbnail', editThumb)
      if (editClearThumb) fd.append('clear_thumbnail', '1')
      await adminUpdateGalleryItem(fd)
      setEditing(null)
      await load()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Update failed')
    } finally {
      setEditBusy(false)
    }
  }

  async function onDelete(id: number) {
    if (!window.confirm('Delete this gallery item?')) return
    setError(null)
    try {
      await adminDeleteGalleryItem(id)
      if (editing?.id === id) setEditing(null)
      await load()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed')
    }
  }

  return (
    <div className="p-8 max-[767px]:p-5">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="m-0 font-heading text-[28px] font-bold text-primary">Gallery</h1>
          <p className="mt-2 text-sm text-body">
            Upload images or short MP4/WebM clips. Entries appear on the public Gallery page.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setCreateOpen(true)}
          className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95"
        >
          + Add item
        </button>
      </div>

      {error ? (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</div>
      ) : null}

      <section className="rounded-[16px] bg-white p-6 shadow-sm ring-1 ring-border">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="m-0 font-heading text-lg font-bold text-primary">All items</h2>
          <button
            type="button"
            onClick={() => void load()}
            className="rounded-lg border border-border bg-light-bg px-4 py-2 text-sm font-semibold text-primary hover:bg-border/40"
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <p className="mt-6 text-sm text-body">Loading…</p>
        ) : items.length === 0 ? (
          <p className="mt-6 text-sm text-body">No rows yet. Add one above.</p>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wide text-body">
                  <th className="pb-3 pr-4 font-semibold">Preview</th>
                  <th className="pb-3 pr-4 font-semibold">Title</th>
                  <th className="pb-3 pr-4 font-semibold">Year</th>
                  <th className="pb-3 pr-4 font-semibold">Created</th>
                  <th className="pb-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((row) => (
                  <tr key={row.id} className="border-b border-border/80">
                    <td className="py-3 pr-4">
                      {isVideoUrl(row.image) ? (
                        <div className="flex h-14 w-20 items-center justify-center rounded bg-primary/10 text-[10px] font-bold text-primary">
                          VIDEO
                        </div>
                      ) : (
                        <img
                          src={row.thumbnail ?? row.image}
                          alt=""
                          className="h-14 w-20 rounded object-cover"
                        />
                      )}
                    </td>
                    <td className="py-3 pr-4 text-primary">{row.title ?? '—'}</td>
                    <td className="py-3 pr-4 text-body">{row.year}</td>
                    <td className="py-3 pr-4 text-body">{row.created_at?.slice(0, 10) ?? '—'}</td>
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
          <div className="max-h-[90vh] w-full max-w-[480px] overflow-y-auto rounded-[16px] bg-white p-6 shadow-xl">
            <h3 className="mt-0 font-heading text-lg font-bold text-primary">Edit item #{editing.id}</h3>
            <form className="mt-4 flex flex-col gap-4" onSubmit={(e) => void onUpdate(e)}>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Title
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="rounded-lg border border-border px-3 py-2 text-body"
                />
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
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Replace image/video <span className="font-normal text-body">(optional)</span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm"
                  onChange={(e) => setEditFile(e.target.files?.[0] ?? null)}
                  className="text-sm text-body"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Replace thumbnail <span className="font-normal text-body">(optional)</span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={(e) => setEditThumb(e.target.files?.[0] ?? null)}
                  className="text-sm text-body"
                />
              </label>
              <label className="flex items-center gap-2 text-sm text-body">
                <input
                  type="checkbox"
                  checked={editClearThumb}
                  onChange={(e) => setEditClearThumb(e.target.checked)}
                />
                Remove thumbnail
              </label>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  disabled={editBusy}
                  className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
                >
                  {editBusy ? 'Saving…' : 'Save changes'}
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
          <div className="max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-[16px] bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="mt-0 font-heading text-lg font-bold text-primary">Add item</h3>
                <p className="mt-1 text-sm text-body">Upload an image (or MP4/WebM) and optional thumbnail.</p>
              </div>
              <button
                type="button"
                className="rounded-lg border border-border px-3 py-2 text-sm font-semibold text-primary"
                onClick={() => (createBusy ? null : setCreateOpen(false))}
              >
                Close
              </button>
            </div>

            <form className="mt-4 grid gap-4" onSubmit={(e) => void onCreate(e)}>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Title <span className="font-normal text-body">(optional)</span>
                <input
                  value={createTitle}
                  onChange={(e) => setCreateTitle(e.target.value)}
                  className="rounded-lg border border-border px-3 py-2 text-body"
                />
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
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Image or video
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm"
                  onChange={(e) => setCreateFile(e.target.files?.[0] ?? null)}
                  className="text-sm text-body"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm font-medium text-primary">
                Thumbnail <span className="font-normal text-body">(optional, e.g. poster for video)</span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={(e) => setCreateThumb(e.target.files?.[0] ?? null)}
                  className="text-sm text-body"
                />
              </label>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  disabled={createBusy}
                  className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95 disabled:opacity-60"
                >
                  {createBusy ? 'Saving…' : 'Publish item'}
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
