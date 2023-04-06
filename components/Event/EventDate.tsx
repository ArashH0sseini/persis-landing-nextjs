import { MicrophoneIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import React from "react";

function EventDate() {
  return (
    <div className="my-20 lg:mt-0 space-y-6">
      <div className="flex px-14 space-x-2 space-x-reverse items-center justify-center">
        <CalendarDaysIcon className="w-8 text-[#FF821E]" />
        <p className="text-[#FF821E] my-10 text-lg md:text-xl font-bold text-center lg:text-start">
          تاریخ برگزاری
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] lg:w-[80%] space-y-10 md:space-y-0 m-auto">
        <div className="flex justify-between items-center space-x-4 space-x-reverse ring-2 ring-[#FF821E] md:ring-0 md:p-0 p-6 rounded-2xl w-72 md:w-auto">
          <div className="flex items-center justify-center">
            <MicrophoneIcon className="relative w-16 text-white bg-[#FF821E] rounded-full p-[13px] z-10" />
            <div className="absolute bg-[#FF821E]/10 w-20 h-20 rounded-full animate-ping" />
          </div>
          <div className="flex flex-col md:w-full space-y-2">
            <p className="text-[#FF821E] text-lg font-bold">۱۳ اردیبهشت</p>
            <div className="space-y-1">
              <p className="text-white text-sm md:text-base">
                پنل نقش هیئت مدیره
              </p>
              <p className="text-white text-sm md:text-base">
                در مقاطع حساس کسب و کار
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center space-x-4 space-x-reverse ring-2 ring-[#FF821E] md:ring-0 md:p-0 p-6 rounded-2xl w-72 md:w-auto">
          <div className="flex items-center justify-center">
            <LightBulbIcon className="relative w-16 text-white bg-[#FF821E] rounded-full p-[13px] z-10" />
            <div className="absolute bg-[#FF821E]/10 w-20 h-20 rounded-full animate-ping" />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-[#FF821E] text-lg font-bold">۱۴ اردیبهشت</p>
            <div className="space-y-1">
              <p className="text-white text-sm md:text-base">
                کارگاه مفاهیم مالی
              </p>
              <p className="text-white text-sm md:text-base">
                کارگاه مبانی حاکمیت شرکتی
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center space-x-4 md:space-x-reverse ring-2 ring-[#FF821E] md:ring-0 md:p-0 p-6 rounded-2xl w-72 md:w-auto">
          <div className="flex items-center justify-center">
            <MicrophoneIcon className="relative w-16 text-white bg-[#FF821E] rounded-full p-[13px] z-10" />
            <div className="absolute bg-[#FF821E]/10 w-20 h-20 rounded-full animate-ping" />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-[#FF821E] text-lg font-bold">۱۵ اردیبهشت</p>
            <div className="space-y-1">
              <p className="text-white text-sm md:text-base">
                کارگاه مدیریت ارتباطات
              </p>
              <p className="text-white text-sm md:text-base">
                کارگاه مدیریت ریسک
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDate;
