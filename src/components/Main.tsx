"use client";
import ContactItems from "@/common/ContactItems";
import { Bio } from "@/data/constants";
import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            {Bio.tagline}
          </p>

          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m{" "}
            <span className="text-[#5651e5]">{Bio.name}</span>
          </h1>
          <h1 className="py-2 text-gray-700">{Bio.title}</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">{Bio.description}</p>

          {/* <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link
              href={Bio.resume}
              target="_blank"
              className="px-8 py-3 text-sm uppercase"
            >
              View Resume
            </Link>
            <Link href="/#experience" className="px-8 py-3 text-sm uppercase bg-transparent text-gray-700 shadow-none border-2 border-[#5651e5] rounded-xl">
              Experience
            </Link>
          </div> */}

          <ContactItems />
        </div>
      </div>
    </div>
  );
};

export default Main;
