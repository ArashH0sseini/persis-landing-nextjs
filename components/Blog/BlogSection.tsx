import React from "react";
import management from "../../assets/images/management.jpg";
import performance from "../../assets/images/performance.jpg";
import business from "../../assets/images/business.jpg";
import Link from "next/link";

function Blog() {
  return (
    <div className="mb-20">
      <div className="flex px-10 items-center justify-between py-10">
        <p className="text-[#FF821E] text-2xl md:text-3xl font-bold lg:text-start">
          بلاگ
        </p>
        <Link
          href="/blog"
          className="text-white border-2 border-[#FF821E] p-2 rounded-xl hover:bg-[#FF821E]/30 transition-all delay-75 text-sm md:text-base"
        >
          مشاهده همه
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto overflow-x-scroll scrollbar-hide px-8">
        <div className="w-full mt-8 rounded-[2.5rem] overflow-hidden cursor-pointer bg-gradient-to-b from-[#FF821E] via-[#FF821E] border-4 border-[#FF821E] border-b-0 border-t-0">
          <Link href={`/blog/راهنمای-برگزاری-جلسات-هیئت-مدیره`}>
            <img
              src={management.src}
              alt=""
              className="w-full h-[250px] rounded-b-[2.5rem] shadow-lg border-[#FF821E]"
            />
            <p className="flex text-center items-center justify-center text-white h-20 font-bold text-lg">
              راهنمای برگزاری جلسات هیئت مدیره
            </p>
          </Link>
        </div>
        <div className="w-full mt-8 rounded-[2.5rem] overflow-hidden cursor-pointer bg-gradient-to-b from-[#FF821E] via-[#FF821E] border-4 border-[#FF821E] border-b-0 border-t-0">
          <Link href={`/blog/آنچه-باید-در-مورد-هیئت-مدیره-یک-استارتاپ-بدانید`}>
            <img
              src={performance.src}
              alt=""
              className="w-full h-[250px] rounded-b-[2.5rem] shadow-lg border-[#FF821E]"
            />
            <p className="flex text-center items-center justify-center text-white h-20 font-bold text-lg ">
              آن‌چه باید در مورد هیئت مدیره یک استارتاپ بدانید
            </p>
          </Link>
        </div>
        <div className="w-full mt-8 rounded-[2.5rem] overflow-hidden cursor-pointer bg-gradient-to-b from-[#FF821E] via-[#FF821E] border-4 border-[#FF821E] border-b-0 border-t-0">
          <Link href={`/blog/چرا-باید-با-هر-دور-سرمایه-گذاری-تکامل-یافت`}>
            <img
              src={business.src}
              alt=""
              className="w-full h-[250px] rounded-b-[2.5rem] shadow-lg border-[#FF821E]"
            />
            <p className="flex text-center items-center justify-center text-white h-20 font-bold text-lg">
              چرا باید با هر دور سرمایه‌گذاری تکامل یافت
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
