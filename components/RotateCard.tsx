import Image from 'next/image'

interface Props {
    title:string,
    image:any,
    description:any
}

function RotateCard({title,image,description}:Props) {
    return (
     <div className="flex flex-col justify-center items-center cursor-pointer my-4">
        <div className="group sm:h-80 w-72 sm:w-72 lg:w-60 h-80 xl:w-72 min-[500px]:w-60 [perspective:1000px] ">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 space-y-8 rounded-xl flex flex-col items-center justify-center ring-2 ring-[#FF821E]">
                    <Image src={image.src} width="300" height="300" alt='icon' objectFit="cover" className='h-[40%] w-[40%] min-[500px]:w-[50%] sm:w-[40%] lg:w-[50%] xl:w-[40%] object-cover' />
                    <p className='text-white text-lg'>{title}</p>
                    <button className='text-white w-[70%] p-2 rounded-full sm:text-base border-2 border-b-0'>مشاهده توضیحات</button>
                </div>
                <div className='absolute inset-0 h-full w-full rounded-xl bg-[#FF821E]  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <div className='flex min-h-full flex-col  justify-center space-y-8'>
                        <h3 className='text-lg font-bold text-white text-start px-4'>{title}</h3>
                        <ul className='text-white px-8 space-y-2'>
                            {description.map((desc:any,index:any)=>(
                                <li key={index} className="text-start list-disc text-sm">{desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
}

export default RotateCard