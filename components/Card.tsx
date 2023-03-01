import Image from 'next/image'
import React from 'react'

interface Props {
    image:any
}

function Card({image}:Props) {
  return (
    <Image src={image.src} alt="" width='220' height='220' objectFit="cover" className='w-full rounded-2xl' />
  )
}

export default Card