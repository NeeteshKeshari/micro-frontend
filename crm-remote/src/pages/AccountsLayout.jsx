import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AccountsLayout() {
  return (
    <div className="section">
      <h3>Accounts · crm-remote</h3>
      <p className="muted">Inner navigation stays inside the CRM remote.</p>
      <div className="crm-nav" style={{ marginTop: 8 }}>
        <NavLink to="." end>
          All accounts
        </NavLink>
        <NavLink to="alpha">Alpha Corp</NavLink>
        <NavLink to="beta">Beta Partners</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
