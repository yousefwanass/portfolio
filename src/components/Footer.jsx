import siteConfig from '../data/siteConfig'

export default function Footer() {
  return (
    <footer className="border-t border-ink-border py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-paper-faint">
          © {new Date().getFullYear()} {siteConfig.name}. Built with React, Vite &amp; Tailwind.
        </p>
        <p className="font-mono text-xs text-paper-faint">{siteConfig.role}</p>
      </div>
    </footer>
  )
}
