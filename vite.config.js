import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to https://YOUR_USERNAME.github.io/REPO_NAME, set base to '/REPO_NAME/'
// If deploying to https://YOUR_USERNAME.github.io (repo named YOUR_USERNAME.github.io), leave base as '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
