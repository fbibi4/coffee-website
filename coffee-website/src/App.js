import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/home";
import About from "./components/pages/About";
import Repair from "./components/pages/Repair";
import Service from "./components/pages/Service";
import RefurbishedMachines from "./components/pages/RefurbishedMachines";
import Parts from "./components/pages/Parts";
import Contact from "./components/pages/Contact";
import Cancel from "./components/pages/Cancel";
import Success from "./components/pages/Success";
import Store from "./components/pages/Store";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />;
        <Route path="/about" element={<About />} />;
        <Route path="/coffeemachineservices/repair" element={<Repair />} />;
        <Route path="/coffeemachineservices/service" element={<Service />} />;
        <Route path="/shop/refurbished" element={<RefurbishedMachines />} />;
        <Route path="/shop/parts" element={<Parts />} />;
        <Route path="/contact" element={<Contact />} />;
        <Route path="/Store" element={<Store />} />;
        <Route path="/Success" element={<Success />} />;
        <Route path="/Cancel" element={<Cancel />} />;
      </Routes>
    </Router>
  );
}

export default App;
