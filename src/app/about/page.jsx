"use client";

import Image from "next/image";
import useFetch from "../components/hook/useFetch";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

export default function AboutPage() {
  const { data } = useFetch(`/data.json`);

  if (!data || !data?.aboutData) return null;

  const about = data.aboutData;

  return (
    <div className="max-w-[1380px] mx-auto p-5 md:px-20 lg:px-30">
      <div className=" relative md:flex items-end ">
        <div className=" relative w-full md:h-[600px] h-[400px] ">
          {/* Desktop */}
          <Image
            src={about.hero.image.desktop.replace("./", "/")}
            alt={about.hero.headingLarge || "About page hero"}
            fill
            className="object-cover hidden md:block  max-w-[600px]"
            priority
          />

          {/* Tablet */}
          <Image
            src={about.hero.image.tablet.replace("./", "/")}
            alt={about.hero.headingLarge || "About page hero"}
            fill
            className="object-cover hidden sm:block md:hidden"
          />

          {/* Mobile */}
          <Image
            src={about.hero.image.mobile.replace("./", "/")}
            alt={about.hero.headingLarge || "About page hero"}
            fill
            className="object-cover block sm:hidden"
          />
        </div>
        <div className=" md:absolute relative right-0 bottom-0  w-full bg-white md:w-[400px] lg:w-[600px] md:h-[400px] flex justify-center items-end z-10">
          <div className="w-[350px] mx-auto">
            <h1 className=" text-[5rem] md:text-[7rem] lg:text-[10rem] font-bold absolute -top-15  md:-top-20 lg:-top-30 left-0 md:-left-20 lg:-left-50 text-neutral-300 capitalize ">
              {about.hero.headingLarge}
            </h1>

            <h2 className=" text-5xl font-bold mt-30 md:mt-0">
              {about.hero.heading}
            </h2>
            <p className="mt-5 ">{about.hero.paragraph}</p>
          </div>
        </div>
      </div>

      {/* Heritage Section */}
      <div className="my-30">
        <h1 className="text-3xl font-bold my-8">{about.heritage.heading}</h1>
        <div className="text-neutral-500 space-y-4">
          <p>{about.heritage.paragraphs.one}</p>
          <p>{about.heritage.paragraphs.two}</p>
          <p>{about.heritage.paragraphs.three}</p>
        </div>
      </div>

      {/* Leaders Section */}
      <div className="mb-30">
        <h1 className="text-3xl font-bold mb-10">{about.leaders.heading}</h1>
        <div className="lg:justify-self-end">
          <div className="grid lg:w-[600px] grid-cols-2 gap-8">
            {about?.leaders.leadersInfo?.map((info, i) => (
              <div key={i} className="space-y-3 relative group">
                {/* Image */}
                <div className="relative w-full h-full max-w-xs aspect-square ">
                  <Image
                    src={info.img.replace("./", "/")}
                    alt={info.name || "avatar"}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Overlay (hidden until hover) */}
                <div
                  className="absolute inset-0 flex justify-center items-center 
                      opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40"
                >
                  <div className="text-center text-white">
                    {/* Text */}
                    <h1 className="font-bold text-lg md:text-xl">
                      {info.name}
                    </h1>
                    <p className="text-sm md:text-base">{info.role}</p>

                    {/* Socials */}
                    <div className="flex gap-4 mt-3 justify-center">
                      <FaLinkedin className="w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:text-blue-400 transition" />
                      <FaTwitter className="w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:text-sky-400 transition" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
