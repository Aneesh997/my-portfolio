# Aneesh Adithya — Portfolio

React + Vite + Tailwind CSS portfolio site, focused on Full-Stack Development & Cloud
Computing. All content (experience, projects, education, certifications, contact info) lives
in `src/data.js` — edit that one file to update what shows up on the site.

## Local development

```bash
npm install
npm run dev
```

Open the URL it prints — normally **http://localhost:5173**.

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Deploying to GitHub Pages

Already set up — `.github/workflows/deploy.yml` builds and deploys automatically.

1. Push this repo to GitHub.
2. Repo **Settings → Pages** → set Source to **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab).
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

`vite.config.js` uses `base: './'` (relative paths), so the build works whether it's served
from a domain root or a GitHub Pages project subpath — no extra config needed.

## Updating your resume

Replace `public/resume/Aneesh_Adithya_SR_Resume.pdf` with your latest resume file (keep the
same filename, or update `profile.resumeUrl` in `src/data.js` if you rename it). The "My
Resume" button opens it in a new tab using the browser's built-in PDF viewer.

## Notes

- There's no backend wired up right now — the Contact section shows your details directly
  rather than a contact form. If you want a working contact form again later, there's an
  Express backend already built for this in the `server/` folder of the original project (not
  included here since you asked to upload just the client folder) — let me know if you want
  it added back.
