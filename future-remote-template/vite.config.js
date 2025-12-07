import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

const port = Number(process.env.PORT || 4180);
const remoteName = process.env.REMOTE_NAME || "future";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: remoteName,
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
