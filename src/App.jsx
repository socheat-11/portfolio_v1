import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Service_page from "./pages/service_page";
import Resume_page from "./pages/resume_page";
import About_page from "./pages/about_page";
import Project_page from "./pages/project_page";
import Blog_page from "./pages/blog_page";
import Contact_page from "./pages/contact_page";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service_page" element={<Service_page />} />
        <Route path="/resume_page" element={<Resume_page />} />
        <Route path="/about_page" element={<About_page />} />
        <Route path="/project_page" element={<Project_page />} />
        <Route path="/blog_page" element={<Blog_page />} />
        <Route path="/contact_page" element={<Contact_page />} />
      </Routes>
      <BackToTopButton />
     <Footer />
    </Router>
    
  );
}

export default App;
