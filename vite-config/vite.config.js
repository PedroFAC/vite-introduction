import { defineConfig, loadEnv } from "vite";

export default defineConfig((command, mode) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  console.log(env);

  return {};
});
