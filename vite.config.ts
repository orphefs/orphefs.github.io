import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User site served from root: orphefs.github.io
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    watch: {
      // Reliable hot-reload inside Docker bind mounts
      usePolling: true,
      interval: 200,
    },
  },
});
