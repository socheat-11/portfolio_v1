import React from "react";
import Heading from "./Heading";
import Services from "./Services";
import Resume from "./Resume";
import About from "./About";
import ProjectGallery from "./ProjectGallery";
import BlogSection from "./BlogSection";
import Contact from "./Contact";




function Home(props) {
  return (
    <div className="bg-[#1a1824]">
      <div
        className="max-w-screen-xl mx-auto p-4">
            <Heading/>
            <Services/>
            <Resume />
            <About />
            <ProjectGallery />
            <BlogSection />
            <Contact />
  
      </div>
    </div>
  );
}

export default Home;
