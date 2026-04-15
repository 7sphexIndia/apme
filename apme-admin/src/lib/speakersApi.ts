import type { Speaker } from '../types/speaker'
import { apiFetch } from './api'

export async function adminFetchSpeakers(): Promise<Speaker[]> {
  const res = await apiFetch('/api/speakers_admin.php', { method: 'GET' })
  const json = (await res.json().catch(() => ({}))) as { data?: Speaker[]; error?: string }
  if (!res.ok) throw new Error(json.error ?? `HTTP ${res.status}`)
  if (json.error) throw new Error(json.error)
  return json.data ?? []
}

export async function adminCreateSpeaker(form: FormData): Promise<Speaker> {
  form.set('action', 'create')
  const res = await apiFetch('/api/speakers_admin.php', { method: 'POST', body: form })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error((json as { error?: string }).error ?? `HTTP ${res.status}`)
  return (json as { item: Speaker }).item
}

export async function adminUpdateSpeaker(form: FormData): Promise<Speaker> {
  form.set('action', 'update')
  const res = await apiFetch('/api/speakers_admin.php', { method: 'POST', body: form })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error((json as { error?: string }).error ?? `HTTP ${res.status}`)
  return (json as { item: Speaker }).item
}

export async function adminDeleteSpeaker(id: number): Promise<void> {
  const res = await apiFetch('/api/speakers_admin.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'delete', id }),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error((json as { error?: string }).error ?? `HTTP ${res.status}`)
}

export async function adminReorderSpeakers(items: { id: number; sort_order: number }[]): Promise<void> {
  const res = await apiFetch('/api/speakers_admin.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'reorder', items }),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error((json as { error?: string }).error ?? `HTTP ${res.status}`)
}
