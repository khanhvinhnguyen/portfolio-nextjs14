import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjItemProps {
  bgImg: string;
  projURL: string;
  title: string;
  mainTech: string;
}

const ProjectItem = (props: ProjItemProps) => {
  const { bgImg, projURL, title, mainTech } = props;
  return (
    <Link href={projURL}>
      <div className="relative flex items-center justify-center h-[360px] w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <div className="relative h-full w-full rounded-xl overflow-hidden">
          <Image
            className="group-hover:opacity-10 object-cover"
            src={bgImg}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{mainTech}</p>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer">
            More Info
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
