import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <div className="w-full bg-cover bg-left md:bg-center h-[35rem] sm:h-[40rem] bg-header">
        <div className="flex items-center justify-start h-full w-full bg-neutral-800 bg-opacity-40">
          <div className="text-start px-4 space-y-6 w-full max-w-6xl mx-auto">
            <h1 className="text-[#FF821E] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              بازخورد - بازوی آموزشی گروه پرسیس
            </h1>
            <h2 className="text-[#FF821E] text-sm sm:text-base md:text-xl">
              <span className="border-b-[1px] border-[#FF821E]">نگاهی</span>{" "}
              کاربردی به آموزش{" "}
              <span className="border-b-[1px] border-[#FF821E] -mr-1">
                اتکا به
              </span>{" "}
              تجربه و امید به آینده
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
