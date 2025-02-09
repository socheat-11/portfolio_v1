import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // For AOS styles
import Socheat from "../image/socheat.png";
import { ReactTyped } from "react-typed";

function Heading() {
  // To handle AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-out-back", // Easing function for smooth animation
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto text-center p-4 mt-10 mb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
        <div data-aos="zoom-in" data-aos-duration="3000">
          <h2 className="text-[20px] text-[#fff] font-bold text-start mt-2 mb-2">
            <ReactTyped
              strings={[
                "HI, I'am <span class='text-[#ffbd39]'>Kin Socheat !</span>",
              ]}
              typeSpeed={100}
              backSpeed={60}
              loop
            />
          </h2>
          <h2 className="text-[50px] text-[#fff] font-bold text-start mt-2 mb-2 leading-relaxed">
            <ReactTyped
              strings={[
                "I'am a <span class='text-[#ffbd39]'>Front-End Developer !<span class='text-[#fff]'> And Freelancers !</span></span>",
              ]}
              typeSpeed={100}
              backSpeed={60}
              loop
            />
          </h2>

          <p className="text-sm text-[#8e8d8d] text-start mt-2 mb-2">
            I am a Junior Front-End Web Developer Specializing in creating dynamic
            and user-friendly websites. My primary focus is on delivering engaging
            experiences that users enjoy. Currently, I am working with React.
          </p>
          <div className="flex justify-start items-start space-x-3 mt-5">
            <a
              href="https://t.me/socheat_kin"
              className="px-7 py-2 font-bold uppercase text-[13px] border-2 text-[#fff] bg-[#ffbd39] rounded-full hover:bg-[#f5b73c] border-[#ffbd39] transition duration-500 ease-in-out"
            >
              Here Me!
            </a>
            <a
              href="https://t.me/socheat_kin"
              className="px-7 py-2 font-bold uppercase text-[13px] border-2 text-[#fff] hover:text-[#fff] rounded-full bg-transparent hover:bg-[#f5b73c] border-[#ffbd39] transition duration-500 ease-in-out"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Image with Snow-Like Background */}
        <div data-aos="zoom-in" data-aos-duration="3000">
          <div className="flex items-center justify-center">
            <div className="w-[400px] h-[400px] bg-[#f9f9f9]  rounded-br-[40px] border-4 border-[#ffbd39] rounded-tr-[5px] rounded-tl-[5px] rounded-bl-[300px] flex items-center justify-center drop-shadow-lg">
              <img
                src={Socheat}
                alt="Socheat"
                className="w-[300px] transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Heading;
