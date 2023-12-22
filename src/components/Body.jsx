import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="bg-gray-100">
      <section className="mt-4">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img src="./assets/image/shivam.png" alt="shivam" />
            </div>

            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-5">
              Shivam Yadav
            </h6>

            <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
              Software Developer
            </h1>

            <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
              I have a passion for software. I enjoy creating tools that make
              life easier for people.
            </p>
            <div className="flex justify-center gap-1">
              <Link
                to="/contact"
                className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold
              bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50
              hover:text-gray-700 transition ease-linear duration-500">
                {" "}
                Hire me
              </Link>
              <Link
                to="/project"
                className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold
              bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50
              hover:text-gray-700 transition ease-linear duration-500">
                {" "}
                Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="text-center font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Experience
          </h1>

          <p className="text-center font-normal text-gray-500 text-xs md:text-base mb-10">
            Below is a summary of the places I worked
          </p>

          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                DevTown
              </h5>
              <h6 className="text-gray-700 text-md mb-4">2022 – 2023</h6>
              <p>Position: Full Stack Web-Development Intern</p>
              <p className="font-normal text-gray-500 text-md mb-4">
                Internship highlights: Guided peers by resolving technical
                doubts and offering mentorship. Integral role in developing
                backend servers, showcasing adept problem-solving.
              </p>

              <div className="relative">
                <Link
                  to="https://www.devtown.in/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <h6 className="font-semibold text-gray-500 text-md relative z-10">
                    See the place here
                  </h6>
                </Link>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Coding Blocks
              </h5>
              <h6 className="text-gray-700 text-md mb-4">2022 – 2023</h6>
              <p>Position: Teaching Assistant (TA)</p>
              <p className="font-normal text-gray-500 text-md mb-4">
                Led students in tackling intricate data structure challenges,
                fostering the development of robust problem-solving skills and
                logical reasoning.
              </p>

              <div className="relative">
                <Link
                  to="https://codingblocks.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <h6 className="font-semibold text-gray-500 text-md relative z-10">
                    See the place here
                  </h6>
                </Link>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="container max-w-screen-xl my-16 mx-auto px-4">
          <h1 className="text-center font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Education
          </h1>

          <p className="text-center font-normal text-gray-500 text-xs md:text-base mb-10">
            Below is a summary of the places I studied
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Feroze Gandhi Institute of Engineering and Technology
              </h5>
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2019 – 2023
              </h4>
              Engaged in Computer Science at AKTU Lucknow, maintaining a CPA of
              8.0+. Cultivated teamwork and sharpened problem-solving,
              showcasing commitment to excellence in both academics and
              practical skills.
              <div className="relative">
                <Link
                  to="http://fgiet.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <h6 className="font-semibold text-gray-500 text-md relative z-10">
                    See the place here
                  </h6>
                </Link>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Virendra Swarup Public School School
              </h5>
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2010 – 2018
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Graduated with over 80% in the Science stream (PCM) from school,
                showcasing proficiency in Physics, Chemistry, and Mathematics.
                Demonstrates a commitment to academic excellence and a strong
                foundation in the sciences.
              </p>

              <div className="relative">
                <Link
                  to="https://www.vsmps.in/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <h6 className="font-semibold text-gray-500 text-md relative z-10">
                    See the place here
                  </h6>
                </Link>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
