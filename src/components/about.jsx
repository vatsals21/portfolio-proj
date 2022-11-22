import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 text-gray-400">
          I have one year of experience as a Software Engineer. I am currently
          working at Stellantis. I have worked at Accenture for six months as an
          Associate Software Engineer. I interned at Highradius for a year and
          worked with MySQL and Javascript there.
        </p>
        <p className="text-xl text-gray-400">
          I have good technical knowledge in C++, core Java, JavaScript and
          MySQL. I also have intermediate proficiency in React.Js and React
          Native. Currently, I am improving my React.Js skills.
        </p>
        <br />
        <p className="text-2xl underline text-gray-400">Education - </p>
        <div className="text-xl mt-3 text-gray-400">
          <ul>
            <li>Kalinga Institute of Industrial Technology - B. Tech</li>
            <li>Bal Bhawan School - Senior Secondary</li>
            <li>DAV Burhar Public School - Secondary</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
