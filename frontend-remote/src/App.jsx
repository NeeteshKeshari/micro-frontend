import React from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";

function Layout() {
  return (
    <div className="remote-surface">
      <div className="muted" style={{ marginBottom: 8 }}>
        frontend-remote
      </div>
      <div className="remote-nav">
        <NavLink to="." end>
          Landing
        </NavLink>
        <NavLink to="feature">Feature</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

function Landing() {
  return (
    <div>
      <h2>Frontend Remote · frontend-remote</h2>
      <p className="muted">
        This remote is a lightweight marketing surface. It renders inside the shell at the root path
        without adding extra URL segments.
      </p>
    </div>
  );
}

function Feature() {
  return (
    <div>
      <h3>Feature spotlight · frontend-remote</h3>
      <p className="muted">Use this to validate design tokens or shared shell styling.</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="feature" element={<Feature />} />
      </Route>
    </Routes>
  );
}
