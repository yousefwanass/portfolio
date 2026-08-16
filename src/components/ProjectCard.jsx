import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <article className="group flex flex-col rounded-lg border border-ink-border bg-ink-surface transition-all hover:-translate-y-1 hover:border-signal-teal/50 hover:shadow-glow">
      {/* Dashboard preview */}
      <div className="flex aspect-[16/10] items-center justify-center border-b border-ink-border bg-ink-raised">
        {project.dashboardImages?.[0] ? (
          <img
            src={project.dashboardImages[0]}
            alt={`${project.title} dashboard preview`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-mono text-xs text-paper-faint">dashboard preview — add image</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-paper">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-paper-muted">{project.tagline}</p>

        <p className="mt-4 text-sm leading-relaxed text-paper-muted">
          <span className="font-mono text-xs uppercase tracking-wider text-paper-faint">
            Business problem —{' '}
          </span>
          {project.businessProblem}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded border border-ink-border px-2 py-0.5 font-mono text-[11px] text-paper-muted"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-ink-border pt-5">
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1.5 font-mono text-[13px] text-signal-teal transition-colors hover:text-paper"
          >
            View Case Study
            <ArrowUpRight size={14} />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-ink-border px-3 py-1.5 font-mono text-[12.5px] text-paper-muted transition-colors hover:border-signal-teal/40 hover:text-paper"
            >
              <Github size={13} />
              Code
            </a>
          )}
          {project.dashboardUrl && (
            <a
              href={project.dashboardUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-ink-border px-3 py-1.5 font-mono text-[12.5px] text-paper-muted transition-colors hover:border-signal-teal/40 hover:text-paper"
            >
              <ExternalLink size={13} />
              Live Dashboard
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
