"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { NavbarType } from "@/types/Portfolio.types";
import { usePathname } from "next/navigation";
import SVGIcon from "../icons/SVGIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

const Header = ({ navbar }: { navbar: NavbarType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = navbar.names.map((item, index) => (
    <NavbarItem key={`${item}-${index}`} isActive={pathname === item.href}>
      <Link href={item.href}>{item.name}</Link>
    </NavbarItem>
  ));

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="rounded-full max-w-7xl mx-auto"
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarBrand>
          <Image
            className="md:hidden"
            src="/nazmul_sm.svg"
            alt="logo"
            width={36}
            height={36}
          />
          <Image
            className="hidden md:inline-block"
            src="/nazmul.svg"
            alt="logo"
            width={120}
            height={36}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {navItems}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/">
            <SVGIcon
              icon={GithubIcon}
              size={20}
              pathClassName="text-text-secondary"
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/">
            <SVGIcon
              icon={LinkedinIcon}
              size={20}
              pathClassName="text-text-secondary"
            />
          </Link>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <Button
          radius="full"
          color="primary"
          href="/NazmulAlam_Aug2023.pdf"
          as={Link}
          className="hidden md:flex"
        >
          Download CV
        </Button>
      </NavbarContent>

      <NavbarMenu className="mt-3 px-5 bg-light">
        <div className="bg-white p-4 rounded-2xl flex flex-col gap-4 ">
          {navItems}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
