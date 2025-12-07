import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AccountsLayout from "./pages/AccountsLayout.jsx";
import AccountsList from "./pages/AccountsList.jsx";
import AccountDetail from "./pages/AccountDetail.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Insights from "./pages/Insights.jsx";
import Settings from "./pages/Settings.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="accounts/*" element={<AccountsLayout />}>
          <Route index element={<AccountsList />} />
          <Route path=":accountId" element={<AccountDetail />} />
        </Route>
        <Route path="insights" element={<Insights />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
