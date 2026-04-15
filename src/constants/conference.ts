/**
 * “Current edition” on the Speakers page (top grid). Everyone with a lower `year` appears in the past-editions block below.
 * Override in `.env`: `VITE_CONFERENCE_YEAR=2026`
 */
function readConferenceYear(): number {
  const raw = import.meta.env.VITE_CONFERENCE_YEAR as string | undefined
  if (raw !== undefined && raw !== '') {
    const n = Number.parseInt(raw, 10)
    if (!Number.isNaN(n) && n >= 1990 && n <= 2100) return n
  }
  return 2026
}

export const CONFERENCE_YEAR = readConferenceYear()
