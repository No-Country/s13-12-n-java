import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Activity from "./pages/activity/Activity";
import Inventory from "./pages/inventory/Inventory";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
