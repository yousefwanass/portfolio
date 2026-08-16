import { useEffect } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'

function Section({ eyebrow, title, children }) {
  return (
    <div className="border-t border-ink-border py-8 first:border-t-0 first:pt-0">
      <p className="eyebrow mb-2">{eyebrow}</p>
      <h3 className="mb-4 font-display text-xl font-semibold text-paper">{title}</h3>
      {children}
    </div>
  )
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/80 px-4 py-8 backdrop-blur-sm sm:py-16"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-xl border border-ink-border bg-ink-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 rounded-t-xl border-b border-ink-border bg-ink-surface px-6 py-5 sm:px-8">
          <div>
            <p className="eyebrow mb-1">case study</p>
            <h2 className="font-display text-2xl font-semibold text-paper">{project.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="rounded-md p-1.5 text-paper-muted transition-colors hover:bg-ink-raised hover:text-paper"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-5 px-6 sm:px-8">
          <Section eyebrow="the problem" title="Business Problem">
            <p className="text-[15px] leading-relaxed text-paper-muted">{project.businessProblem}</p>
          </Section>

          <Section eyebrow="the data" title="Dataset">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-4">
              <div>
                <dt className="font-mono text-xs text-paper-faint">Source</dt>
                <dd className="mt-1 text-paper-muted">{project.dataset.source}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-paper-faint">Records</dt>
                <dd className="mt-1 text-paper-muted">{project.dataset.records}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-paper-faint">Columns</dt>
                <dd className="mt-1 text-paper-muted">{project.dataset.columns}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-paper-faint">Main tables</dt>
                <dd className="mt-1 text-paper-muted">{project.dataset.mainTables}</dd>
              </div>
            </dl>
          </Section>

          {project.dataCleaning?.length > 0 && (
            <Section eyebrow="preparation" title="Data Cleaning">
              <ul className="space-y-2.5">
                {project.dataCleaning.map((line) => (
                  <li key={line} className="flex gap-2.5 text-[15px] leading-relaxed text-paper-muted">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-signal-teal" />
                    {line}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {project.analysis?.length > 0 && (
            <Section eyebrow="the work" title="Analysis">
              <ul className="space-y-2.5">
                {project.analysis.map((line) => (
                  <li key={line} className="flex gap-2.5 text-[15px] leading-relaxed text-paper-muted">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-signal-teal" />
                    {line}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {project.sqlHighlights?.length > 0 && (
            <Section eyebrow="query layer" title="SQL Analysis">
              <div className="space-y-4">
                {project.sqlHighlights.map((q) => (
                  <div key={q.label} className="overflow-hidden rounded-md border border-ink-border">
                    <div className="border-b border-ink-border bg-ink-raised px-4 py-2 font-mono text-xs text-paper-faint">
                      {q.label}
                    </div>
                    <pre className="overflow-x-auto bg-ink px-4 py-4 font-mono text-[12.5px] leading-relaxed text-signal-teal">
                      {q.code}
                    </pre>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {project.pythonHighlights?.length > 0 && (
            <Section eyebrow="scripting layer" title="Python Analysis">
              <ul className="space-y-2.5">
                {project.pythonHighlights.map((line) => (
                  <li key={line} className="flex gap-2.5 text-[15px] leading-relaxed text-paper-muted">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-signal-amber" />
                    {line}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <Section eyebrow="reporting layer" title="Dashboard">
            {project.dashboardImages?.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {project.dashboardImages.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${project.title} dashboard screenshot`}
                    className="rounded-md border border-ink-border"
                  />
                ))}
              </div>
            ) : (
              <p className="rounded-md border border-dashed border-ink-border px-4 py-6 text-center font-mono text-xs text-paper-faint">
                add dashboard screenshots to dashboardImages in projects.js
              </p>
            )}
          </Section>

          <Section eyebrow="findings" title="Key Business Insights">
            <ol className="space-y-3">
              {project.insights.map((insight, idx) => (
                <li key={insight} className="flex gap-3">
                  <span className="mt-0.5 font-mono text-xs text-signal-amber">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15px] leading-relaxed text-paper-muted">{insight}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section eyebrow="so what" title="Business Recommendations">
            <ul className="space-y-2.5">
              {project.recommendations.map((line) => (
                <li key={line} className="flex gap-2.5 text-[15px] leading-relaxed text-paper-muted">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-signal-teal" />
                  {line}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center gap-3 rounded-b-xl border-t border-ink-border px-6 py-5 sm:px-8">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-ink-border px-4 py-2 font-mono text-[13px] text-paper transition-colors hover:border-signal-teal/50 hover:text-signal-teal"
            >
              <Github size={14} />
              View Code
            </a>
          )}
          {project.dashboardUrl && (
            <a
              href={project.dashboardUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-signal-teal px-4 py-2 font-mono text-[13px] text-ink transition-transform hover:-translate-y-0.5"
            >
              <ExternalLink size={14} />
              Live Dashboard
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
