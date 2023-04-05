import React from "react";
import persisIcon from "../assets/images/persis-logo.png";
import bazkhordIcon from "../assets/images/tick.svg";

function AboutPersis() {
  return (
    <div className="my-14">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 w-full px-12 items-center justify-between">
        <div className="w-full md:w-[50%] border-b-2 border-r-2 border-[#FF821E] rounded-[2rem]">
          <div className="flex items-center mt-4">
            <img src={persisIcon.src} className="w-12 md:w-14 " />
            <h3 className="text-[#FF821E] text-base sm:text-lg md:text-xl font-bold lg:text-start">
              درباره پرسیس
            </h3>
          </div>
          <p className="text-justify p-6 text-xl leading-8">
          شرکت خصوصی مشاوره پرسیس در سال ۱۴۰۰ توسط تعدادی از فعالین حوزه مشاوره و سرمایه‌گذاری تاسیس شد. این شرکت در زمينه درک بهتر زیست‌بوم فناوری و نوآوری ايران و راهكارهای موفقیت در آن به مشتریان خود کمک می‌کند و با ارائه خدمات منحصربه‌فرد به ایشان کمک می­نماید تا همواره در رقابت با ديگران پيشرو باشند.
          </p>
        </div>
        <div className="w-full md:w-[50%] text border-t-2 border-l-2 border-[#FF821E] rounded-[2rem]">
          <div className="flex items-center justify-end mt-4 px-4">
            <h3 className="text-[#FF821E] text-base sm:text-lg md:text-xl font-bold lg:text-start ml-2">
              درباره بازخورد
            </h3>
            <img src={bazkhordIcon.src} className="w-6 md:w-10" />
          </div>
          <p className="text-justify p-6 text-xl leading-10">
          بازخورد زیرمجموعه آموزشی شرکت پرسیس است که با توجه به تسلط بر وضعیت کسب‌وکارها، نیازها را شناسایی می‌کند و با انتخاب بهترین اساتید هر حوزه که تجربه‌ای عملی دارند، سعی در بهبود وضعیت زیست‌بوم نوآوری ایران دارد.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPersis;
