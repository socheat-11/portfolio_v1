import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import logo from '../image/logo.png'

const Aboutdetail = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="page-content">
      <div className="flex flex-wrap">
        {/* Left side image */}
        <div data-aos="zoom-in" data-aos-duration="1500" className="w-full sm:w-1/4">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="Map of Cambodia"
              className="w-full"
            />
          </div>
        </div>

        {/* Right side content */}
        <div data-aos="zoom-in" data-aos-duration="3000" className="w-full sm:w-3/4 p-4">
          <h2 className="text-[22px] text-start border-[#ffbd39] text-[#fff] font-bold">
            My <span className="text-[#ffbd39]">Profile</span>
          </h2>
          <h2 className="text-[22px] text-[#fff] text-start mt-2 mb-2">
            Hello, I am Kin Socheat. I am a Freelancer Web Designer, Web Developer, and Front-end Developer.
          </h2>
          <p className="text-sm text-[#8e8d8d] text-start mt-2 mb-2">
            I am a Junior Front-End Web Developer specializing in <br /> creating dynamic and user-friendly websites.
          </p>

          {/* Profile Information Table */}
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td className="text-[16px] text-[#ffbd39] text-left p-1">Name:</td>
                <td className="text-[16px] text-[#fff] text-left p-1">Kin Socheat</td>
              </tr>
              <tr>
                <td className="text-[16px] text-[#ffbd39] text-left p-1">Gender:</td>
                <td className="text-[16px] text-[#fff] text-left p-1">Male</td>
              </tr>
              <tr>
                <td className="text-[16px] text-[#ffbd39] text-left p-1">Phone:</td>
                <td className="text-[16px] text-[#fff] text-left p-1">087708384</td>
              </tr>
              <tr>
                <td className="text-[16px] text-[#ffbd39] text-left p-1">Date of Birth:</td>
                <td className="text-[16px] text-[#fff] text-left p-1">05 / May / 2005</td>
              </tr>
              <tr>
                <td className="text-[16px] text-[#ffbd39] text-left p-1">Email:</td>
                <td className="text-[16px] text-[#fff] text-left p-1">kinsocheat880@gmail.com</td>
              </tr>
              <tr>
                <td className="text-[16px] text-[#ffbd39] text-left p-1">Location:</td>
                <td className="text-[16px] text-[#fff] text-left p-1">
                  Street 2004, Sangkat Teuk Thla, Khan Sen Sok, Phnom Penh
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Aboutdetail;
