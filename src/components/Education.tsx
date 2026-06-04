import Image from "next/image";
import React from "react";
import { educations } from "@/data/constants";

const Education = () => {
  return (
    <div id="education" className="w-full p-2 py-16">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Education
        </p>
        <h2 className="py-4 capitalize">Background</h2>
        <div className="grid md:grid-cols-1 gap-6 mb-10">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="shadow-xl shadow-gray-400 rounded-xl p-6 flex gap-4"
            >
              <Image
                src={edu.img}
                alt={edu.school}
                width={56}
                height={56}
                className="object-contain shrink-0"
                unoptimized
              />
              <div>
                <h3 className="font-bold">{edu.school}</h3>
                <p className="text-gray-600">{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.date}</p>
                {edu.grade && (
                  <p className="text-sm text-[#5651e5] mt-1">{edu.grade}</p>
                )}
                {edu.desc && (
                  <p className="text-sm text-gray-600 mt-2">{edu.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
