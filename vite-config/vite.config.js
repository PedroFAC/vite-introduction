import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrbuild }) => {
  //   console.log({ command, mode, ssrbuild });
  if (mode == "production") {
    return {
      base: "/vite/",
    };
  }
  return {};
});
