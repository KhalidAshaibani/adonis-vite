import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import adonis from '@khalidashaibani/adonis-vite/build/plugins/adonis'

export default defineConfig({
	plugins: [
		react({ jsxRuntime: 'classic' }),
		adonis({ input: 'resources/frontend/entrypoints/app.tsx' }),
	],
})
