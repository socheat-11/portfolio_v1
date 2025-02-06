import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Skill = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 60 },
    { name: "Bootstrap & Tailwind", level: 80 },
    { name: "PHP", level: 75 },
    { name: "Laravel & Angular", level: 80 },
    { name: "ReactJS", level: 60 },
    { name: "Git Lab & Git Hub", level: 80 },
    { name: "MySQL & XAMPP", level: 80 },
  ];

  return (
    <section className="p-4">
      <h2 className="text-[22px] text-start border-[#ffbd39] text-[#fff] font-bold">
        My <span className="text-[#ffbd39]">Skills</span>
      </h2>
      <div className="grid mt-5 grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-duration="3000"
            className=""
          >
            <p className="text-[#e5e7eba9] font-medium">{skill.name}</p>
            <div className="relative h-3 bg-gray-200 rounded-md mt-2 group">
              <div
                className="absolute top-0 left-0 h-full bg-[#ffbd39] rounded-md flex items-center justify-end pr-2"
                style={{ width: `${skill.level}%` }}
              >
                <span className="text-white text-[10px]">{skill.level}%</span>
              </div>
              {/* Tooltip (popup) */}
              <div className="absolute top-[-25px] rounded-md animate-bounce right-0 bg-[#ffbd39] text-white text-xs py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
