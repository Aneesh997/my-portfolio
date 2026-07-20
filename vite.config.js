import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Absolute base matching the GitHub Pages project subpath
  // (https://aneesh997.github.io/my-portfolio/). A relative base ('./') can
  // resolve asset paths incorrectly depending on trailing slashes, which
  // causes a blank page — the HTML loads but the JS/CSS 404 silently.
  // If you ever move to a domain root (Vercel/Netlify/custom domain), change
  // this back to '/'.
  base: '/my-portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    // This sandbox's mounted filesystem sometimes blocks deleting old dist/
    // files between builds (EPERM on unlink) — skip the pre-build wipe so
    // `vite build` can still overwrite in place. Doesn't affect CI/deploys.
    emptyOutDir: false,
  },
})
