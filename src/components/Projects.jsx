import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { PROJECT_INFO } from "../config";

const Projects = () => {
  const [isActive, setIsActive] = useState("All");
  const [projets] = useState(PROJECT_INFO);
  const [filteredProject, setFilteredProject] = useState(PROJECT_INFO);

  const handleClick = (e) => {
    setIsActive(e.target.name);
    if (e.target.name === "All") {
      setFilteredProject(projets);
    } else {
      setFilteredProject(
        projets.filter((project) => project.category === e.target.name)
      );
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="py-1 md:py-8 mb-2 md:mb-4 lg::mb-5">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-1 text-center">
            Projects
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center mb-5">
        <div className="flex w-full md:max-w-xl mx-4 rounded shadow">
          <button
            onClick={(e) => handleClick(e)}
            name="All"
            aria-current="false"
            className={`w-full flex justify-center font-medium px-5 py-2 rounded-l border ${
              isActive === "All"
                ? "bg-gray-900 text-white  border-gray-900 hover:bg-gray-800"
                : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
            } `}>
            All
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/fangshan-design_icon/category-18.png"
              alt="Logout Icon"
              className="h-5 w-5 mr-2 mt-0.5 ml-1" // Adjust the size and margin as needed
            />
          </button>
          <button
            onClick={(e) => handleClick(e)}
            name="MERN"
            aria-current="false"
            className={`w-full flex border justify-center font-medium px-5 py-2 border-t border-b ${
              isActive === "MERN"
                ? "bg-gray-900 text-white  border-gray-900 hover:bg-gray-800"
                : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
            } `}>
            MERN
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"></path>
            </svg>
          </button>
          <button
            onClick={(e) => handleClick(e)}
            aria-current="false"
            name="MEVN"
            className={`w-full border flex justify-center font-medium px-5 py-2 border-t border-b ${
              isActive === "MEVN"
                ? "bg-gray-900 text-white  border-gray-900 hover:bg-gray-800"
                : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
            } `}>
            MEVN
            <img
              src="https://www.svgrepo.com/show/333624/vuejs.svg"
              alt="Logout Icon"
              className="h-5 w-5 ml-0.5 mt-0.5" // Adjust the size and margin as needed
            />
          </button>
          <button
            onClick={(e) => handleClick(e)}
            aria-current="false"
            name="Js"
            className={`w-full flex items-center gap-x-2 justify-center font-medium rounded-r px-5 py-2 border ${
              isActive === "Js"
                ? "bg-gray-900 text-white  border-gray-900 hover:bg-gray-800"
                : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
            } `}>
            Javascript
            <img
              src="https://c0.klipartz.com/pngpicture/611/356/gratis-png-node-js-javascript-express-js-angularjs-iconos-aleatorios.png"
              alt="Logout Icon"
              className="h-5 w-5 mr-1 mt-0.5" // Adjust the size and margin as needed
            />
          </button>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-2">
        {filteredProject?.length > 0 ? (
          filteredProject.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))
        ) : (
          <p>No Project Found</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
