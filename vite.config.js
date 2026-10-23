import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['0c26-2402-3a80-d2d-caf9-39cc-499a-eeef-91d2.ngrok-free.app']
  }
}) 
// 'approachless-gospelly-ryan.ngrok-free.dev' 