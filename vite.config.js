import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/globals.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
      "~ic~": resolve(__dirname, "src/assets/iconfont"),
    },
  }
});
