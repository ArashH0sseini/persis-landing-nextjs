import React from "react";
import quote from "../assets/images/quote.svg";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";


function WhyThisWorkshop() {
  return (
    <div className="flex flex-col items-center lg:flex-row my-20 px-12 lg:space-x-8 lg:space-x-reverse">
      <div className="w-full lg:w-[50%]">
        <div className="flex items-center space-x-2 space-x-reverse">
          <QuestionMarkCircleIcon className="w-6 sm:w-7 md:mt-1 text-[#FF821E]" />
          <h3 className="text-[#FF821E] text-base sm:text-lg md:text-xl font-bold lg:text-start">
            چرا رویداد هیئت مدیره
          </h3>
        </div>
        <div className="flex border-b-2 border-t-2 border-[#FF821E] items-center rounded-[2.5rem] p-6 mt-6">
          <p className="text-justify text-xl leading-10 ">
          استارتاپ‌ها معمولا تجربه‌ی چندانی در مواجهه با تشکیل و مدیریت هیئت مدیره ندارند. با توجه به وضعیتی که در استارتاپ‌های ایران مشاهده کردیم، برگزاری این رویداد برای انتقال دانش و تجربه به استارتاپ‌ها را لازم دیدیم تا بتوانیم گامی هر چند کوچک برای بهبود این وضعیت برداشته باشیم.
          </p>
          <p className="hidden sm:inline-block text-[10rem] text-[#FF821E] animate-pulse px-2 md:px-0">
            ؟
          </p>
          {/* <img src={question.src} alt="" className="w-40 h-40" /> */}
        </div>
      </div>
      <div className="w-full lg:w-[50%] mt-16">
        <div className="flex flex-col">
          <img
            src={quote.src}
            alt=""
            className="w-14 lg:w-20 rotate-180 mr-10" style={{animation: 'pingg2 2s cubic-bezier(0, 0, 0.2, 1) infinite'}}
          />
          <p className="text-justify text-base lg:text-lg leading-10 px-10 border-r-2 border-l-2 border-[#FF821E] mt-4">
          رید هافمن (موسس لینکدین) در جایی از پادکست Masters of Scale می‌گوید: «هیئت مدیره می‌تواند شرکت شما را موفق کند یا آن را از بین ببرد اما در واقعیت شانس این‌که باعث غرق شدن کشتی کسب‌وکار شود خیلی بیشتر از هیئت مدیره‌ای معجزه‌آسا است که بتواند شما را نجات دهد.»
          </p>
          <div className="flex justify-end ml-10">
            <img src={quote.src} alt="" className="w-14 lg:w-20" style={{animation: 'pingg 2s cubic-bezier(0, 0, 0.2, 1) infinite'}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyThisWorkshop;
