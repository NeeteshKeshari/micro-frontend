// vite.config.ts (host-shell)
import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import federation from "@originjs/vite-plugin-federation"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [
      react(),
      federation({
        name: "host_shell",
        remotes: {
          frontend_remote: env.VITE_FRONTEND_REMOTE_URL,
          crm_remote: env.VITE_CRM_REMOTE_URL,
        },
        shared: ["react", "react-dom"],
      }),
    ],
  }
})
