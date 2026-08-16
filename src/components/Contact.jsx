import { useState } from 'react'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import siteConfig from '../data/siteConfig'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a recruiter'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${siteConfig.links.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="border-t border-ink-border py-20 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-3">// 06 — contact</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            Let's talk about your data
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-paper-muted">
            Open to Junior Data Analyst and Data Analyst Intern roles. The fastest way to reach me
            is email — happy to walk through any project in more depth.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="flex items-center gap-3 font-mono text-sm text-paper transition-colors hover:text-signal-teal"
            >
              <Mail size={16} className="text-signal-teal" />
              {siteConfig.links.email}
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 font-mono text-sm text-paper transition-colors hover:text-signal-teal"
            >
              <Linkedin size={16} className="text-signal-teal" />
              LinkedIn
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 font-mono text-sm text-paper transition-colors hover:text-signal-teal"
            >
              <Github size={16} className="text-signal-teal" />
              GitHub
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-paper-faint">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md border border-ink-border bg-ink-surface px-3.5 py-2.5 text-sm text-paper outline-none placeholder:text-paper-faint focus:border-signal-teal/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-paper-faint">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md border border-ink-border bg-ink-surface px-3.5 py-2.5 text-sm text-paper outline-none placeholder:text-paper-faint focus:border-signal-teal/50"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-paper-faint">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-md border border-ink-border bg-ink-surface px-3.5 py-2.5 text-sm text-paper outline-none placeholder:text-paper-faint focus:border-signal-teal/50"
              placeholder="Let's talk about a role..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-signal-teal px-5 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Send Message
            <Send size={15} />
          </button>
          <p className="font-mono text-[11px] text-paper-faint">
            Opens your email client with this message pre-filled — no data is stored.
          </p>
        </form>
      </div>
    </section>
  )
}
