import React from "react";
import ProfileImg from "../assets/Profile_Pic.JPG";
import { HiArrowNarrowRight } from "react-icons/hi";
import SocialLinks from "./socialLinks";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home" // name property used to apply smooth scroll
      className="md:h-screen sm:h-fit md:mt-0 sm:mt-auto w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-1 md:flex-row">
        <div className="flex flex-col justify-center h-full mx-16">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-5">
            I am a Software Engineer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I am a hardworking and passionate software engineer with strong
            organizational skills, eager to learn and improve continuously and
            help the team achieve company goals.
          </p>

          {/* All social links goes here*/}
          <SocialLinks />

          <div>
            {/* When style to an element based on the state of some parent element is needed, mark the parent with the group class
             * here, button is parent for span class
             */}
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 via-green-700 to-green-800 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={18} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={ProfileImg}
            alt="profile_image"
            className="rounded-2xl mx-auto md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
