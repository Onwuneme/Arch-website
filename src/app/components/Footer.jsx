"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className=" max-w-[1380px] mx-auto md:px-20 lg:px-30 mt-30 md:pr-30">
      <div className="  py-10 bg-neutral-200 mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative">
        {/* Logo */}
        <div className=" absolute -top-10 md:top-0 md:left-0 w-30 md:h-full h-30 bg-black p-6 flex justify-center items-center">
          <Link href="/">
            <Image
              src="/assets/icons/logo-white.svg"
              width={100}
              height={100}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="grid md:grid-cols-3 gap-10 py-20 md:py-0 md:px-40 text-lg font-semibold">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        
        <Link
          href="/"
          className=" md:absolute -right-20 px-8 py-6 bg-black text-white font-semibold inline-flex items-center gap-3 hover:bg-white hover:text-black transition duration-500"
        >
          See Our Portfolio <FaArrowRight />
        </Link>
      </div>
    </footer>
  );
}
