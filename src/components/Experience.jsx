import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // For AOS styles

const Experience = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS (Animate on Scroll)
  }, []);

  return (
    <div className="flex flex-wrap">
      <div data-aos="zoom-in" data-aos-duration="3000" className="w-full p-4">
        <h2 className="text-[22px] text-start text-[#fff] font-semibold">
          Work <span className="text-[#ffbd39]">Experiences</span>
        </h2>
        <h2 className="text-[22px] text-[#fff] text-start mt-2 mb-2">
          Hello I am Kin Socheat. I am a freelancer web designer and web developer. I am training at CamCyber Digital Tech Team.
        </h2>
        <div className="w-full mt-10">
          <div data-aos="zoom-in" data-aos-duration="3000" className="relative border-l-2 border-[#fff] h-full">
            {/* Job 1 */}
            <div className="mb-8 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffbd39]"></div>
              <div className="flex ml-14 mt-3 mb-3 justify-between items-center">
                <h3 className="text-[#fff] text-base">Frontend Developer</h3>
                <p className="text-gray-400 text-xs md:text-sm">July - 2024 - December - 2024</p>
              </div>
              <h3 className="text-lg mt-3 mb-3 ml-14 text-start font-bold text-[#fff]">
                CamCyber ICT Solution | Phnom Penh
              </h3>
              <ul className="text-gray-400 leading-relaxed mt-3 mb-3 ml-14 text-sm text-start list-disc list-outside">
                <li>Developed and maintained responsive user-friendly interfaces using HTML and CSS.</li>
                <li>Collaborated with the development team to implement consistent designs.</li>
                <li>Assisted in troubleshooting and resolving frontend issues for optimal performance.</li>
              </ul>
            </div>
            {/* Job 2 */}
            <div className="mb-8 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffbd39]"></div>
              <div className="flex ml-14 mt-3 mb-3 justify-between items-center">
                <h3 className="text-[#fff] text-base md:text-lg">Trainee Full Stack Development</h3>
                <p className="text-gray-400 text-xs md:text-sm">February - 2024 - May - 2024</p>
              </div>
              <h3 className="text-lg mt-3 mb-3 ml-14 text-start font-bold text-[#fff]">
                CamCyber ICT Solution | Phnom Penh
              </h3>
              <ul className="text-gray-400 leading-relaxed mt-3 mb-3 ml-14 text-sm text-start list-disc list-outside">
                <li>Worked with PHP Laravel for the backend and Angular for frontend development.</li>
                <li>Developed web applications ensuring smooth integration between frontend and backend.</li>
              </ul>
            </div>
            {/* Job 3 */}
            <div className="mb-8 relative">
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffbd39]"></div>
              <div className="flex ml-14 mt-3 mb-3 justify-between items-center">
                <h3 className="text-[#fff] text-base md:text-lg">Trainee Basic Web Design</h3>
                <p className="text-gray-400 text-xs md:text-sm">June - 2023 - October - 2023</p>
              </div>
              <h3 className="text-lg mt-3 mb-3 ml-14 text-start font-bold text-[#fff]">
                CamCyber ICT Solution | Phnom Penh
              </h3>
              <ul className="text-gray-600 leading-relaxed mt-3 mb-3 ml-14 text-sm text-start list-disc list-outside">
                <li>Learning basic web development concepts with HTML, CSS, JavaScript, Bootstrap, PHP, SQL, and XAMPP.</li>
                <li>Focus on static web design and basic web application development.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
