import react from "@vitejs/plugin-react";
import sonda from "sonda/vite";
import {
	defineConfig,
} from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config
const config = defineConfig({
	build: {
		rollupOptions: {
			output: {
				manualChunks: (
					id,
				) => {
					if (
						id.includes("node_modules")
						|| id.includes("vite/")
						|| id.includes("commonjsHelpers.js")
					) {
						return "vendor";
					}

					return undefined;
				},
			},
		},
		sourcemap: true,
	},
	plugins: [
		tsconfigPaths({
			configNames: [
				"tsconfig.app.json",
			],
		}),
		react(),
		svgr(),
		sonda(),
	],
	server: {
		proxy: {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			"/api": "http://localhost:5000",
		},
	},
});

export default config;
