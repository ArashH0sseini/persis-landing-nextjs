import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <footer className=' bg-[#FF821E] rounded-t-3xl p-8 w-[90%] m-auto lg:pb-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-10'>
            <div className='flex flex-col space-y-6'>
                <h3 className='text-white'>بازخورد</h3>
                <p className='text-white text-sm leading-8 w-[90%]'>زیرمجموعه‌ی آموزشی گروه پرسیس که با استفاده از اساتید باتجربه، سعی در آموزش مفاهیم و اصول، به‌صورت کاربردی دارد. تا هر چند گامی کوچک اما موثر برای رشد اکوسیستم استارتاپی میهن عزیزمان بردارد.</p>
            </div>
            <div className='flex flex-col space-y-6 justify-center'>
                <div className='flex items-center space-x-2 space-x-reverse'>
                    <MapPinIcon className='w-6 text-white' />
                    <p className='text-white text-sm'>چهارراه جهان کودک، ابتدای جردن، خیابان کیش، پلاک ۵۱</p>
                </div>
                <div className='flex items-center space-x-2 space-x-reverse'>
                    <PhoneIcon className='w-5 text-white' />
                    <p className='mt-1 text-white hover:underline'>
                        <Link href="tel:02188883449">۰۲۱-۸۸۸۸۳۴۴۹</Link>
                    </p>
                </div>
                <div className='flex items-center space-x-2 space-x-reverse'>
                    <MapPinIcon className='w-6 text-white ' />
                    <p className='mt-1 text-white'>hi@persis.ir</p>
                </div>
            </div>
            <div className='flex justify-center md:col-span-2 lg:col-span-1'>
            <SocialIcon
                url='https://www.linkedin.com/company'
                fgColor="white"
                bgColor="transparent"
            />
            </div>
        </div>
    </footer>
  )
}

export default Footer