"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import aboutImg from "/public/assets/images/profile.webp";
import { Bio } from "@/data/constants";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            {Bio.description}
          </p>
          <p className="py-2 text-gray-600">
            I specialize in Runtime UI Systems, Server-Driven UI (SDUI), visual
            editors, and internal platform development — building reusable
            component registries, dynamic rendering engines, and campaign
            management tools at scale.
          </p>
          <p className="py-2 text-gray-600">
            Strong background in frontend architecture, state management,
            performance optimization, asset delivery systems, and developer
            tooling. Based in {Bio.location}.
          </p>
          <p className="py-2 text-gray-600 text-sm">
            {Bio.email} · {Bio.phone}
          </p>
          <Link
            href="/#projects"
            className="py-2 text-gray-600 underline cursor-pointer"
          >
            Check out my latest projects
          </Link>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={aboutImg}
            alt={Bio.name}
            className="rounded-xl object-cover"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
