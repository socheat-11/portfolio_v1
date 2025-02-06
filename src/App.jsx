import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Service_page from "./pages/service_page";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service_page" element={<Service_page />} />
        
      </Routes>
     <Footer />
    </Router>
    
  );
}

export default App;
