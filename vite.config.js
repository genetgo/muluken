import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/muluken/',  // 👈 Set to your GitHub repo name with slashes
})
