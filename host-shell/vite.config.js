// vite.config.ts (host-shell)
import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import { federation } from "@module-federation/vite"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  const frontendRemote = env.VITE_FRONTEND_REMOTE_URL || "http://localhost:4174/assets/remoteEntry.js"
  const crmRemote = env.VITE_CRM_REMOTE_URL || "http://localhost:4175/assets/remoteEntry.js"
  const segmentlessRemote =
    env.VITE_SEGMENTLESS_REMOTE_URL || "http://localhost:4181/assets/remoteEntry.js"

  return {
    plugins: [
      react(),
      federation({
        name: "host_shell",
        remotes: {
          frontend: { type: "module", name: "frontend", entry: frontendRemote },
          crm: { type: "module", name: "crm", entry: crmRemote },
          segmentless: { type: "module", name: "segmentless", entry: segmentlessRemote },
        },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
  }
})
