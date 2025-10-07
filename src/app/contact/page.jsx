"use client";

import Image from "next/image";
import useFetch from "../components/hook/useFetch";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";

export default function ContactPage() {
  const { data } = useFetch("/data.json");
  if (!data || !data.contactData) return [];
  const contact = data.contactData;
  return (
    <div className=" max-w-[1380px] mx-auto px-5 md:px-20 lg:px-30">
      <div className=" relative md:flex items-end ">
        <div className=" relative w-full md:h-[600px] h-[400px]  ">
          <Image
            src={contact.hero.image.mobile.replace("./", "/")}
            fill
            alt={`image`}
            className=" object-cover md:hidden "
          />
          <Image
            src={contact.hero.image.tablet.replace("./", "/")}
            fill
            alt={`image`}
            className=" object-cover hidden md:block lg:hidden"
          />
          <Image
            src={contact.hero.image.desktop.replace("./", "/")}
            fill
            alt={`image`}
            className="object-cover hidden lg:block max-w-[600px]"
          />
        </div>

        <div className=" md:absolute relative right-0 bottom-0  w-full bg-white md:w-[400px] lg:w-[600px] md:h-[400px] flex justify-center items-end">
          <div className="md:max-w-[350px]">
            <h1 className=" text-[5rem] md:text-[7rem] lg:text-[10rem] font-bold absolute -top-15  md:-top-20 lg:-top-30 left-0 md:-left-20 lg:-left-50 text-neutral-300 capitalize ">
              {contact.hero.headingLarge}
            </h1>
            <h1 className=" text-5xl font-bold mt-30 md:mt-0">
              {contact.hero.heading}
            </h1>
            <p className="mt-5">{contact.hero.paragraph}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  gap-20 md:gap-30  items-start mt-20 md:mt-30 ">
        <h1 className="text-5xl font-bold">
          contact <br /> details
        </h1>
        <div>
          <div className=" flex flex-col lg:flex-row gap-10  ">
            {contact?.sectionDetailsAndMap?.offices?.map((office, i) => (
              <div key={i} className="space-y-6 ">
                <h2>{office.name}</h2>
                <div className="flex gap-5">
                  <div className=" flex flex-col space-y-4">
                    <span>Mail:</span>
                    <span>Address:</span>
                    <span>Phone:</span>
                  </div>
                  <div className=" flex flex-col space-y-4 ">
                    <span>{office.mail}</span>
                    <span className="whitespace-nowrap">{office.address}</span>
                    <span>{office.phone}</span>
                  </div>
                </div>
                <button className=" flex gap-5 items-center">
                  <h2>view on map</h2>
                  <FaArrowRightLong />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8347375.454346558!2d-92.40513392486666!3d30.791919377610693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA%2C%20USA!5e0!3m2!1sen!2sng!4v1758812342726!5m2!1sen!2sng"
          width="1000"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
        <div className="w-full p-6  md:flex gap-20  ">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 w-60">Connect with us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 placeholder-gray-400"
            />
            <textarea
              placeholder="Message"
              rows="3"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 placeholder-gray-400 resize-none"
            ></textarea>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black text-white w-12 h-12 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </form>
        </div>
      
    </div>
  );
}
