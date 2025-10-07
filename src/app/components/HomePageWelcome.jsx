"use client";
import { useContext } from "react";
import { TextContext } from "../page";
import Image from "next/image";

export default function HomePageWelcome() {
  const { data } = useContext(TextContext);
  if (!data || !data.HomePageWelcome) return null;

  const welcomeData = data.HomePageWelcome;

  return (
    <section className="relative h-[700px] md:flex items-center flex-row-reverse justify-between gap-5 px-6 md:px-0 py-20">
     
      <div className="hidden md:block w-[400px] h-[600px] relative">
        <Image
          src={welcomeData.img.replace("./", "/")}
          fill
          className="object-cover"
          alt="Building"
          priority
          
        />
      </div>

    
      <div className="relative max-w-[500px]  ">
       
        <h1 className="md:absolute top-0 left-0 text-[70px] md:text-[140px] lg:text-[170px] xl:text-[200px] font-bold text-neutral-200 leading-none z-0">
          Welcome
        </h1>

        <div className="relative space-y-6 mt-16 pt-10 md:mt-32 z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black">
            {welcomeData.heading}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {welcomeData.paragraphs.one}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {welcomeData.paragraphs.two}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {welcomeData.paragraphs.three}
          </p>
        </div>
      </div>
    </section>
  );
}
