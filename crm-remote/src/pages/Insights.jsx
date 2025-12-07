import React from "react";
import { NavLink } from "react-router-dom";

export default function Insights() {
  return (
    <div className="section">
      <h3>Insights · crm-remote</h3>
      <p className="muted">
        New CRM page mounted at <code>/crm</code> in the shell. Internal navigation stays inside this
        remote while the host keeps the top-level URL at `/crm`.
      </p>
      <div className="muted" style={{ marginTop: 8 }}>
        Quick links:{" "}
        <NavLink to="../accounts" style={{ marginRight: 10 }}>
          Accounts
        </NavLink>
        <NavLink to="../accounts/alpha">Alpha Corp</NavLink>
      </div>
    </div>
  );
}
