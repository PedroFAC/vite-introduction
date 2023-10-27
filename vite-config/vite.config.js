import { defineConfig, loadEnv } from "vite";

export default defineConfig({
  clearScreen: false,
  envPrefix: "APP_",
  //   logLevel: "silent",
  //   envDir: "direnv",
  server: {
    // open: "index.html",
    port: 3000,
    // strictPort: true,
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
  //   css: {
  //     devSourcemap: true,
  //   },
});
