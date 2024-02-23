import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Activity from "./pages/activity/Activity";
import Inventory from "./pages/inventory/Inventory";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
        <Routes>  
          <Route exact path="/activity" element={<Activity />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;