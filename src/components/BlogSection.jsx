import React from 'react';
import blog1 from '../image/c2.jpg'
import blog2 from '../image/c4.jpg'
import blog3 from '../image/c3.jpg'

// Sample blog data
const blogs = [
  {
    imageSrc: blog1,
    date: "Jun 2023 - Oct 2023",
    title: "Trainee Web Design",
    location: "CamCyber ICT Solution | Phnom Penh",
    description: "A secondary school diploma is also known as a high school diploma, high school degree, or certificate of secondary education."
  },
  {
    imageSrc: blog2,
    date: "Feb 2024 - May 2024",
    title: "Trainee Full Stack Development",
    location: "CamCyber ICT Solution | Phnom Penh",
    description: "A secondary school diploma is also known as a high school diploma, high school degree, or certificate of secondary education."
  },
  {
    imageSrc: blog3,
    date: "July 2024 - Dec 2024",
    title: "Front-End Developer",
    location: "CamCyber ICT Solution | Phnom Penh",
    description: "A secondary school diploma is also known as a high school diploma, high school degree, or certificate of secondary education."
  }
];

const BlogSection = () => {
  return (
    <div className="py-5 bg-[]">
      <section className="max-w-screen-xl mx-auto text-center p-4 mt-2 mb-5">
        <div className="flex items-center justify-center">
          <h1 className="text-[25px] border-b-4 border-[#ffbd39] text-[#fff] font-bold">
            My <span className="text-[#ffbd39]">Blogs</span>
          </h1>
        </div>
        
        <section class="mt-10  py-10">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div data-aos="zoom-in" data-aos-duration="3000" class="bg-[#1a1a1a] rounded-lg transition duration-300 ease-in-out hover:bg-[#ffbd39] text-[#ffbd39] hover:text-[#fff] text-center py-10 px-8">
                    <p class="text-3xl font-extrabold">20 +</p>
                    <p class="text-sm text-gray-300">Not Complete</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="3000" class="bg-[#1a1a1a] rounded-lg transition duration-300 ease-in-out hover:bg-[#ffbd39] text-[#ffbd39] hover:text-[#fff] text-center py-10 px-8">
                    <p class="text-3xl font-extrabold">10 +</p>
                    <p class="text-sm text-gray-300">Complete Projects</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="3000" class="bg-[#1a1a1a] rounded-lg transition duration-300 ease-in-out hover:bg-[#ffbd39] text-[#ffbd39] hover:text-[#fff] text-center py-10 px-8">
                    <p class="text-3xl font-bold">1,200</p>
                    <p class="text-sm text-gray-300">Happy Customers</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="3000" class="bg-[#1a1a1a] rounded-lg transition duration-300 ease-in-out hover:bg-[#ffbd39] text-[#ffbd39] hover:text-[#fff] text-center py-10 px-8">
                    <p class="text-3xl font-extrabold">400</p>
                    <p class="text-sm text-gray-300">Cups of Coffee</p>
                </div>
            </div>
        </section>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {blogs.map((blog, index) => (
            <div key={index} data-aos="zoom-in" data-aos-duration="3000">
              <img src={blog.imageSrc} alt={blog.title} className="w-full" />
              <p className="flex justify-start">
                <a href="#" className="text-[10px] text-start mt-5 font-normal text-[#ffbd39]">{blog.date}</a>
              </p>
              <h2 className="text-[25px] text-[#fff] font-normal text-start mt-2 mb-2">{blog.title}</h2>
              <p className="text-[13px] text-[#999999] uppercase font-bold text-start mt-2 mb-2">{blog.location}</p>
              <p className="text-[13px] text-[#999999] uppercase font-bold text-start mt-2 mb-2">{blog.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
