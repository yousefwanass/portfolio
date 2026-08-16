import skillGroups from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink-border py-20 sm:py-28">
      <div className="section-shell">
        <p className="eyebrow mb-3">// 02 — skills</p>
        <h2 className="mb-12 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          Tools I use to get from data to decision
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-ink-border bg-ink-surface p-6 transition-colors hover:border-signal-teal/40"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-paper-faint">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-ink-border bg-ink-raised px-2.5 py-1 font-mono text-[12.5px] text-paper"
                  >
                    {item}
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
