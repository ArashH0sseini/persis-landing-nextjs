import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

function PriceList() {
  return (
    <section>
      <div className=" px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="items-center grid grid-cols-1 md:grid-cols-2 md:mb-14 lg:grid-cols-3 flow-col gap-6 xl:gap-10 lg:space-y-0">
          <div className="flex flex-col p-6 justify-between mx-auto max-w-lg w-80 h-[350px] text-center rounded-[2rem] border shadow border-gray-600 xl:p-8 bg-gray-800 text-white">
            <h3 className="mb-4 text-2xl font-semibold">شرکت در پنل‌ها</h3>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">۶۰,۰۰۰</span>
              <span className=" text-gray-400">/تومان</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-2 space-x-reverse">
              <CheckBadgeIcon className="w-6 text-green-400" />
                <span>ویژگی شماره یک</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <CheckBadgeIcon className="w-6 text-green-400" />
                <span>ویژگی شماره دو</span>
              </li>
            </ul>
            <Link href="#contact">
              <button className=" text-white text-center text-sm w-[80%] mx-auto px-2 py-2.5 rounded-full sm:text-base border-[3px] border-b-0">ثبت درخواست</button>
             </Link>
          </div>

          <div className="flex flex-col p-6 md:row-span-2 lg:row-span-1 justify-between mx-auto max-w-lg w-80 h-[400px] text-center rounded-[2rem] border shadow border-gray-600 xl:p-8 bg-[#FF821E] text-white">
            <h3 className="mb-4 text-2xl font-semibold">کارگاه‌ها و پنل</h3>
            
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">۳,۰۰۰,۰۰۰</span>
              <span
                className=" text-gray-100"
              >
                /تومان
              </span>
            </div>

           <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-2 space-x-reverse">
                <CheckBadgeIcon className="w-6 text-white" />
                <span>ویژگی شماره یک</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <CheckBadgeIcon className="w-6 text-white" />
                <span>ویژگی شماره دو</span>
              </li>
            </ul>
            <Link href="#contact">
              <button className=" text-white text-center text-sm w-[80%] mx-auto px-2 py-2.5 rounded-full sm:text-base border-[3px] border-b-0">ثبت درخواست</button>
             </Link>
          </div>

          <div className="flex flex-col p-6 justify-between mx-auto max-w-lg w-80 h-[350px] text-center rounded-[2rem] border shadow border-gray-600 xl:p-8 bg-gray-800 text-white">
            <h3 className="mb-4 text-2xl font-semibold">شرکت در کارگاه‌ها</h3>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">۶۰,۰۰۰</span>
              <span className=" text-gray-400">/تومان</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-2 space-x-reverse">
              <CheckBadgeIcon className="w-6 text-green-400" />
                <span>ویژگی شماره یک</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <CheckBadgeIcon className="w-6 text-green-400" />
                <span>ویژگی شماره دو</span>
              </li>
            </ul>
            <Link href="#contact">
              <button className=" text-white text-center text-sm w-[80%] mx-auto px-2 py-2.5 rounded-full sm:text-base border-[3px] border-b-0">ثبت درخواست</button>
             </Link>
          </div>

        </div>
        
      </div>
    </section>
  );
}

export default PriceList;
