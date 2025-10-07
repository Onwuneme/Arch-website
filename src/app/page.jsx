"use client";

import { createContext } from "react";
import useFetch from "./components/hook/useFetch";
import Slider from "./components/Slider";
import HomePageWelcome from "./components/HomePageWelcome";
import AboutHero from "./components/AboutHero";
import PorfolioHero from "./components/PortfolioHero";


export const TextContext = createContext();

export default function Home() {
  const { data } = useFetch("/data.json");

  return (
    <div className=" md:px-20 lg:px-30">
      <TextContext.Provider value={{ data }}>
        <Slider />
        <HomePageWelcome/>
        <AboutHero/>
        <PorfolioHero/>
      </TextContext.Provider>
    </div>
  );
}
