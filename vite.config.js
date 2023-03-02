import { defineConfig } from "vite";
import * as path from "path";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@audio",
        replacement: path.resolve(__dirname, "src/assets/audio"),
      },
      {
        find: "@images",
        replacement: path.resolve(__dirname, "src/assets/images"),
      },
    ],
  },
});
