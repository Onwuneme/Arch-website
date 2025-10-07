"use client";

import Image from "next/image";
import useFetch from "../components/hook/useFetch";

export default function PortfolioPage() {
  const { data } = useFetch(`/data.json`);
  const portfolio = data?.portfolioData || [];

  return (
    <div className="grid max-w-[1380px] mx-auto  mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-20 lg:px-30">
      {portfolio.map((p, index) => (
        <div key={p.id} className="relative group">
          {/* Image wrapper */}
          <div className="w-full h-[350px] sm:h-[450px] md:h-[550px] overflow-hidden">
            <Image
              src={p.image.mobile.replace("./", "/")}
              alt={p.title}
              width={800}
              height={600}
              className="md:hidden object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
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

        
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            

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
  );
}
