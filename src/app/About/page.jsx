import React from "react";
import Image from "next/image";
import Skills from "./_components/Skills";
import Timeline from "./_components/Timeline";

function Page() {
  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-12 md:gap-16 lg:gap-20 xl:gap-32 bg-gradient-to-b from-purple-300 to-red-300">
      {/* Biography */}
      <div className="flex items-center gap-12 md:gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-md">
            As a highly passionate and self-motivated individual, I am
            constantly driven by a desire to learn and explore new realms of
            knowledge. My key areas of interest lie in machine learning,
            artificial intelligence, and software development. I am dedicated to
            advancing my skills in these fields and applying innovative
            solutions to real-world problems. In addition to my professional
            focus, I am an avid competitive programmer, enjoying the challenge
            of solving complex problems and optimizing algorithms. This not only
            hones my technical abilities but also enhances my critical thinking
            and problem-solving skills. My objective is to leverage my expertise
            in machine learning and AI to develop cutting-edge technologies that
            can make a significant impact on society.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image src="/profile.png" height={400} width={400} />
        </div>
      </div>

      {/* Skills */}
      <div className="w-full flex justify-center">
        <Skills />
      </div>

      {/* Education and Timeline */}
      <div className="flex flex-col gap-6 pb-25">
        <h1 className="font-bold text-5xl text-center md:text-left">
          EDUCATION
        </h1>
        <Timeline />
      </div>
    </div>
  );
}

export default Page;
