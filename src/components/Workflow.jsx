const STEPS = [
  { label: 'Raw Data', detail: 'Pull from SQL, CSVs, or exports' },
  { label: 'Data Cleaning', detail: 'Nulls, duplicates, types, outliers' },
  { label: 'SQL Extraction', detail: 'Join, filter, aggregate at the source' },
  { label: 'Exploratory Analysis', detail: 'Pandas + statistics to find patterns' },
  { label: 'Visualization', detail: 'Matplotlib / Seaborn for exploration' },
  { label: 'Dashboard', detail: 'Power BI / Excel for stakeholders' },
  { label: 'Business Insights', detail: 'What the numbers actually mean' },
  { label: 'Recommendations', detail: 'What to do about it' },
]

export default function Workflow() {
  return (
    <section className="border-t border-ink-border py-20 sm:py-28">
      <div className="section-shell">
        <p className="eyebrow mb-3">// how I work</p>
        <h2 className="mb-12 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          The same pipeline, every project
        </h2>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ink-border bg-ink-border sm:grid-cols-4">
          {STEPS.map((step, idx) => (
            <div key={step.label} className="relative bg-ink-surface p-5">
              <span className="font-mono text-[11px] text-signal-teal">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p className="mt-2 font-display text-[15px] font-medium text-paper">{step.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-paper-faint">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
