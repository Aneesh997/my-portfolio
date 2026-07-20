import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the built app works whether it's served from a domain
  // root (Render static site, Vercel/Netlify) or a GitHub Pages project
  // subpath (username.github.io/repo-name).
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    // This sandbox's mounted filesystem sometimes blocks deleting old dist/
    // files between builds (EPERM on unlink) — skip the pre-build wipe so
    // `vite build` can still overwrite in place. Doesn't affect CI/deploys.
    emptyOutDir: false,
  },
})
