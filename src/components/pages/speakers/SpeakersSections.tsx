import { type ReactNode, useEffect, useMemo, useState } from 'react'
import Container from '../../common/Container'
import { CONFERENCE_YEAR } from '../../../constants/conference'
import { fetchSpeakersPublic } from '../../../lib/speakersApi'
import type { Speaker } from '../../../types/speaker'

function compareSpeakers(a: Speaker, b: Speaker): number {
  if (a.is_featured !== b.is_featured) return a.is_featured ? -1 : 1
  if (a.sort_order !== b.sort_order) return a.sort_order - b.sort_order
  return a.name.localeCompare(b.name)
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <article className="hover-card speakers-hover-card rounded-2xl ring-1 ring-border/80">
      <div className="aspect-[4/5] w-full overflow-hidden bg-light-bg">
        <img
          src={speaker.image}
          alt=""
          className="hover-card-media h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="m-0 font-heading text-base font-bold leading-snug text-primary">{speaker.name}</h3>
        {speaker.bio ? (
          <p className="m-0 line-clamp-4 text-sm leading-relaxed text-body">{speaker.bio}</p>
        ) : null}
      </div>
    </article>
  )
}

function SectionBadge({ children, variant }: { children: ReactNode; variant: 'accent' | 'muted' }) {
  const cls =
    variant === 'accent'
      ? 'bg-secondary/15 text-secondary ring-secondary/25'
      : 'bg-primary/8 text-primary ring-primary/15'
  return (
    <span
      className={[
        'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] ring-1',
        cls,
      ].join(' ')}
    >
      <img src="/img/speaker-icon.svg" alt="" className="h-3.5 w-3.5 opacity-80" />
      {children}
    </span>
  )
}

export function SpeakersSections() {
  const [rows, setRows] = useState<Speaker[]>([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      setLoading(true)
      setErr(null)
      try {
        const data = await fetchSpeakersPublic()
        if (!cancelled) setRows(data)
      } catch (e) {
        if (!cancelled) setErr(e instanceof Error ? e.message : 'Could not load speakers')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const currentEdition = useMemo(() => {
    return rows.filter((s) => s.year === CONFERENCE_YEAR).sort(compareSpeakers)
  }, [rows])

  /** Any year strictly before the current edition (all types: speaker, guest, invitee). */
  const pastEditionsByYear = useMemo(() => {
    const past = rows.filter((s) => s.year < CONFERENCE_YEAR).sort(compareSpeakers)
    const map = new Map<number, Speaker[]>()
    for (const s of past) {
      const list = map.get(s.year) ?? []
      list.push(s)
      map.set(s.year, list)
    }
    const years = [...map.keys()].sort((a, b) => b - a)
    return years.map((year) => ({ year, people: map.get(year) ?? [] }))
  }, [rows])

  if (loading) {
    return (
      <section className="bg-light-bg py-[50px] md:py-[80px]">
        <Container>
          <p className="m-0 text-center text-sm text-body">Loading speakers…</p>
        </Container>
      </section>
    )
  }

  if (err) {
    return (
      <section className="bg-light-bg py-[50px] md:py-[80px]">
        <Container>
          <p className="m-0 text-center text-sm text-red-700">{err}</p>
        </Container>
      </section>
    )
  }

  return (
    <>
      <section className="bg-light-bg py-[50px] md:py-[80px]">
        <Container>
          <div className="mx-auto max-w-[1100px] text-center">
            <div className="flex justify-center">
              <SectionBadge variant="accent">Invitees</SectionBadge>
            </div>
            <h2 className="mt-6 font-heading text-3xl font-bold text-primary md:text-[40px] md:leading-tight">
              Guests and <span className="text-secondary">Speakers</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[820px] text-base leading-relaxed text-body md:text-lg">
              Distinguished researchers and thought leaders who have shared their expertise at our conferences.
            </p>
          </div>

          {currentEdition.length === 0 ? (
            <p className="mt-14 text-center text-sm text-body">Speaker profiles for {CONFERENCE_YEAR} will appear here soon.</p>
          ) : (
            <div className="mx-auto mt-14 grid max-w-[1280px] grid-cols-2 gap-5 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
              {currentEdition.map((s) => (
                <SpeakerCard key={s.id} speaker={s} />
              ))}
            </div>
          )}
        </Container>
      </section>

      {pastEditionsByYear.length > 0 ? (
        <section className="bg-white py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-[1100px] text-center">
              <div className="flex justify-center">
                <SectionBadge variant="muted">Past editions</SectionBadge>
              </div>
              <h2 className="mt-6 font-heading text-3xl font-bold text-primary md:text-[40px] md:leading-tight">
                Previous <span className="text-secondary">Invitees</span>
              </h2>
              <p className="mx-auto mt-4 max-w-[720px] text-base leading-relaxed text-body">
                Speakers, guests, and invitees from earlier APME editions.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-[1280px] space-y-16">
              {pastEditionsByYear.map(({ year, people }) => (
                <div key={year}>
                  <h3 className="m-0 border-b border-border pb-3 font-heading text-lg font-bold text-primary">APME {year}</h3>
                  <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
                    {people.map((s) => (
                      <SpeakerCard key={s.id} speaker={s} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  )
}
