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
                <svg
                  className="flex-shrink-0 w-5 h-5  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>ویژگی شماره یک</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <svg
                  className="flex-shrink-0 w-5 h-5  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
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
                <svg
                  className="flex-shrink-0 w-5 h-5  text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>ویژگی شماره یک</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <svg
                  className="flex-shrink-0 w-5 h-5  text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
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
                <svg
                  className="flex-shrink-0 w-5 h-5  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>ویژگی شماره یک</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <svg
                  className="flex-shrink-0 w-5 h-5  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
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
