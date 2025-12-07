import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

const hostPort = Number(process.env.PORT || 4173);
const frontendRemote =
  process.env.FRONTEND_REMOTE_URL || "https://main.d1e5rewgf1z53s.amplifyapp.com";
const crmRemote = process.env.CRM_REMOTE_URL || "https://main.d1z03z8u6be6vo.amplifyapp.com";
const segmentlessRemote =
  process.env.SEGMENTLESS_REMOTE_URL || "http://localhost:4181/remoteEntry.js";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        frontend: {
          type: "module",
          name: "frontend",
          entry: frontendRemote,
        },
        crm: {
          type: "module",
          name: "crm",
          entry: crmRemote,
        },
        segmentless: {
          type: "module",
          name: "segmentless",
          entry: segmentlessRemote,
        },
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        "react-router-dom": { singleton: true, requiredVersion: false },
      },
    }),
  ],
  server: {
    port: hostPort,
    host: true,
  },
  preview: {
    port: hostPort,
  },
});
