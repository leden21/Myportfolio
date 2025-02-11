import React from "react";
import { UserData } from "../data/UserData";
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";
import AboutImage from "../Assets/images/mej.png";

function About() {
  const { about } = UserData;
  return (
    <div className="mb-24 h-auto w-full sm:mb-0 md:h-screen">
      <div className="mx-auto flex w-[90%] flex-col justify-between rounded-lg bg-transparent p-4 shadow-lg md:flex-row md:items-center">
        <div className="flex w-full flex-col md:w-[75%]">
          <p className="pb-2 text-2xl font-semibold tracking-wide text-gray-900">
            About Me
          </p>
          <p className="font-poppins text-sm lg:text-base">{about}</p>
          <div className="mt-8">
            <Marquee
              gradient={false}
              speed={150}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="right"
            >
              {skillsData.map((skill, id) => (
                <div
                  className="ml-4 flex h-24 w-24 flex-col items-center justify-center gap-2"
                  key={id}
                >
                  <img
                    className="h-[50px] w-[60px] bg-contain bg-no-repeat"
                    src={skillsImage(skill)}
                    alt={skill}
                  />
                  <p>{skill}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <img
  className="w-[300px] h-[300px] mt-4 rounded-full object-cover bg-cover bg-center bg-no-repeat md:w-[350px] md:h-[250px] lg:mt-0 lg:w-[250px] lg:h-[250px] transform -translate-x-4 md:-translate-x-6 lg:-translate-x-7"
  src={AboutImage}
  alt="Profile"
/>

      </div>
    </div>
  );
}

export default About;
