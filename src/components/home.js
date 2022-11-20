import React from "react";
import ProfileImg from "../assets/Profile_Pic.JPG";
import { HiArrowNarrowRight } from "react-icons/hi";
import SocialLinks from "./socialLinks";

const Home = () => {
  return (
    <div
      name="home" // name property used to apply smooch scroll
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mx-16">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Software Engineer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I am a hardworking and passionate software engineer with strong
            organizational skills, eager to learn and improve continuously and
            help the team achieve company goals. I have two years of experience
            as a software engineer, having worked for companies like Accenture
            and Stellantis. I have a good knowledge of C++, MySQL, and core
            Java. Currently, I am improving my React.Js skills.
          </p>

          {/* All social links goes here*/}
          <SocialLinks />

          <div>
            {/* When style to an element based on the state of some parent element is needed, mark the parent with the group class
             * here, button is parent for span class
             */}
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={18} className="ml-2" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={ProfileImg}
            alt="profile_image"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
