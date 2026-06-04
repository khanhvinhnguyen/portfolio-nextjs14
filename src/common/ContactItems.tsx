import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Bio } from "@/data/constants";

const ContactItems = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-4 m-auto py-4 max-w-[400px]">
      <Link
        href={Bio.linkedin}
        target="_blank"
        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href={Bio.github}
        target="_blank"
        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
        aria-label="GitHub"
      >
        <FaGithub />
      </Link>
      <Link
        href={`mailto:${Bio.email}`}
        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
        aria-label="Email"
      >
        <AiOutlineMail />
      </Link>
      <Link
        href={Bio.resume}
        target="_blank"
        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
        aria-label="Resume"
      >
        <HiOutlineDocumentText />
      </Link>
      <Link
        href="/#contact"
        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
        aria-label="Contact form"
      >
        <BsFillPersonLinesFill />
      </Link>
    </div>
  );
};

export default ContactItems;
