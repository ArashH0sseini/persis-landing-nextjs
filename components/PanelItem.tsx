import Image from 'next/image'
import React from 'react'
import { MicrophoneIcon } from '@heroicons/react/24/solid'


interface Props {
    name:string,
    image:any
}

function PanelItem({name,image}:Props) {
  return (
    <div className='flex items-center justify-center flex-col mb-10 space-y-8'>
        <div className='relative'>
            <Image src={image.src} width="300" height="300" alt='modir' objectFit="cover" className='rounded-full w-[148px] h-[148px] sm:w-[220px] sm:h-[220px] ' />
            <div className='w-4 h-4 sm:w-6 sm:h-6 bg-green-600 rounded-full absolute bottom-0 left-8 animate-ping z-10' />
            <div className='absolute -top-[6px] -right-[6px] w-[10rem] h-[10rem] sm:w-[14.5rem] sm:h-[14.5rem] ring-2 md:ring-4 ring-orange-500 rounded-full animate-pulse' />
        </div>
        <div className='flex space-x-1 md:space-x-2 space-x-reverse'>
            <MicrophoneIcon className="w-5 h-5 sm:h-6 sm:w-6 text-green-500 animate-pulse"/>
            <p className='text-[#FF821E] text-base sm:text-xl'>{name}</p>
        </div>
    </div>
  )
}

export default PanelItem