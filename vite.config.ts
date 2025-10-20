import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: mode === "development",
    // Use esbuild minifier to avoid requiring 'terser' in production environments
    minify: "esbuild",
    rollupOptions: {
      // Ensure EmailJS is bundled correctly on hosted builds
      external: [],
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-select", "@radix-ui/react-toast"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "lucide-react", "@emailjs/browser"],
  },
}));
