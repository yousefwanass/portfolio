import { Download, FileText } from 'lucide-react'
import siteConfig from '../data/siteConfig'

export default function Resume() {
  return (
    <section id="resume" className="border-t border-ink-border py-20 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col items-start justify-between gap-8 rounded-lg border border-ink-border bg-ink-surface p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="flex items-start gap-4">
            <div className="rounded-md border border-ink-border bg-ink-raised p-3 text-signal-teal">
              <FileText size={22} />
            </div>
            <div>
              <p className="eyebrow mb-1">// 05 — resume</p>
              <h2 className="font-display text-2xl font-semibold text-paper">
                Full breakdown, one PDF
              </h2>
              <p className="mt-1 max-w-md text-sm text-paper-muted">
                Role history, tools, and every project listed here — ATS-friendly and one page.
              </p>
            </div>
          </div>

          <div className="flex flex-shrink-0 gap-3">
            <a
              href={siteConfig.resume.pdfPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink-border px-4 py-2.5 font-mono text-[13px] text-paper transition-colors hover:border-signal-teal/50 hover:text-signal-teal"
            >
              View Resume
            </a>
            <a
              href={siteConfig.resume.pdfPath}
              download
              className="inline-flex items-center gap-2 rounded-md bg-signal-teal px-4 py-2.5 font-mono text-[13px] font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
