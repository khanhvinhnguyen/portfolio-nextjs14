import React from "react";
import Image from "next/image";
import Link from "next/link";

import lixiSocialImg from "/public/assets/projects/lixiSocial.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { Router } from "next/router";

const lixiSocial = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={lixiSocialImg}
          alt="/"
        />

        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] text-white z-10">
          <h2 className="py-2">Lixi Social</h2>
          <h3>Position: Full-stack Developer</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>Write description app/web here</p>

          <button className="px-8 py-2 mt-4 mr-8">
            <a
              target="_blank"
              href="https://lixi.social/"
              rel="noopener noreferrer"
            >
              Trial
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              target="_blank"
              href="https://github.com/bcProFoundation/lixilotus"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 underline">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                ReactJS / NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                NodeJS / NestJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Redis
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default lixiSocial;
