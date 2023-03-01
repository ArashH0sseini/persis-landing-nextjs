import { MapIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import Hotel1 from "../assets/images/hotel1.jpg";
import Hotel2 from "../assets/images/hotel2.jpg";
import Hotel3 from "../assets/images/hotel3.jpg";
import Carousel from "./Carousel";

const CARDS = 3;

const Location = () => (
  <>
    <div className="flex px-14 space-x-2 space-x-reverse items-center justify-center">
      <MapIcon className="w-8 text-[#FF821E]" />
      <p className="text-[#FF821E] my-10 text-lg md:text-xl font-bold text-center lg:text-start">
      محل برگزاری - هتل فردوسی
      </p>
    </div>
    <div className="flex items-center justify-center">
      <Carousel>
        <img src={Hotel1.src} alt=""  className='w-full rounded-2xl' />
        <img src={Hotel2.src} alt=""  className='w-full h-[75%] rounded-2xl' />
        <img src={Hotel3.src} alt=""  className='w-full rounded-2xl' />
      </Carousel>
    </div>
  </>
);

export default Location;
