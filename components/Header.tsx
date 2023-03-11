import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/images/logo.png";
import HamberMenu from "./HamberMenu";
import { useRecoilState } from "recoil";
import { menuState } from "../atoms/menuAtom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

function Header() {
  const [open, setOpen] = useRecoilState(menuState);

  return (
    <header>
      <nav>
        <div className="container mx-auto px-6 py-3">
          <div className="lg:flex lg:items-center lg:justify-between w-full max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <div className="text-xl font-semibold text-gray-700">
                  <Link href="#">
                    <Image src={Logo.src} alt="" width="220" height="220" />
                  </Link>
              </div>

              <div className="flex lg:hidden">
              {open ? (
                  <XMarkIcon
                    className="w-7 h-7 text-white opacity-80 hover:opacity-100"
                    onClick={() => setOpen(false)}
                  />
                ) : (
                  <Bars3Icon
                    className="w-7 h-7 text-white opacity-80 hover:opacity-100"
                    onClick={() => setOpen(true)}
                  />
                )}
              </div>
            </div>

            <div className="hidden -mx-4 lg:flex lg:items-center">
              <Link href="#about">
                <button className="block mx-4 mt-2 md:mt-0 text-sm text-[#FF821E] hover:text-[#FF821E]/80">معرفی پرسیس</button>
              </Link>
              <Link href="#about">
                <button className="block mx-4 mt-2 md:mt-0 text-sm text-[#FF821E]  hover:text-[#FF821E]/80">معرفی بازخورد</button>
             </Link>
             <Link href="#why">
                <button className="block mx-4 mt-2 md:mt-0 text-sm text-[#FF821E]  hover:text-[#FF821E]/80 border-b-[1px] border-[#FF821E] ">چرا رویداد هیئت مدیره؟</button>
             </Link>
             <Link href="#contact">
                <button className="block mx-4 mt-2 md:mt-0 text-sm text-[#FF821E] hover:text-[#FF821E]/80">ثبت نام</button>
             </Link>
             <Link href="#contact">
                <button className="block mx-4 mt-2 md:mt-0 text-sm text-[#FF821E] hover:text-[#FF821E]/80">تماس با ما</button>
             </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="w-full bg-cover bg-left md:bg-center h-[35rem] sm:h-[40rem] bg-header">
        <div className="flex items-center justify-start h-full w-full bg-neutral-800 bg-opacity-40">
          <div className="text-start px-4 space-y-6 w-full max-w-6xl mx-auto">
            <h1 className="text-[#FF821E] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              بازخورد - بازوی آموزشی گروه پرسیس
            </h1>
            <h2 className="text-[#FF821E] text-sm sm:text-base md:text-xl">
              <span className="border-b-[1px] border-[#FF821E]">نگاهی</span> کاربردی به آموزش <span className="border-b-[1px] border-[#FF821E] -mr-1">اتکا به</span> تجربه و امید به آینده
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
