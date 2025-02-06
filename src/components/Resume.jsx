import React, { useEffect } from "react";
import "aos/dist/aos.css"; // For AOS styles

// Array of resume items to loop through
const resumeItems = [
  {
    period: "2016 - 2019",
    title: "Secondary School Diploma",
    institution: "Hun Sen Tropang Tnoat High School",
    description: "A secondary school diploma is also known as a high school diploma, high school degree, or certificate of secondary education.",
  },
  {
    period: "2019 - 2021",
    title: "High School Diploma",
    institution: "Hun Sen Tropang Tnoat High School",
    description: "A secondary school diploma is also known as a high school diploma, high school degree, or certificate of secondary education.",
  },
  {
    period: "2022 - 2025",
    title: "Bachelor's Computer Science",
    institution: "Royal University of Phnom Penh",
    description: "A secondary school diploma is also known as a high school diploma, high school degree, or certificate of secondary education.",
  },
  {
    period: "Jun 2023 - Oct 2023",
    title: "Trainee Web Design",
    institution: "CamCyber ICT Solution | Phnom Penh",
    description: "A secondary school diploma is also known as a high school diploma, high school degree, or certificate of secondary education.",
  },
  {
    period: "July 2024 - Dec 2024",
    title: "Front-end Developer",
    institution: "CamCyber ICT Solution | Phnom Penh",
    description: "A secondary school diploma is also known as a high school diploma, high school degree, or certificate of secondary education.",
  },
];

function Resume() {
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
            My <span className="text-[#ffbd39]">Resumes</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {resumeItems.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="bg-[#1a1a1a] rounded-md p-4 transition duration-500 ease-in-out text-center shadow-lg hover:shadow-2xl"
            >
              <h2 className="text-[25px] text-start text-[#ffbd39] mt-2 mb-2 font-extrabold">
                {item.period}
              </h2>
              <h2 className="text-[25px] text-[#fff] font-normal text-start mt-2 mb-2">
                {item.title}
              </h2>
              <p className="text-[13px] text-[#999999] uppercase font-bold text-start mt-2 mb-2">
                {item.institution}
              </p>
              <p className="text-[13px] text-[#999999] uppercase font-bold text-start mt-2 mb-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resume;
