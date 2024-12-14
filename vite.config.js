import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { fileURLToPath } from "node:url"
import Components from "unplugin-vue-components/vite"
import VueIconsResolver from "@kalimahapps/vue-icons/resolver"

const host = process.env.TAURI_DEV_HOST
// https://vitejs.dev/config/
export default defineConfig({
  // base: "/vite-github/", // default , used for npm run preview
  clearScreen: false, //Tauri prevent vite from obscuring rust errors
  // envPrefix:"APP_",
  // css: {
  //   devSourcemap:true,
  // },
  // logLevel:"warn",
  // to access the Tauri environment variables set by the CLI with information about the current target
  envPrefix: [
    "VITE_",
    "TAURI_PLATFORM",
    "TAURI_ARCH",
    "TAURI_FAMILY",
    "TAURI_PLATFORM_VERSION",
    "TAURI_PLATFORM_TYPE",
    "TAURI_DEBUG",
  ],
  build: {
    // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
    // don't minify for debug builds
    minify: false, // '!process.env.TAURI_DEBUG ? "esbuild" : false,'
    // cssMinify: false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VueIconsResolver],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: host || false,
    strictPort: true, // Tauri expects a fixed port, fail if that port is not available
    proxy: {
      // "/api": {
      //   target: "http://localhost:3000",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ""),
      // },
      "/admin": "http://localhost:3000",
    },
  },
})
