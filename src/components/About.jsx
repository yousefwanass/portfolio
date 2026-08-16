import siteConfig from '../data/siteConfig'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-shell">
        <p className="eyebrow mb-3">// 01 — about</p>
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            From raw tables
            <br />
            to real decisions.
          </h2>
          <div className="max-w-2xl space-y-5">
            {siteConfig.aboutParagraphs.map((p) => (
              <p key={p} className="text-balance text-[17px] leading-relaxed text-paper-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
