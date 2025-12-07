import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="crm-shell">
      <div className="muted" style={{ marginBottom: 8 }}>
        crm-remote
      </div>
      <div className="crm-nav">
        <NavLink to="." end>
          Dashboard
        </NavLink>
        <NavLink to="accounts">Accounts</NavLink>
        <NavLink to="insights">Insights</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
