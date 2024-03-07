import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Navbar from "./components/Navbar";
import Activity from "./pages/activity/Activity";
import Inventory from "./pages/inventory/Inventory";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import { useMediaQuery } from "react-responsive";
import Reports from "./pages/reports/Reports";
import Orders from "./pages/orders/Orders";
import HumanResources from "./pages/humanResources/HumanResources";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <Router>
      {/* <div className="bg-dark-blue lg:hidden h-80 w-screen fixed top-0 z-30 rounded-b-full"></div> */}
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 min-w-screen xl:max-w-screen bg-gradient-to-tl from-light-blue to-semi-white">
        {!isMobile && <Navbar Class='lg:col-span-1'></Navbar>}
        <div className="lg:col-span-2 xl:col-span-3">
          {isMobile ? <Header></Header> : <Topbar />}
          <div className="lg:col-span-2 xl:grid-span-3 lg:-ml-6 xl:ml-1 2xl:-ml-20">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/sales" element={<Activity />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/human-resources" element={<HumanResources />} />
              <Route path="/reports" element={<Activity />} />
              <Route path="*" element={<h1>Error 404. Page not found</h1>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
