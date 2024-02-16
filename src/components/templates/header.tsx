"use client";
import Link from "next/link";
import { useState } from "react";

import { NavbarType } from "@/types/Portfolio.types";

import SVGIcon from "@/components/icons/SVGIcon";
import SkillsIcon from "@/components/icons/SkillsIcon";
import NazmulSmIcon from "@/components/icons/nazmulSmIcon";
import ProjectsIcon from "@/components/icons/ProjectsIcon";
import ExperiencesIcon from "@/components/icons/Experiences";
import EducationIcon from "@/components/icons/EducationIcon";
import ResumeIcon from "@/components/icons/ResumeIcon";

import ThemeButton from "./themeButton";
import NazmulIcon from "../icons/NazmulIcon";

interface HeaderProps {
  navbar: NavbarType;
  name: string;
}
const Header = ({ navbar, name }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getIcon = (path: string) => {
    switch (path) {
      case "/":
        return <SVGIcon icon={NazmulSmIcon} size={36} />;
      case "/skills":
        return <SVGIcon icon={SkillsIcon} size={20} />;
      case "/projects":
        return <SVGIcon icon={ProjectsIcon} size={20} />;
      case "/experiences":
        return <SVGIcon icon={ExperiencesIcon} size={20} />;
      case "/education":
        return <SVGIcon icon={EducationIcon} size={20} />;
      case "/resume":
        return <SVGIcon icon={ResumeIcon} size={20} />;
      default:
        return <SVGIcon icon={SkillsIcon} size={20} />;
    }
  };

  return (
    <div className="flex justify-center sticky top-0 z-10 px-2 h-12 bg-main border-b border-secondary">
      <nav className="w-full xl:max-w-5xl lg:max-w-screen-md mx-auto flex flex-row items-center text-sm">
        <Link
          href="/"
          className="decoration-none px-4 self-stretch items-center cursor-pointer flex-row flex w-auto hover:bg-main-hover transition ease-in-out"
        >
          <span className="md:hidden">
            <SVGIcon
              icon={NazmulSmIcon}
              size={36}
              pathClassName="text-secondary-text"
            />
          </span>
          <span className="hidden md:inline-block">
            <SVGIcon
              icon={NazmulIcon}
              width={60}
              height={36}
              pathClassName="text-secondary-text"
            />
          </span>
        </Link>
        <div className="flex-1 block overflow-hidden md:hidden tracking-widest whitespace-nowrap text-ellipsis text-center">
          {name}
        </div>
        <div className=" hidden md:flex flex-row flex-1 self-center h-full justify-center">
          {navbar.names.map((item, index) => (
            <Link
              key={`${item.name}-${index}`}
              href={item.href}
              className=" font-normal px-5 py-2 flex gap-2 items-center border-b-3 border-transparent hover:bg-main-hover transition ease-in-out"
            >
              {getIcon(item.href)}
              <span className="hidden lg:inline-block">{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <ThemeButton />
        </div>
        <button
          className="text-secondary-text w-10 h-10 md:hidden relative focus:outline-none "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute w-5 h-px bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute w-4 h-px bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute w-5 h-px bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Mobile view modal nav */}
      <div
        className={` h-screen-nav w-full absolute top-12 left-0 bg-main transform transition duration-500 ease-in-out md:hidden ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-screen"
        }`}
      >
        <div className="flex-col flex-1 self-center justify-center mt-7">
          {navbar.names.map((item, index) => (
            <Link
              key={`${item.name}-${index}`}
              href={item.href}
              className=" font-normal px-5 py-2 flex gap-5 items-center border-b-3 border-transparent hover:bg-main-hover transition ease-in-out"
            >
              {getIcon(item.href)}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        <div className=" flex flex-col mt-7 gap-2">
          <ThemeButton modalMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
