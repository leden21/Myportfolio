import React from "react";
import TypewriterText from "../components/TypewriterText";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home() {
  const socialMedia = UserData.socialMedia;

  const socialMediaIcons = {
    AiFillGithub: AiFillGithub,
    FaLinkedinIn: FaLinkedinIn,
    AiOutlineTwitter: AiOutlineTwitter,
    AiFillInstagram: AiFillInstagram,
    AiOutlineFacebook: AiOutlineFacebook,
  };

  return (

    

<div className="flex h-screen w-full items-center justify-center">
  <div className="mx-auto flex w-[90%] flex-col items-center text-center sm:flex-row lg:w-[80%] lg:justify-between">
    <div className="w-full">
      <h2 className="text-4xl font-bold text-gray-900 lg:text-6xl">Hello</h2>
      <h2 className="pt-4 text-4xl font-bold text-gray-900 lg:text-6xl">
        I'm {UserData.name}
      </h2>

      <div className="pt-4 text-xl lg:text-2xl">
        <TypewriterText />
      </div>

      <div className="mt-6 flex justify-center gap-8">
        {socialMedia.map((data, index) => {
          const IconComponent = socialMediaIcons[data.icon];
          return (
            <button
              className="flex items-center justify-center rounded-lg border-none bg-transparent hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg h-12 w-12"
              key={index}
              onClick={() => window.open(data.url)}
            >
              <IconComponent className="text-2xl text-gray-800" />
            </button>
          );
        })}
      </div>
    </div>
      </div>
    </div>
  );
}

export default Home;
