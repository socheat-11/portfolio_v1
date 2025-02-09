import React, { Component } from "react";
import About from "../components/About";
import bg from '../image/bg.png';
import { ReactTyped } from "react-typed";

class AboutPage extends Component {
  render() {
    return (
      <div className="">
        <section className="relative w-full py-80">
          {/* Background Image */}
          <img
            src={bg}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Background"
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            <ReactTyped
              strings={[
                "<span class='text-white'>Welcome to</span> <span class='text-[#ffbd39]'>About Page</span>",
              ]}
              typeSpeed={100}
              backSpeed={60}
              loop
            />
          </h1>

            <p className="text-gray-300 text-sm md:text-lg max-w-lg mt-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="flex justify-center items-center space-x-5 mt-10">
              <a
                href="/home"
                className="inline-block py-2 px-3 text-[#ffbd39] text-base border-y-4 border-[#ffbd39] 
              focus:text-[#ffbd39] active:text-[#ffbd39] 
              transition duration-700 ease-in-out"
              >
                Home
              </a>

              <a
                href="/about_page"
                className="inline-block py-2 px-3 text-[#ffbd39] text-base border-y-4 border-transparent 
              hover:text-[#ffbd39] focus:text-[#ffbd39] active:text-[#ffbd39] 
              hover:border-[#ffbd39] 
              transition duration-700 ease-in-out"
              >
                About
              </a>
            </div>
          </div>
        </section>
        <div className="py-12 bg-[#1a1824] text-white">
          <section className="max-w-screen-xl mx-auto text-center p-4 mt-5">
            <div className="">
              <About />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

AboutPage.propTypes = {
  // Define your prop types here if needed
};

export default AboutPage;
