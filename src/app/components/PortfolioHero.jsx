"use client";

import { useContext } from "react";
import { TextContext } from "../page";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function PortfolioHero() {
  const { data } = useContext(TextContext);
  if (!data || !data?.portfolioData) return null;

  // Get only portfolio items with id 4, 5, and 6
  const portfolio = data.portfolioData.filter((p) => [4, 5, 6].includes(p.id));

  return (
    <section className="px-6 py-12 space-y-12">
      {/* Section heading */}
      <div className=" flex justify-center md:justify-between">
        <h1 className=" text-3xl md:text-5xl font-bold">Featured</h1>
        <Link
          href="/"
          className="hidden md:inline-flex  items-center gap-2 px-6 py-4 bg-black text-white hover:bg-white hover:text-black transition duration-500"
        >
          See All <FaArrowRight />
        </Link>
      </div>

      {/* Featured portfolio items */}
      <div className="grid mt-12 grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((p, index) => (
          <div key={p.id} className="relative group">
            {/* Image wrapper */}
            <div className="w-full h-[350px] sm:h-[450px] md:h-[550px] overflow-hidden">
              <Image
                src={p.image.mobile.replace("./", "/")}
                alt={p.title}
                width={800}
                height={600}
                className=" md:hidden object-cover  w-full h-full transition-transform duration-500 group-hover:scale-105"
                priority={index === 0}
              />
              <Image
                src={p.image.tablet.replace("./", "/")}
                alt={p.title}
                width={800}
                height={600}
                className="hidden md:block object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                priority={index === 0}
              />
            </div>

            {/* Overlay text */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
              {/* Giant index number */}
              <h1 className="absolute top-0 right-4 text-[200px] md:text-[250px] lg:text-[300px] font-bold text-white/20 leading-none">
                {index + 1}
              </h1>

              {/* Title and date */}
              <div className="relative z-10">
                <h2 className="text-white text-xl md:text-2xl font-bold">
                  {p.title}
                </h2>
                <p className="text-neutral-200">{p.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-center md:hidden">
        <Link
          href="/"
          className=" inline-flex  items-center gap-2 px-6 py-4 bg-black text-white hover:bg-white hover:text-black transition duration-500"
        >
          See All <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
