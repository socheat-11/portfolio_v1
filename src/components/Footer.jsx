import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-gray-900 text-[#fff] ">
        <div className="max-w-screen-xl mx-auto py-12 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-[25px] font-bold underline-offset-[13px] underline decoration-[#ffbd39] decoration-[3px] mb-4">
                Contact US
              </h3>
              <ul className="space-y-2 mt-7">
                <li>
                  <a href="#" className="flex items-center mb-4 space-x-2 ">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="w-6 h-6 text-[#ffbd39]"
                    />
                    <span className="hover:text-[#ffbd39]">
                      Phnom Penh, Cambodia
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/about" className="flex mb-4 items-center space-x-2">
                    <PhoneIcon className="w-6 h-6 text-[#ffbd39]" />
                    <span className="hover:text-[#ffbd39]">
                      +855 87 708 384
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center mb-4 space-x-2 ">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-6 h-6 text-[#ffbd39]"
                    />
                    <span className="hover:text-[#ffbd39]">
                      kinsocheat880@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-[25px] font-bold underline-offset-[13px] underline decoration-[#ffbd39] decoration-[3px] mb-4">
                Menu Links
              </h3>
              <ul className="space-y-2 mt-7">
                <li>
                  <a
                    href="/home"
                    className="fle hover:text-[#ffbd39] items-center mb-4"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/resume_page"
                    className="fle hover:text-[#ffbd39] items-center mb-4"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="/about_page"
                    className="fle hover:text-[#ffbd39] items-center mb-4"
                  >
                   About me
                  </a>
                </li>
                <li>
                  <a
                    href="/project_page"
                    className="fle hover:text-[#ffbd39] items-center mb-4"
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    href="/blog_page"
                    className="fle hover:text-[#ffbd39] items-center mb-4"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/contact_page"
                    className="fle hover:text-[#ffbd39] items-center mb-4"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-[25px] font-bold underline-offset-[13px] underline decoration-[#ffbd39] decoration-[3px] mb-4">
                News Letter
              </h3>
              <div className="mt-7">
                <input
                  type="text"
                  placeholder="Enter text here"
                  className="w-full px-4 py-2 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#ffbd39]"
                />
              </div>
              <div className="mt-5">
                <button className="iinline-block text-[16px] font-medium uppercase py-2 px-5  transition-all duration-[800ms] ease-in-out text-[#ffbd39] hover:text-[#fff] bg-[#fff] hover:bg-[#ffbd39] hover:text-[#[#fff]]">
                  subscribe
                </button>
              </div>
              <div className="mt-5 flex  space-x-5 items-center">
                <a href="https://web.facebook.com/cheat.cheat.7169">
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className="w-8 h-8 text-[#fff] hover:text-[#ffbd39]"
                    />
                </a>

                <a href="https://www.linkedin.com/in/kin-socheat-30100b327/">
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="w-8 h-8 text-[#fff] hover:text-[#ffbd39]"
                    />
                </a>

                <a href="https://t.me/socheat_kin">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="w-8 h-8 text-[#fff] hover:text-[#ffbd39]"
                    />
                </a>
                <a href="">
                    <FontAwesomeIcon
                        icon={faYoutube}
                        className="w-8 h-8 text-[#fff] hover:text-[#ffbd39]"
                    />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
        </div>
        <div className="bg-white py-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </footer>
    );
  }
}

export default Footer;
