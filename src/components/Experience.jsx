import experience from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-border py-20 sm:py-28">
      <div className="section-shell">
        <p className="eyebrow mb-3">// 04 — experience</p>
        <h2 className="mb-10 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          Applied training, not just coursework
        </h2>

        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-ink-border bg-ink-surface p-7 sm:p-9"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-paper">{item.title}</h3>
                  <p className="mt-1 font-mono text-xs text-paper-faint">
                    {item.duration} · {item.mode}
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-paper-muted">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-ink-border bg-ink-raised px-2.5 py-1 font-mono text-[12px] text-paper"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}