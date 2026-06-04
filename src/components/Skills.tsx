import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { skillCategories } from "@/data/constants";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 py-16">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 capitalize">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="shadow-xl shadow-gray-400 rounded-xl p-5 hover:scale-[1.02] ease-in duration-300"
            >
              <h3 className="font-bold text-[#5651e5] mb-3">{category.title}</h3>
              <ul className="space-y-1">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-600 text-sm flex items-start gap-1"
                  >
                    <RiRadioButtonFill className="text-[#5651e5] mt-1 shrink-0" size={12} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
