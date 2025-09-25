import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',   // root, since you’re using eskinder.dev directly
  plugins: [react()],
})
