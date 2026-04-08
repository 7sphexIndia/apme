import { useEffect, useRef, useState } from 'react'
import Container from '../../common/Container'
import { Pad } from '../../common/Pad'

interface StatItem {
  value: number
  label: string
  suffix?: string
}

const stats: StatItem[] = [
  { value: 400, label: 'Innovative Research Presentations' },
  { value: 60, label: 'Countries Represented' },
  { value: 2000, label: 'Total Attendees' },
  { value: 20, label: 'Keynote Speakers' },
]

export function StatsSection() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-primary py-[80px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={[
                  'relative flex flex-col items-center text-center px-5 py-10',
                  // vertical divider: 140px tall, centered
                  idx !== 0
                    ? 'lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:h-[140px] lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-white/10'
                    : '',
                  idx % 2 !== 0
                    ? 'md:max-lg:before:absolute md:max-lg:before:left-0 md:max-lg:before:top-1/2 md:max-lg:before:h-[140px] md:max-lg:before:w-px md:max-lg:before:-translate-y-1/2 md:max-lg:before:bg-white/10'
                    : '',
                ].join(' ')}
              >
                <div className="font-heading text-[50px] font-bold leading-none text-white max-[991px]:text-[48px]">
                  <Counter end={stat.value} inView={inView} />
                  <span className="text-secondary">{stat.suffix || '+'}</span>
                </div>
                <div className="mt-4 max-w-[300px] text-[16px] font-medium uppercase text-white opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Pad>
    </section>
  )
}

function Counter({ end, inView, duration = 2000 }: { end: number; inView: boolean; duration?: number }) {
  const [count, setCount] = useState(0)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return

    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = timestamp - startTimeRef.current
      const percentage = Math.min(progress / duration, 1)

      // Easing function: easeOutQuad
      const easing = percentage * (2 - percentage)
      const currentCount = Math.floor(easing * end)

      setCount(currentCount)

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [inView, end, duration])

  return <>{count.toLocaleString()}</>
}
