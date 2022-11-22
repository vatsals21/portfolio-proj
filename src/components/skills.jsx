import React from "react";
import Html from "../assets/skills/html.png";
import Cpp from "../assets/skills/cpp.png";
import Css from "../assets/skills/css.png";
import Github from "../assets/skills/github.png";
import Java from "../assets/skills/java.png";
import JavaScript from "../assets/skills/javascript.png";
import MySql from "../assets/skills/mysql.png";
import ReactJs from "../assets/skills/reactjs.png";
import Tailwind from "../assets/skills/tailwind.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: Html,
      title: "Html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "Css",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactJs,
      title: "ReactJs",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Cpp,
      title: "Cpp",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: Java,
      title: "Java",
      style: "shadow-blue-700",
    },
    {
      id: 8,
      src: Github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: MySql,
      title: "MySql",
      style: "shadow-yellow-700",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen sm:h-fit"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-400">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            Skills
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt={title} className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
