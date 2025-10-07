"use client";
import { FaArrowRight } from "react-icons/fa6";
import { useContext } from "react";
import { TextContext } from "../page";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  const { data } = useContext(TextContext);
  if (!data || !data.HomePageBannerImgs) return null;
  const about = data.HomePageBannerImgs;

  return (
    <section className="relative w-full  overflow-hidden ">
      {/* Responsive images */}
      <div>
        {/* Mobile */}
        <Image
          src={about.mobile.replace("./", "/")}
          width={800}
          height={600}
          alt="About Hero Mobile"
          className="md:hidden w-full object-cover"
          priority
        />
        {/* Tablet */}
        <Image
          src={about.tablet.replace("./", "/")}
          width={1200}
          height={800}
          alt="About Hero Tablet"
          className="hidden md:block lg:hidden w-full object-cover"
          priority
        />
        {/* Desktop */}
        <Image
          src={about.desktop.replace("./", "/")}
          width={1600}
          height={900}
          alt="About Hero Desktop"
          className="hidden lg:block w-full object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/55">
        <div className=" space-y-8 px-6">
          <h2 className="text-white text-2xl md:text-3xl xl:text-4xl font-bold">
            Small team, big ideas
          </h2>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-4 bg-black text-white hover:bg-white hover:text-black transition duration-500"
          >
            About Us <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
