import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { menuState } from '../atoms/menuAtom'


export default function HamberMenu() {
    const [open, setOpen] = useRecoilState(menuState)

  return (
    <>
      <motion.div
        initial={{
          y: -800,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 0.8,
        }}
        transition={{
          duration: 1,
        }}
        className="bg-[#131313]  w-full h-100vh fixed z-50"
        onClick={()=>setOpen(false)}
      >
        <motion.div
        initial={{
          y: 1400,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
         className="z-[100] h-screen flex justify-center items-center text-center">
          <ul className="">
            <Link href="#">
                <li className="menuItems">خانه</li>
            </Link>
            <Link href="#about">
                <li className="menuItems">معرفی پرسیس</li>
            </Link>
            <Link href="#about">
                <li className="menuItems">معرفی بازخورد</li>
            </Link>
            <Link href="#why">
                <li className="menuItems">چرا رویداد هیئت مدیره؟</li>
            </Link>
            <Link href="#contact">
                <li className="menuItems"> تماس با ما </li>
            </Link>
            <Link href="#contact">
                <li className="menuItems">ثبت نام</li>
            </Link>
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
}
