"use client";
import { useState, useContext } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { TextContext } from "../page";
import Link from "next/link";

export default function Slider() {
  const { data } = useContext(TextContext);
  const [current, setCurrent] = useState(0);

  if (!data || !data.slider) return null;

  const slide = data.slider[current];

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {data.slider.map((s, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}

          >
             <Image
              src={s.images.mobile.replace("./", "/")}
              alt={s.title}
              fill
              className="object-cover md:hidden "
              priority={index === current}
            />
             <Image
              src={s.images.tablet.replace("./", "/")}
              alt={s.title}
              fill
              className="object-cover hidden md:block lg:hidden"
              priority={index === current}
            />
            <Image
              src={s.images.desktop.replace("./", "/")}
              alt={s.title}
              fill
              className="object-cover hidden lg:block"
              priority={index === current}
            />
          </div>
        ))}
      </div>

      {/* Overlay content */}
      <div className=" absolute inset-0 bg-black/40 flex flex-col justify-center px-10 md:px-20 text-white transition-all duration-700 ease-in-out">
        <h1 className="text-4xl md:text-6xl font-bold max-w-xl">
          {slide.title}
        </h1>
        <p className="max-w-md mt-4 text-lg">{slide.content}</p>

        <Link
          href={`/portfolio`}
          className="mt-6 w-fit bg-black text-white px-6 py-5 flex items-center gap-2 hover:bg-white hover:text-black transition duration-500"
        >
          See Our Portfolio <FaArrowRight />
        </Link>
      </div>

      {/* Numbered navigation */}
      <div className="absolute bottom-0 left-0   w-full flex">
        {data.slider.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`flex py-4 px-6 text-lg font-medium transition-colors duration-500 ${
              index === current
                ? "bg-black text-white"
                : "bg-white text-gray-600 hover:bg-gray-200"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </div>
  );
}
