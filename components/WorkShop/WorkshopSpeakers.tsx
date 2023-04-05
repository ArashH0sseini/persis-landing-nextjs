import React from "react";
import Monshipor from "../../assets/images/modir1.jpg";
import Shahkar from "../../assets/images/modir4.jpg";
import Barkatin from "../../assets/images/modir2.jpg";
import Sadat from "../../assets/images/modir3.jpg";
import WorkshopSpeakersItem from "./WorkshopSpeakersItem";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";

function WorkshopSpeakers() {
  return (
    <div>
      <div className="flex md:px-14 space-x-2 space-x-reverse items-center justify-center lg:justify-start">
        <PresentationChartLineIcon className="w-6 sm:w-7 md:mt-1 text-[#FF821E]" />
        <p className="text-[#FF821E] my-10 text-sm sm:text-lg md:text-xl font-bold lg:text-start">
          پنل - نقش هیئت مدیره در مقاطع حساس کسب‌وکار
        </p>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <WorkshopSpeakersItem name="میلاد منشی پور" image={Monshipor} />
          <WorkshopSpeakersItem name="شهرام شاهکار" image={Shahkar} />
          <WorkshopSpeakersItem name="امیراحمد برکتین" image={Barkatin} />
          <WorkshopSpeakersItem name="مهدی سادات رسول" image={Sadat} />
        </div>
      </div>
    </div>
  );
}

export default WorkshopSpeakers;
