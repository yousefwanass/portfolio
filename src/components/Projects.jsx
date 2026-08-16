import { useMemo, useState } from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeProject, setActiveProject] = useState(null)

  const filters = useMemo(() => {
    const set = new Set()
    projects.forEach((p) => p.tools.forEach((t) => set.add(t)))
    return ['All', ...Array.from(set).sort()]
  }, [])

  const visibleProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.tools.includes(activeFilter))

  return (
    <section id="projects" className="border-t border-ink-border py-20 sm:py-28">
      <div className="section-shell">
        <p className="eyebrow mb-3">// 03 — featured work</p>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            Case studies, not screenshots
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-[12.5px] transition-colors ${
                activeFilter === f
                  ? 'border-signal-teal bg-signal-teal/10 text-signal-teal'
                  : 'border-ink-border text-paper-muted hover:border-signal-teal/40 hover:text-paper'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenCaseStudy={setActiveProject} />
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="py-12 text-center font-mono text-sm text-paper-faint">
            No projects use this tool yet.
          </p>
        )}
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}
