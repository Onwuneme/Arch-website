"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-10">
      {/* Top Navbar */}
      <nav className="p-5 max-w-[1380px] mx-auto md:py-15 lg:px-30 flex justify-between md:justify-start gap-10 items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            width={100}
            height={100}
            alt="Logo"
            className=" auto"
          />
        </Link>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-30 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <MdClose className="h-7 w-7 transition-transform duration-300" />
          ) : (
            <RxHamburgerMenu className="h-7 w-7 transition-transform duration-300" />
          )}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-lg font-semibold">
          <NavLink label="Portfolio" herf="/portfolio" />
           <NavLink label="About" herf="/about" />
           <NavLink label="Contact" herf="/contact" />
        </div>
      </nav>

   
      <div
        className={` md:hidden absolute top-0 left-0 w-full mt-20  bg-white flex flex-col items-center gap-6 py-16 text-lg font-medium transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <Link href="/portfolio" onClick={() => setIsOpen(false)}>
          Portfolio
        </Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>
          About Us
        </Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
    </header>
  );
}
