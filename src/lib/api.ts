const ADMIN_TOKEN_KEY = 'apme_admin_token'

export function getApiBase(): string {
  const env = import.meta.env.VITE_API_BASE_URL as string | undefined
  if (env !== undefined && env !== '') {
    return env.replace(/\/$/, '')
  }
  if (import.meta.env.DEV) {
    return '/apme-api'
  }
  return ''
}

export function apiUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  const b = getApiBase()
  return b ? `${b}${p}` : p
}

export function getAdminToken(): string | null {
  try {
    return sessionStorage.getItem(ADMIN_TOKEN_KEY)
  } catch {
    return null
  }
}

export function setAdminToken(token: string) {
  sessionStorage.setItem(ADMIN_TOKEN_KEY, token)
}

export function clearAdminToken() {
  sessionStorage.removeItem(ADMIN_TOKEN_KEY)
}

export async function apiFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const token = getAdminToken()
  const headers = new Headers(init.headers)
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }
  return fetch(apiUrl(path), { ...init, headers })
}
