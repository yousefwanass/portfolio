import { useEffect, useState } from 'react'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import siteConfig from '../data/siteConfig'

const QUERY = `SELECT city, SUM(revenue) AS total_revenue
FROM orders
GROUP BY city
ORDER BY total_revenue DESC;`

const RESULT_ROWS = [
  { city: 'Cairo', revenue: '38.2K' },
  { city: 'Giza', revenue: '21.4K' },
  { city: 'Alexandria', revenue: '17.9K' },
]

function useTypedQuery(text) {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setTyped(text)
      setDone(true)
      return
    }
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTyped(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        setTimeout(() => setDone(true), 250)
      }
    }, 22)
    return () => clearInterval(interval)
  }, [text])

  return { typed, done }
}

export default function Hero() {
  const { typed, done } = useTypedQuery(QUERY)

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        {/* Left: thesis */}
        <div>
          <p className="eyebrow mb-5">// junior data analyst</p>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-paper-muted sm:text-xl">
            {siteConfig.statement}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-signal-teal px-5 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              View My Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-ink-border px-5 py-3 font-mono text-sm text-paper transition-colors hover:border-signal-teal/50 hover:text-signal-teal"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 border-t border-ink-border pt-6">
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-paper-muted transition-colors hover:text-signal-teal"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-paper-muted transition-colors hover:text-signal-teal"
            >
              <Github size={19} />
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              aria-label="Send an email"
              className="text-paper-muted transition-colors hover:text-signal-teal"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>

        {/* Right: signature — live query console resolving into a result */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-ink-border bg-ink-surface shadow-glow">
            <div className="flex items-center gap-2 border-b border-ink-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-signal-rose/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal-teal/60" />
              <span className="ml-3 font-mono text-xs text-paper-faint">query.sql</span>
            </div>

            <pre className="whitespace-pre-wrap px-5 py-5 font-mono text-[13px] leading-relaxed text-paper">
              <span className="text-signal-teal">{typed}</span>
              {!done && <span className="caret">▍</span>}
            </pre>

            <div
              className={`border-t border-ink-border px-5 py-4 transition-opacity duration-700 ${
                done ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="mb-3 font-mono text-xs text-paper-faint">→ result set</p>
              <div className="space-y-2">
                {RESULT_ROWS.map((row, idx) => (
                  <div
                    key={row.city}
                    className={`flex items-center justify-between rounded-md bg-ink-raised px-3 py-2 ${
                      done ? 'rise-fade' : ''
                    }`}
                    style={{ animationDelay: `${idx * 120}ms` }}
                  >
                    <span className="font-body text-sm text-paper">{row.city}</span>
                    <span className="font-mono text-sm text-signal-amber">{row.revenue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-xs text-paper-faint">
            illustrative query — see live dashboards in Featured Projects
          </p>
        </div>
      </div>
    </section>
  )
}
