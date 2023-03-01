import { FireIcon } from "@heroicons/react/24/outline";
import bamilo from "../assets/images/bamilo.png";
import bimehbazaar from "../assets/images/bimehbazaar.png";
import filmnet from "../assets/images/filmnet.png";
import homing from "../assets/images/homing.png";
import mrbilit from "../assets/images/mrbilit.png";
import fidilio from "../assets/images/fidilio.png";
import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function Sponsors() {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <div className="mb-20">
      <div className="flex px-14 space-x-2 space-x-reverse items-center justify-center">
        <FireIcon className="w-8 text-[#FF821E]" />
        <p className="text-[#FF821E] my-10 text-lg md:text-xl font-bold text-center lg:text-start">
          اسپانسرهای رویداد
        </p>
      </div>
      <div
        className="flex space-x-3 overflow-x-scroll scrollbar-hide"
        {...events}
        ref={ref} // add reference and events to the wrapping div
      >
        <img src={bamilo.src} alt="" />
        <img src={bimehbazaar.src} alt="" />
        <img src={filmnet.src} alt="" />
        <img src={fidilio.src} alt="" />
        <img src={homing.src} alt="" />
        <img src={mrbilit.src} alt="" />
        <img src={bamilo.src} alt="" />
        <img src={bimehbazaar.src} alt="" />
        <img src={filmnet.src} alt="" />
        <img src={fidilio.src} alt="" />
        <img src={homing.src} alt="" />
        <img src={mrbilit.src} alt="" />
        <img src={bamilo.src} alt="" />
        <img src={bimehbazaar.src} alt="" />
        <img src={filmnet.src} alt="" />
        <img src={fidilio.src} alt="" />
        <img src={homing.src} alt="" />
        <img src={mrbilit.src} alt="" />
        <img src={bamilo.src} alt="" />
        <img src={bimehbazaar.src} alt="" />
        <img src={filmnet.src} alt="" />
        <img src={fidilio.src} alt="" />
        <img src={homing.src} alt="" />
        <img src={mrbilit.src} alt="" />
      </div>
    </div>
  );
}

export default Sponsors;
