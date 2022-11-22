import React from "react";
import unitConv from "../assets/projects/unitConv.jpg";
import fitnessCent from "../assets/projects/fitnessCent.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: unitConv,
      link: "https://github.com/vatsals21/UnitConverter",
    },
    {
      id: 2,
      src: fitnessCent,
      link: "https://drive.google.com/file/d/1lNonj8vh_7F9_64gYgEf9yh0zx29znQ-/view",
    },
    {
      id: 3,
      src: unitConv,
      link: "https://github.com/vatsals21/UnitConverter",
    },
    {
      id: 4,
      src: fitnessCent,
      link: "https://github.com/vatsals21/UnitConverter",
    },
    {
      id: 5,
      src: unitConv,
      link: "https://github.com/vatsals21/UnitConverter",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 text-gray-400 w-full md:h-screen sm:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            Projects
          </p>
          <p className="py-6">Below are some of my projects - </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt="project_image"
                  height={300}
                  className="rounded-md duration-200 hover:scale-105"
                ></img>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      window.open("https://github.com/vatsals21/UnitConverter");
                    }}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
