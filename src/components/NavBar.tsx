"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaArrowLeft, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Logo from "/public/next.svg";
import { Bio } from "@/data/constants";

const contactData = {
  linkedIn: Bio.linkedin,
  github: Bio.github,
  email: Bio.email,
  resume: Bio.resume,
};

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const pathname = usePathname();

  const { linkedIn, github, email, resume } = contactData;

  useEffect(() => {
    const handleNavBg = () => {
      if (pathname !== "/") {
        if (window.scrollY < 123) {
          setNavBg("transparent");
          setLinkColor("#ecf0f3");
        } else {
          setNavBg("#ecf0f3");
          setLinkColor("#1f2937");
        }
      } else {
        setNavBg("#ecf0f3");
        setLinkColor("#1f2937");
      }
    };

    handleNavBg();
    window.addEventListener("scroll", handleNavBg);

    return () => {
      window.removeEventListener("scroll", handleNavBg);
    };
  }, [pathname]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 123) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    handleShadow();
    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div
        className="flex justify-between items-center w-full h-full px-6 2xl:px-16"
        style={{
          justifyContent: pathname !== "/" ? "space-between" : "flex-end",
        }}
      >
        {/* Logo */}
        {/* <Link href="/">
          <Image src={Logo} alt="" width="125" height="50" />
        </Link> */}
        {pathname !== "/" && (
          <Link href="/#projects">
            <p
              className="flex gap-4 items-center cursor-pointer"
              style={{ color: `${linkColor}` }}
            >
              <FaArrowLeft />
              BACK
            </p>
          </Link>
        )}

        {/* Side bar */}
        <div>
          {/* Desktop */}
          <ul className="hidden md:flex" style={{ color: `${linkColor}` }}>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#experience">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Experience
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#education">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Education
              </li>
            </Link>
            {/* <Link href={resume} target="_blank">
              <li className="ml-10 text-sm uppercase hover:border-b">Resume</li>
            </Link> */}
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* NavBar */}
      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            {/* Logo */}
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={Logo} alt="" width="87" height="35" />
              </Link>

              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 pt-4" />

            {/* Menu */}
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/#experience">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Experience
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#education">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Education
                  </li>
                </Link>
                {/* <Link href={resume} target="_blank">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Resume
                  </li>
                </Link> */}
                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>

            {/* Social network */}
            <div className="pt-40">
              <p className="uppercase tracking-widest text-purple-400">
                Let's Connect
              </p>

              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  href={linkedIn}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href={github}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaGithub />
                </Link>
                <Link
                  href={`mailto:${email}`}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <AiOutlineMail />
                </Link>
                <Link
                  href="/#contact"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <BsFillPersonLinesFill />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
