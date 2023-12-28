import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	plugins: [],
	server: { host: '0.0.0.0', port: 8000 },
	clearScreen: false,
	resolve: {
		extensions: ['.js', '.ts', '.json', '.html'],
	},

	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				game: resolve(__dirname, 'game/index.html'),
				fight: resolve(__dirname, 'fight/index.html'),
			}
		}
	}
})
