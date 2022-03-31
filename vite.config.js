import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3031,
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 250000,
  },
});
