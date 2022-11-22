import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const HeaderBar = () => {
  const [bar, setBar] = useState(false);

  const headerLinks = [
    {
      id: 1,
      value: "home",
    },
    {
      id: 2,
      value: "about",
    },
    {
      id: 3,
      value: "projects",
    },
    {
      id: 4,
      value: "skills",
    },

    {
      id: 5,
      value: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-gray-400 fixed p-4 bg-black">
      <div>
        <h1 className="font-playfair_display text-5xl ml-2">Vatsal</h1>
      </div>

      {/* md:flex will expand and give the property display:flex when min-width of 768px is crossed */}
      <ul className="hidden md:flex">
        {headerLinks.map(({ id, value }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200 font-roboto_slab"
            >
              <Link to={value} smooth duration={500}>
                {value}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* putting links under a bar so that if width is small, the bar will expand to show the links */}
      <div
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
        onClick={() => setBar(!bar)}
      >
        {bar ? (
          <div className="text-red-600">
            <FaTimes size={27} className="text-red" />
          </div>
        ) : (
          <div>
            <FaBars size={27} />
          </div>
        )}
      </div>

      {/*
       * Check if bar is active or not, if active, with "and" condition the second part is executed and links are shown in the middle of the page
       * This is effective if the site is being viewed on a mobile device
       */}
      {bar && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-400 bg-gradient-to-b from-blue-900 to-blue-500">
          {headerLinks.map(({ id, value }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-150 font-roboto_slab"
              >
                <Link
                  onClick={() => setBar(!bar)}
                  to={value}
                  smooth
                  duration={500}
                >
                  {value}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default HeaderBar;
