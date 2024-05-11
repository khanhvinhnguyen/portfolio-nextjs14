import React from "react";
import Image from "next/image";
import Link from "next/link";

import ProjectItem from "./ProjectItem";
import lixiSocial from "/public/assets/projects/lixiSocial.png";
import abcPayWallet from "/public/assets/projects/lixiSocial.png";

const ProjectList: {
  title: string;
  bgImg: any;
  projURL: string;
  mainTech: string;
}[] = [
  {
    title: "Lixi Social",
    bgImg: lixiSocial,
    projURL: "/lixiSocial",
    mainTech: "NextJS + NestJS",
  },
  {
    title: "AbcPay Wallet",
    bgImg: abcPayWallet,
    projURL: "/abcPay",
    mainTech: "Angular + Ionic",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className={ProjectList.length <= 2 ? "w-full h-screen" : "w-full"}
    >
      <div className="max-w-[1240px] mx-auto px-2 py-20">
        <p className="text-xl text-[#5651e5] uppercase tracking-widest">
          Projects
        </p>
        <h2 className="py-4 uppercase">What I've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {ProjectList.map((project) => {
            return (
              <ProjectItem
                title={project.title}
                bgImg={project.bgImg}
                projURL={project.projURL}
                mainTech={project.mainTech}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
