# Tyrese May Portfolio

Personal portfolio website for Tyrese May, a Computer Science student at the New Jersey Institute of Technology focused on data analytics, dashboarding, performance insights, and practical software engineering.

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Vitest
- React Testing Library
- jest-dom
- CSS organized through `src/index.css`

## Project Structure

```text
src/
  components/
    common/       Reusable UI helpers
    layout/       Header and footer
    sections/     Page sections such as hero, skills, projects, and education
  data/           Portfolio content that can be updated over time
  pages/          Route-level page components
  routes/         React Router configuration
  styles/         CSS modules imported by index.css
  test/           Test setup
public/
  images/         Headshot and school logos
  resume/         Downloadable resume PDF
```

## Local Development

```bash
npm install
npm run dev
```

## Testing

```bash
npm test
```

## Workflow

All work should happen on focused branches instead of `main`. Example branch names:

- `site-foundation`
- `projects-section`
- `github-pages-deploy`
- `content-refresh`

## Content Updates

Most editable portfolio content lives in `src/data`. Add new projects in `src/data/projects.ts`, new skills in `src/data/skills.ts`, and resume-facing career updates in `src/data/experience.ts`.
