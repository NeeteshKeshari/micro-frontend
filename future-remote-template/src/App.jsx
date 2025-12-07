import React from "react";

export default function App() {
  return (
    <div style={{ padding: 16, border: "1px dashed #94a3b8", borderRadius: 12 }}>
      <h2>Future remote template</h2>
      <p style={{ color: "#475569" }}>
        Duplicate this package to spin up another microfrontend. Update <code>name</code> in
        package.json, tweak the exposed module in <code>vite.config.js</code>, and point the host's
        remote URL at the new dev server.
      </p>
    </div>
  );
}
