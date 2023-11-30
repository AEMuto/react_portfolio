import {defineConfig} from "vite"
import * as path from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react({
		jsxImportSource: "@emotion/react",
		jsxRuntime: "automatic",
	}),
		// Custom plugin to load markdown files
		{
			name: "markdown-loader",
			transform(code, id) {
				if (id.slice(-3) === ".md") {
					// For .md files, get the raw content
					return `export default ${JSON.stringify(code)};`
				}
			},
		},
	],
	resolve: {
		alias: {
			"@assets": path.resolve(__dirname, "./assets"),
		},
	},
})
