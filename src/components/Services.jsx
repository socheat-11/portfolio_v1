import React, { useEffect } from "react";
import AOS from "aos";
import freelancer from '../image/freelancer.png'; // Corrected import
import web1 from '../image/web1.png'; // Corrected import
import web2 from '../image/web2.png'; // Corrected import
import "aos/dist/aos.css"; // For AOS styles

// Array of services to loop through
const services = [
  {
    title: "Freelancer",
    image: freelancer, // Use the imported image
  },
  {
    title: "Web Developer",
    image: web1, // Use the imported image
  },
  {
    title: "Web Development",
    image: web2, // Use the imported image
  },
  // Add more services as needed
];

function Services() {
  // Initialize AOS library for animations
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init();
    }
  }, []);

  return (
    <div className="py-5">
      <section className="max-w-screen-xl mx-auto text-center p-4 mt-2 mb-5">
        <div className="flex items-center justify-center">
          <h1 className="text-[25px] border-b-4 border-[#ffbd39] text-[#fff] font-bold">
            My <span className="text-[#ffbd39]">Services</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="bg-[#1a1a1a] transition-all duration-500 hover:scale-105 p-4 rounded-md py-20 hover:bg-[#ffbd39] duration-800 ease-in-out text-center shadow-lg hover:shadow-2xl"
            >
              <div className="flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-14 h-14 rounded-sm transition-all duration-500 hover:scale-105"
                />
              </div>
              <h2 className="text-[15px] uppercase text-center text-[#fff] mt-2 mb-2 font-semibold">
                {service.title}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
