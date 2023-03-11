import React from 'react'
import management from '../assets/images/management.jpg'
import performance from '../assets/images/performance.jpg'
import business from '../assets/images/business.jpg'

function Blog() {
  return (
    <div className='mb-20'>
      <div className='flex px-10 items-center justify-between py-10'>
        <p className='text-[#FF821E] text-2xl md:text-3xl font-bold lg:text-start'>بلاگ</p>
        <button className='text-white border-2 border-[#FF821E] p-2 rounded-xl hover:bg-[#FF821E]/30 transition-all delay-75 text-sm md:text-base'>مشاهده همه</button>
      </div>
      <div className='flex space-x-8 space-x-reverse overflow-x-scroll scrollbar-hide px-8'>
        <div className='flex-[0_0_350px] lg:flex-1 rounded-[2.5rem] overflow-hidden cursor-pointer bg-gradient-to-b from-[#FF821E] via-[#FF821E] border-4 border-[#FF821E] border-b-0 border-t-0'>
          <img src={management.src} alt="" className='h-[230px] rounded-b-[2.5rem] shadow-lg border-[#FF821E]' />
          <p className='flex items-center justify-center text-white h-20 font-bold text-lg'>راهنمای برگزاری جلسات هیئت مدیره</p>
        </div>
        <div className='flex-[0_0_350px] lg:flex-1 rounded-[2.5rem] overflow-hidden cursor-pointer bg-gradient-to-b from-[#FF821E] via-[#FF821E] border-4 border-[#FF821E] border-b-0 border-t-0'>
          <img src={performance.src} alt="" className='h-[230px] rounded-b-[2.5rem] shadow-lg border-[#FF821E]' />
          <p className='flex items-center justify-center text-white h-20 font-bold text-lg'>آن‌چه باید در مورد هیئت مدیره یک استارتاپ بدانید</p>
        </div>
        <div className='flex-[0_0_350px] lg:flex-1 rounded-[2.5rem] overflow-hidden cursor-pointer bg-gradient-to-b from-[#FF821E] via-[#FF821E] border-4 border-[#FF821E] border-b-0 border-t-0'>
          <img src={business.src} alt="" className='h-[230px] rounded-b-[2.5rem] shadow-lg border-[#FF821E]' />
          <p className='flex items-center justify-center text-white h-20 font-bold text-lg'>چرا باید با هر دور سرمایه‌گذاری تکامل یافت</p>
        </div>
      </div>
    </div>
  )
}

export default Blog