import React, { Suspense, lazy } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

const FrontendApp = lazy(() => import("frontend/App"));
const CrmApp = lazy(() => import("crm/App"));
const SegmentlessApp = lazy(() => import("segmentless/App"));

function RemoteBoundary({ label, children }) {
  return (
    <Suspense
      fallback={
        <div className="remote-fallback">
          <strong>{label} is loading…</strong>
          <div className="muted">Start the remote dev server to view it here.</div>
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

function RemoteCard({ title, description, port, route }) {
  return (
    <div className="card">
      <div className="badge">Remote</div>
      <h3>{title}</h3>
      <p className="muted">{description}</p>
      <p className="muted">Dev server: http://localhost:{port}</p>
      <p className="muted">Route inside host: {route}</p>
    </div>
  );
}

function ShellInfo() {
  return (
    <div className="card-grid">
      <div className="card">
        <div className="badge">Host shell</div>
        <h2>Welcome</h2>
        <p className="muted">
          This host owns routing and frames each remote. Use the nav above to load the frontend or
          CRM microfrontends.
        </p>
      </div>
      <RemoteCard
        title="Frontend remote"
        description="Simple marketing/learner surface; renders directly at /."
        port="4174"
        route="/"
      />
      <RemoteCard
        title="CRM remote"
        description="Contains its own nested navigation; mounted at /crm."
        port="4175"
        route="/crm"
      />
      <RemoteCard
        title="Segmentless remote"
        description="Internal tab state only; host URL never changes."
        port="4181"
        route="/segmentless"
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="shell">
        <header>
          <div>
            <strong>Microfrontend Shell</strong>
          </div>
          <nav>
            <NavLink to="/" end>
              Frontend
            </NavLink>
            <NavLink to="/crm">CRM</NavLink>
            <NavLink to="/segmentless">Segmentless</NavLink>
            <NavLink to="/host">Shell info</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route
              path="/*"
              element={
                <RemoteBoundary label="Frontend remote">
                  <FrontendApp />
                </RemoteBoundary>
              }
            />
            <Route
              path="/crm/*"
              element={
                <RemoteBoundary label="CRM remote">
                  <CrmApp />
                </RemoteBoundary>
              }
            />
            <Route
              path="/segmentless/*"
              element={
                <RemoteBoundary label="Segmentless remote">
                  <SegmentlessApp />
                </RemoteBoundary>
              }
            />
            <Route path="/host" element={<ShellInfo />} />
            <Route
              path="*"
              element={<div className="muted">Pick a remote from the navigation.</div>}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
