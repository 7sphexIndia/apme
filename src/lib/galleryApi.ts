import type { GalleryItem } from '../types/gallery'
import { apiFetch, apiUrl } from './api'

export async function fetchGalleryPublic(): Promise<GalleryItem[]> {
  const res = await fetch(apiUrl('/api/gallery.php'))
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `Gallery HTTP ${res.status}`)
  }
  const json = (await res.json()) as { data?: GalleryItem[]; error?: string }
  if (json.error) throw new Error(json.error)
  return json.data ?? []
}

export async function adminCreateGalleryItem(form: FormData): Promise<GalleryItem> {
  form.set('action', 'create')
  const res = await apiFetch('/api/gallery_admin.php', { method: 'POST', body: form })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error((json as { error?: string }).error ?? `HTTP ${res.status}`)
  return (json as { item: GalleryItem }).item
}

export async function adminUpdateGalleryItem(form: FormData): Promise<GalleryItem> {
  form.set('action', 'update')
  const res = await apiFetch('/api/gallery_admin.php', { method: 'POST', body: form })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error((json as { error?: string }).error ?? `HTTP ${res.status}`)
  return (json as { item: GalleryItem }).item
}

export async function adminDeleteGalleryItem(id: number): Promise<void> {
  const res = await apiFetch('/api/gallery_admin.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'delete', id }),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error((json as { error?: string }).error ?? `HTTP ${res.status}`)
}

export async function adminLogin(email: string, password: string): Promise<string> {
  const res = await fetch(apiUrl('/auth/login.php'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.trim(), password }),
  })

  const json = (await res.json().catch(() => ({}))) as { error?: string; token?: string }

  if (!res.ok) {
    throw new Error(json.error ?? 'Invalid email or password')
  }

  const token = json.token
  if (!token) throw new Error(json.error ?? 'Invalid email or password')
  return token
}

export async function adminLogout(): Promise<void> {
  await apiFetch('/auth/logout.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{}',
  }).catch(() => {})
}
