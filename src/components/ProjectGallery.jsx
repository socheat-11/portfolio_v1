import React, { useRef } from "react";
import Gi from "../image/GI.png";
import Lab from "../image/lab.png";
import Sekhalay from "../image/sekhalay.png";
import Kuro from "../image/kuro.png";
import Keto from "../image/keto.png";
import pt from "../image/pt.png";
import pt1 from "../image/pt1.png";
import E_com from "../image/e_com.png";
import SaveLabtop from "../image/savelabtop.png";
import kafe from "../image/kafe.png";
import Hospital from "../image/hospital.jpg";

// Projects Data
const projects = [
  { imgSrc: Gi, alt: "GI Kampot-Kep Salt", title: "GI KAMPOT-KEP SALT", link: "https://www.gikampotkepsalt.org/kh/home" },
  { imgSrc: Lab, alt: "Lab", title: "lab.duraseksa", link: "https://lab.duraseksa.gov.kh/home" },
  { imgSrc: Sekhalay, alt: "Sekhalay", title: "Sekhalay", link: "#" },
  { imgSrc: Kuro, alt: "Kuro Website", title: "kuro-website", link: "#" },
  { imgSrc: Keto, alt: "Keto Hotel", title: "Keto-Hotel", link: "https://keto-hotel-five.vercel.app/" },
  { imgSrc: Hospital, alt: "Hospital", title: "Hospital", link: "" },
  { imgSrc: pt, alt: "Portfolio First", title: "Portfolio First", link: "#" },
  { imgSrc: pt1, alt: "Portfolio", title: "Portfolio", link: "#" },
  { imgSrc: E_com, alt: "E-Com Training", title: "E-Com Training", link: "#" },
  { imgSrc: SaveLabtop, alt: "SaveLabtop", title: "SaveLabtop", link: "#" },
  { imgSrc: kafe, alt: "Kaffee", title: "Kaffee", link: "#" },
];

const ProjectGallery = () => {
  const scrollContainer = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="py-5">
      <section className="max-w-screen-xl mx-auto text-center p-4 mt-2 mb-5">
        <div className="flex items-center justify-center">
          <h1 className="text-[25px] border-b-4 border-[#ffbd39] text-[#fff] font-bold">
            My <span className="text-[#ffbd39]">Projects</span>
          </h1>
        </div>

        {/* Project Gallery */}
        <div className="relative">
          {/* Scrollable Container */}
          <div
            ref={scrollContainer}
            className="overflow-x-auto p-4 mt-5 flex gap-4 scrollbar-hide"
          >
            {projects.map((project, index) => (
              <div
                key={index} 
                 data-aos="zoom-in"
              data-aos-duration="3000"
                className="relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0"
              >
                <img
                  src={project.imgSrc}
                  alt={project.alt}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-[#ffbd39] bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                  <a
                    href={project.link}
                    className="text-[#fff] text-[20px] font-normal"
                  >
                    {project.title}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#ffbd39] p-2 text-white rounded-full"
          >
            &#8592;
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#ffbd39] p-2 text-white rounded-full"
          >
            &#8594;
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectGallery;
