import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

const port = Number(process.env.PORT || 4181);

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "segmentless",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        "react-router-dom": { singleton: true, requiredVersion: false },
      },
    }),
  ],
  server: {
    port,
    host: true,
  },
  preview: {
    port,
  },
});
