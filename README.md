# Yousef — Junior Data Analyst Portfolio

A React + Vite + Tailwind portfolio built to showcase data analysis case studies to recruiters.

## 1. Folder structure

```
portfolio/
├── index.html                 SEO metadata, fonts, page title
├── public/
│   ├── favicon.svg
│   ├── resume.pdf             ← put your resume PDF here (referenced by Resume section)
│   ├── og-cover.png           ← optional social-preview image (1200×630)
│   └── projects/              ← put dashboard screenshots here, one subfolder per project
├── src/
│   ├── main.jsx                React entry point
│   ├── App.jsx                 Composes every section in page order
│   ├── index.css                Tailwind + global styles/animations
│   ├── data/
│   │   ├── siteConfig.js       Your name, statement, links, resume path
│   │   ├── skills.js           Skills grouped by category
│   │   └── projects.js         ★ All project + case-study content lives here
│   └── components/
│       ├── Navbar.jsx, Hero.jsx, About.jsx, Skills.jsx
│       ├── Projects.jsx        Grid + filter logic
│       ├── ProjectCard.jsx     Single project card
│       ├── ProjectModal.jsx    Full case-study modal
│       ├── Experience.jsx      Tamweely training section
│       ├── Workflow.jsx        Raw Data → Recommendations pipeline
│       ├── Resume.jsx, Contact.jsx, Footer.jsx, BackToTop.jsx
```

## 2. How to add a new project

Open `src/data/projects.js` and copy the commented template at the bottom of the file into
the `projects` array. Every field maps directly to what's shown in the project card and the
case-study modal — there's no component code to touch. Give it a unique `id` (used as the React
key and, if you ever add project-specific routes, the slug).

## 3. Where to add GitHub links

In `src/data/projects.js`, set `githubUrl` on each project. Leave it as an empty string `''` to
hide the "Code" button for that project.

## 4. Where to add Power BI dashboard links

Same file, `dashboardUrl` field. If you've published a report with "Publish to web" in Power BI,
paste that embed/share URL here. Leave empty to hide the "Live Dashboard" button.

## 5. Where to replace project images

1. Add your screenshots to `public/projects/<project-name>/...`
2. In `src/data/projects.js`, set `dashboardImages: ['/projects/<project-name>/overview.png', ...]`
   The first image in the array is used as the card preview; all of them appear in the case study.

## 6. Where to replace LinkedIn / GitHub / email

Open `src/data/siteConfig.js` and update the three `links` values, plus `resume.pdfPath` if you
rename your resume file. These propagate to the navbar, hero, contact section, and footer
automatically — you only need to edit them once.

## 7. Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## 8. Build & deploy

```bash
npm run build      # outputs a static site to /dist
npm run preview    # preview the production build locally
```

`/dist` is a fully static site — deploy it to any static host:

- **Vercel**: import the repo, framework preset "Vite", no config needed.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: push `/dist` to a `gh-pages` branch (or use the `gh-pages` npm package),
  and set `base: '/your-repo-name/'` in `vite.config.js` if deploying to a project page.

## Before you publish — checklist

- [ ] Replace every `PLACEHOLDER` in `src/data/projects.js` (record counts, insights, recommendations)
- [ ] Add real GitHub and Power BI dashboard links per project
- [ ] Add dashboard screenshots to `public/projects/`
- [ ] Replace LinkedIn, GitHub, and email in `src/data/siteConfig.js`
- [ ] Drop your resume PDF at `public/resume.pdf`
- [ ] Optional: add `public/og-cover.png` for link-preview cards on LinkedIn/Twitter
