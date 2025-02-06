import React, { useState } from "react";

function BookingForm() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    setIsPopupVisible(false); // Close popup after submission
  };

  return (
    <div>
      {/* Booking Button */}
      <button
        onClick={() => setIsPopupVisible(true)}
        className="px-7 py-2 font-bold uppercase text-[13px] border-2 text-white hover:text-white rounded-full bg-transparent hover:bg-[#f5b73c] border-[#ffbd39] transition duration-500"
      >
        Login
      </button>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-black bg-opacity-60 p-6 border-l-4 border-[#ffbd39] shadow-lg max-w-md w-full">
            <h2 className="text-2xl text-[#fff] font-bold mb-4 text-center">
              Login Your Account
            </h2>

            {/* Close Button */}
            <button
              onClick={() => setIsPopupVisible(false)}
              className="absolute top-3 right-3 text-[#fff] text-2xl hover:text-[#f5b73c]"
            >
              &times;
            </button>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#fff]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full py-2 border text-[#fff] bg-transparent"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#fff]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full py-2 border text-[#fff] bg-transparent"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#fff]"
                >
                  Phone
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full py-2 border text-[#fff] bg-transparent"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#fff]"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full py-2 border text-[#fff] bg-transparent"
                />
              </div>

            

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="inline-block text-[16px] py-2 px-5 rounded-full transition-all duration-[800ms] ease-in-out text-[#fff] bg-[#ffbd39] hover:bg-transparent hover:text-[#fff] border-2 border-[#ffbd39]"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
