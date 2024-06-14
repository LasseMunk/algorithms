import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	// base: "/<REPO>/",
	plugins: [react({ include: "**/*.tsx" })],
	server: {
		open: true,
	},
});
