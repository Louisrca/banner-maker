import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import * as path from "path";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@Pages": path.resolve(__dirname, "./src/pages"),
      "@Presentationals": path.resolve(
        __dirname,
        "./src/components/presentationals",
      ),
      "@Containers": path.resolve(__dirname, "./src/components/containers"),
      "@Hooks": path.resolve(__dirname, "./src/hooks"),
      "@Utils": path.resolve(__dirname, "./src/utils"),
      "@UI": path.resolve(__dirname, "./src/components/ui"),
    },
  },
});
