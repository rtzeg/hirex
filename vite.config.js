import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.mov", "**/*.MOV", "**/*.m4v", "**/*.M4V"],
});
