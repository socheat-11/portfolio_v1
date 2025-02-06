import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // For AOS styles
import Aboutdetail from "./Aboutdetail";
import Experience from "./Experience";
import Skill from "./Skill";

// Import FontAwesome styles
import '@fortawesome/fontawesome-free/css/all.min.css';

function About() {
  const [currentPage, setCurrentPage] = useState("page1");

  useEffect(() => {
    AOS.init(); // Initialize AOS (Animate on Scroll)
  }, []);

  const showContent = (page, event) => {
    event.preventDefault();
    setCurrentPage(page); // Update the current page state
  };

  const buttonClass =
    "category-button px-7 mb-3 py-2 font-bold uppercase text-[13px] border-2 text-[#000000] bg-[#fff] rounded-lg border-[#ffbd39] transition duration-500 ease-in-out block flex justify-between items-center";
  const activeClass = "text-[#ffbd39]"; // Only change the text color on active

  return (
    <div className="py-5">
      <section className="max-w-screen-xl mx-auto text-center p-4 mt-2 mb-5">
        <div className="flex items-center justify-center">
          <h1 className="text-[25px] border-b-4 border-[#ffbd39] text-[#fff] font-bold">
            About <span className="text-[#ffbd39]">Me</span>
          </h1>
        </div>

        <div className="flex flex-wrap">
          {/* Navigation buttons */}
          <div className="w-full p-4 sm:w-1/3 lg:w-1/3 mt-5">
            <a
              data-aos="zoom-in"
              data-aos-duration="3000"
              href="#"
              id="tab1"
              className={`${buttonClass} ${
                currentPage === "page1" ? activeClass : ""
              }`}
              onClick={(e) => showContent("page1", e)}
            >
              <p>About me</p>
              <i className="fa-solid fa-square-arrow-up-right animate-bounce text-[13px]"></i>
            </a>
            <a
              data-aos="zoom-in"
              data-aos-duration="3000"
              href="#"
              id="tab2"
              className={`${buttonClass} ${
                currentPage === "page2" ? activeClass : ""
              }`}
              onClick={(e) => showContent("page2", e)}
            >
              <p>Experiences</p>
              <i className="fa-solid fa-square-arrow-up-right animate-bounce text-[13px]"></i>
            </a>
            <a
              data-aos="zoom-in"
              data-aos-duration="3000"
              href="#"
              id="tab3"
              className={`${buttonClass} ${
                currentPage === "page3" ? activeClass : ""
              }`}
              onClick={(e) => showContent("page3", e)}
            >
              <p>Skills</p>
              <i className="fa-solid fa-square-arrow-up-right animate-bounce text-[13px]"></i>
            </a>
          </div>

          {/* Content Pages */}
          <div className="w-full p-4 sm:w-2/3 lg:w-2/3 mt-5">
            {currentPage === "page1" && (
              <div id="page1" className="page-content">
                <Aboutdetail />
              </div>
            )}
            {currentPage === "page2" && (
              <div id="page2" className="page-content">
                <Experience />
              </div>
            )}
            {currentPage === "page3" && (
              <div id="page3" className="page-content">
                <Skill />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
