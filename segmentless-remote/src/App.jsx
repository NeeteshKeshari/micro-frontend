import React, { useEffect, useMemo, useState } from "react";

function Overview() {
  return (
    <div className="muted">
      This remote keeps navigation off the host URL by using internal tab state instead of the host
      router.
    </div>
  );
}

function Widgets() {
  const widgets = useMemo(() => ["Audit", "Notifications", "Tasks"], []);
  return (
    <div className="muted">
      Widgets loaded: {widgets.join(", ")}
    </div>
  );
}

function Activity() {
  const [count, setCount] = useState(0);
  return (
    <div className="muted">
      <div>Activity counter: {count}</div>
      <button className="tab" style={{ marginTop: 10 }} onClick={() => setCount((c) => c + 1)}>
        Add event
      </button>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("overview");

  useEffect(() => {
    const fromHash = window.location.hash.replace("#tab=", "");
    if (fromHash) setTab(fromHash);

    const onHashChange = () => {
      const current = window.location.hash.replace("#tab=", "");
      if (current) setTab(current);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    // Update only the hash so the host path (/segmentless) stays unchanged.
    window.location.hash = `tab=${tab}`;
  }, [tab]);

  return (
    <div className="card">
      <h2 style={{ margin: "0 0 6px" }}>segmentless-remote</h2>
      <div className="muted" style={{ marginBottom: 12 }}>
        Segmentless remote example with internal tab state (host URL path stays on /segmentless;
        only the hash changes for local navigation).
      </div>
      <div className="tabs">
        <button
          className={`tab${tab === "overview" ? " active" : ""}`}
          type="button"
          onClick={() => setTab("overview")}
        >
          Overview
        </button>
        <button
          className={`tab${tab === "widgets" ? " active" : ""}`}
          type="button"
          onClick={() => setTab("widgets")}
        >
          Widgets
        </button>
        <button
          className={`tab${tab === "activity" ? " active" : ""}`}
          type="button"
          onClick={() => setTab("activity")}
        >
          Activity
        </button>
      </div>
      <div style={{ marginTop: 14 }}>
        {tab === "overview" && <Overview />}
        {tab === "widgets" && <Widgets />}
        {tab === "activity" && <Activity />}
      </div>
    </div>
  );
}
