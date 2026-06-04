import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { experiences } from "@/data/constants";

const Experience = () => {
  return (
    <div id="experience" className="w-full p-2 py-16">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Experience
        </p>
        <h2 className="py-4 capitalize">Where I&apos;ve Worked</h2>
        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="shadow-xl shadow-gray-400 rounded-xl p-6"
            >
              <div className="flex gap-4 items-start mb-4">
                <Image
                  src={exp.img}
                  alt={exp.company}
                  width={48}
                  height={48}
                  className="rounded-lg bg-white object-contain"
                  unoptimized
                />
                <div>
                  <h3 className="font-bold text-lg">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.date}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-600 text-sm flex items-start gap-2"
                  >
                    <RiRadioButtonFill className="text-[#5651e5] mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">Tech: </span>
                {exp.tech.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
