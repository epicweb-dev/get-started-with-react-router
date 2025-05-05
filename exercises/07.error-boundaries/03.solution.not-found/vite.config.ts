import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), reactRouter()],
	server: {
		port: process.env.PORT ? Number(process.env.PORT) : undefined,
	},
})
