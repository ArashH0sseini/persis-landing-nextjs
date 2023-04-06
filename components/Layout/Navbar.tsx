import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../assets/images/logo.png";
import { useRecoilState } from "recoil";
import { menuState } from "../../atoms/menuAtom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

function Navbar() {
  const [open, setOpen] = useRecoilState(menuState);
  return (
    <nav>
      <div className="container mx-auto px-6 py-3">
        <div className="lg:flex lg:items-center lg:justify-between w-full max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">
              <Link href="/">
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
            <Link href="/#about" scroll={false}>
              <button className="block mx-4 mt-2 md:mt-0 text-sm text-[#FF821E] hover:text-[#FF821E]/80">
                معرفی پرسیس
              </button>
            </Link>

            <Link href="/#about" scroll={false}>
              <button className="block mx-4 mt-2 md:mt-0 text-sm text-[#FF821E]  hover:text-[#FF821E]/80">
                معرفی بازخورد
              </button>
            </Link>
            <Link href="/#why" scroll={false}>
              <button className="block mx-4 mt-2 md:mt-0 text-sm text-[#FF821E]  hover:text-[#FF821E]/80 border-b-[1px] border-[#FF821E] ">
                چرا رویداد هیئت مدیره؟
              </button>
            </Link>
            <Link href="/#blog" scroll={false}>
              <button className="block mx-4 mt-2 md:mt-0 text-sm text-[#FF821E] hover:text-[#FF821E]/80">
                 بلاگ
              </button>
            </Link>
            <Link href="/#contact" scroll={false}>
                <button className="block mx-4 mt-2 md:mt-0 text-sm text-[#FF821E] hover:text-[#FF821E]/80">
                  مشاوره و تماس با ما
                </button>
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
