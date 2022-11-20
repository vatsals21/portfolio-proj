import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const linkItems = [
    {
      id: 1,
      value_text: "Linkedin",
      value_icon: FaLinkedin,
      value_link: "https://www.linkedin.com/in/vatsal-sahay-8459a5158/",
    },
    {
      id: 2,
      value_text: "Github",
      value_icon: FaGithub,
      value_link: "https://github.com/vatsals21?tab=repositories",
    },
    {
      id: 3,
      value_text: "Email",
      value_icon: HiOutlineMail,
      value_link: "https://www.linkedin.com/in/vatsal-sahay-8459a5158/",
    },
    {
      id: 4,
      value_text: "Contact",
      value_icon: BsFillPersonLinesFill,
      value_link: "https://www.linkedin.com/in/vatsal-sahay-8459a5158/",
    },
  ];
  return (
    <div className="flex flex-col">
      <ul>
        {/* <li className="flex justify-between items-center">
          <a href="#" className="flex justify-between items-center text-white">
            <>
              LinkedIn <FaLinkedin size={30} className="ml-3" />
            </>
          </a>
        </li> */}

        {linkItems.map((item) => {
          return (
            <li
              key={item.id}
              className="flex justify-between items-center my-1 font-roboto_slab text-lg"
            >
              <a
                href={item.value_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center text-white"
              >
                <>
                  <div className="mr-7 w-20">{item.value_text}</div>
                  <item.value_icon size={28} className="text-white" />
                </>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
