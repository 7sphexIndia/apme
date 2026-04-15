import type { Speaker } from '../types/speaker'
import { apiUrl } from './api'

export async function fetchSpeakersPublic(): Promise<Speaker[]> {
  const res = await fetch(apiUrl('/api/speakers.php'))
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `Speakers HTTP ${res.status}`)
  }
  const json = (await res.json()) as { data?: Speaker[]; error?: string }
  if (json.error) throw new Error(json.error)
  return json.data ?? []
}
