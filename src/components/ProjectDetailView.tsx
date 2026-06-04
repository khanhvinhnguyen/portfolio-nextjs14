"use client";

import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import type { ProjectRecord } from "@/data/projects";

type ProjectDetailViewProps = {
  project: ProjectRecord;
};

function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
  );
}

const ProjectDetailView = ({ project }: ProjectDetailViewProps) => {
  const { detail, imgData, title } = project;
  const images = imgData?.length ? imgData : [{ src: project.bgImg, alt: title }];
  const hasMultipleImages = images.length > 1;

  return (
    <div className="w-full pb-16">
      <div className="w-full h-[30vh] lg:h-[40vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

        {hasMultipleImages ? (
          <Swiper
            className="home-slider-introduce h-full w-full"
            loop
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
          >
            {images.map((item, index) => (
              <SwiperSlide key={`${item.src}-${index}`} className="relative h-full">
                <HeroImage src={item.src} alt={item.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="relative h-full w-full">
            <HeroImage src={images[0].src} alt={images[0].alt} />
          </div>
        )}

        <div className="absolute top-[70%] max-w-[1240px] w-full left-1/2 -translate-x-1/2 text-white z-20 px-4">
          <h2 className="py-2">{title}</h2>
          <h3>{detail.position}</h3>
          <p className="text-sm opacity-90">{detail.duration}</p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 px-4">
        <div className="col-span-4">
          <p className="uppercase text-sm text-[#5651e5] tracking-widest">Project</p>
          <h2 className="py-2">Overview</h2>
          <p className="text-gray-600">{detail.description.overview}</p>

          <h3 className="pt-4">Responsibilities</h3>
          <ul className="space-y-2 pt-2">
            {detail.description.responsibilities.map((item, index) => (
              <li
                key={index}
                className="text-gray-600 flex items-start gap-2"
              >
                <RiRadioButtonFill className="text-[#5651e5] mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 mt-6">
            {detail.linkTrial ? (
              <Link
                href={detail.linkTrial}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-2 text-sm uppercase"
              >
                Live Demo
              </Link>
            ) : null}
            {detail.linkCode ? (
              <Link
                href={detail.linkCode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-2 text-sm uppercase bg-transparent text-gray-700 shadow-none border-2 border-[#5651e5] rounded-xl"
              >
                View Code
              </Link>
            ) : null}
          </div>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 h-fit">
          <p className="text-center font-bold pb-2 underline">Technologies</p>
          <ul className="space-y-2">
            {detail.technical.map((tech) => (
              <li key={tech} className="text-gray-600 flex items-center gap-2">
                <RiRadioButtonFill className="text-[#5651e5] shrink-0" />
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;
