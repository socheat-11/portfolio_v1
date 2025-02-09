import React, { useState } from 'react';
import contact from '../image/contact.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Send the form data to your API or backend here
      console.log("Form submitted:", formData);
      // Reset the form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div className="py-5">
      <section className="max-w-screen-xl mx-auto text-center p-4 mt-2 mb-5">
        <div className="flex items-center justify-center">
          <h1 className="text-[25px] border-b-4 border-[#ffbd39] text-[#fff] font-bold">
            My <span className="text-[#ffbd39]">Contact</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <div data-aos="zoom-in" data-aos-duration="1500">
            <div className="flex items-center justify-center">
              <i className="fa-solid fa-map-location-dot text-[30px] shadow-lg bg-[#1a1a1a] hover:bg-[#ffbd39] hover:text-white rounded-full p-10 text-[#ffbd39] transition duration-300 ease-in-out"></i>
            </div>
            <h2 className="text-[16px] uppercase text-center text-[#fff] mt-5 mb-2 font-semibold">Address</h2>
            <p className="text-[16px] text-center text-[#e5e7eba9] mt-5 mb-2 font-normal">
              Street 2004, Sangkat Teuk Thla, Khan Sen Sok, Phnom Penh
            </p>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1500">
            <div className="flex items-center justify-center">
              <i className="fa-solid fa-phone text-[30px] shadow-lg bg-[#1a1a1a] hover:bg-[#ffbd39] hover:text-white rounded-full p-10 text-[#ffbd39] transition duration-300 ease-in-out"></i>
            </div>
            <h2 className="text-[16px] uppercase text-center text-[#fff] mt-5 mb-2 font-semibold">Contact Number</h2>
            <p className="text-[16px] text-center text-[#e5e7eba9] mt-5 mb-2 font-normal">087708384</p>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1500">
            <div className="flex items-center justify-center">
              <i className="fa-regular fa-envelope text-[30px] shadow-lg bg-[#1a1a1a] hover:bg-[#ffbd39] hover:text-white rounded-full p-10 text-[#ffbd39] transition duration-300 ease-in-out"></i>
            </div>
            <h2 className="text-[16px] uppercase text-center text-[#fff] mt-5 mb-2 font-semibold">Email</h2>
            <p className="text-[16px] text-center text-[#e5e7eba9] mt-5 mb-2 font-normal">kinsocheat880@gmail.com</p>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1500">
            <div className="flex items-center justify-center">
              <i className="fa-solid fa-earth-europe text-[30px] shadow-lg bg-[#1a1a1a] hover:bg-[#ffbd39] hover:text-white rounded-full p-10 text-[#ffbd39] transition duration-300 ease-in-out"></i>
            </div>
            <h2 className="text-[16px] uppercase text-center text-[#fff] mt-5 mb-2 font-semibold">Website</h2>
            <p className="text-[16px] text-center text-[#e5e7eba9] mt-5 mb-2 font-normal">yoursite.com</p>
          </div>
        </div>

        <div className="flex flex-col mt-10 lg:flex-row">
          <div className="flex-1 bg-[#1e1e1e] py-10 shadow-lg">
            <div data-aos="zoom-in" data-aos-duration="1500" className="flex items-center justify-center">
              <img src={contact} alt="Contact" className="w-80 transition-all duration-300 hover:scale-105" />
            </div>
          </div>

          <div className="flex-1 bg-[#fff] py-10 shadow-lg">
            <div data-aos="zoom-in" data-aos-duration="1500" className="flex flex-col space-y-6 p-6">
              <div className="flex items-center">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="border rounded-md border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
              </div>

              <div className="flex items-center">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="border rounded-md border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Message"
                className="border rounded-md border-gray-300 p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}

              <div className="flex justify-start items-start space-x-3 mt-5">
                <button
                  onClick={handleSubmit}
                  className="px-7 py-2 text[16px] border-2 text-white bg-[#ffbd39] rounded-full hover:bg-[#ffbd39] border-[#ffbd39] transition duration-500 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
