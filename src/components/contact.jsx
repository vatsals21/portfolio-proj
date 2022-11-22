import React from "react";

const Contact = () => {
  const formLink = "https://getform.io/f/eecee3e5-036f-49e0-8eb2-fffb908eb48a";
  return (
    <div
      name="contact"
      className="w-full md:h-screen sm:h-fit bg-gradient-to-b from-black to-gray-800 p-4 text-gray-400"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            Contact
          </p>
          <p className="py-6">Fill the form and contact me</p>
        </div>

        <div className="flex justify-center items-center">
          {/* to create a form that gets the data from the user, getForm.io website is used. The endpoint created in the site
           * is used in action attribute of the form
           */}
          <form
            action={formLink}
            method="POST"
            className="flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              name="name"
              placeholder="ABC XYZ"
              className="rounded-md p-2 bg-transparent border-2 text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="abc.xyz@gmail.com"
              className="mt-2 rounded-md p-2 bg-transparent border-2 text-white focus:outline-none"
            />
            <input
              type="number"
              name="phone"
              placeholder="91XXXXXXXXXX"
              className="mt-2 rounded-md p-2 bg-transparent border-2 text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="10"
              className="mt-2 rounded-md p-2 bg-transparent border-2 text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
