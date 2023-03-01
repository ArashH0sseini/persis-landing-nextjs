import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import React from 'react'
import RotateCard from './RotateCard'
import financial from '../assets/images/financial.png'
import governance from '../assets/images/governance.png'
import risk from '../assets/images/risk.png'
import conflict from '../assets/images/conflict.png'
import Accordion from './Accordion'


function Workshops() {
    const Financial = {
        desc1:'آشنایی با‌ انواع‌ صورت‌های‌ مالی',
        desc2:'نحوه تفسیر اطلاعات مالی از منظر غیرمالی',
        desc3:'درک روابط بین ذی‌نفعان مالی یک شرکت و مدیران/صاحبان کسب‌وکار',
        desc4:'آشنایی با گیج‌های مالی اساسی کسب‌وکار',
        desc5:'استخراج ترازنامه‌ی مقدماتی از کسب‌وکار'
    }
    const Conflict = {
        desc1:'آشنایی با سبک‌های رهبری',
        desc2:'آشنایی با مهارت‌های ارتباطی',
        desc3:'مدیریت تعارض',
        desc4:'مکانیزم‌های تصمیم‌گیری جمعی'
    }
    const Risk = {
        desc1:'ریسک چیست',
        desc2:'آشنایی با مهارت‌های ارتباطی',
        desc3:'شناسایی ریسک‌های حقوقی برای کسب‌وکار و هیئت مدیره',
        desc4:'مدیریت ریسک و فراهم نمودن تمهیدات لازم'
    }
    const Governance = {
        desc1:'حاکمیت شرکتی و نقش مدیران و هیئت مدیره',
        desc2:'تفاوت نقش‌ها در هیئت مدیره',
        desc3:'دیسیپلین برگزاری جلسات هیئت مدیره',
        desc4:'قدرت‌ها، مسئولیت‌ها و چهارچوب پاسخگویی هیئت مدیره'
    }
  return (
    <div className='mb-20'>
        <div className='flex px-14 space-x-2 space-x-reverse items-center justify-center lg:justify-start'>
            <RocketLaunchIcon className='w-6 md:w-7 text-[#FF821E]' />
            <p className='text-[#FF821E] my-10 text-lg md:text-xl font-bold text-center lg:text-start'>کارگاه ها</p>
        </div>
        <div className='flex flex-col'>
            <div className='hidden min-[500px]:grid min-[500px]:grid-cols-2 lg:grid-cols-4'>
                <RotateCard title="مفاهیم مالی برای افراد غیرمالی" image={financial} description={[Financial.desc1,Financial.desc2,Financial.desc3,Financial.desc4,Financial.desc5]} />
                <RotateCard title="مدیریت ارتباطات و تعارض" image={conflict} description={[Conflict.desc1,Conflict.desc2,Conflict.desc3,Conflict.desc4]} />
                <RotateCard title="مدیریت ریسک با رویکرد حقوقی" image={risk} description={[Risk.desc1,Risk.desc2,Risk.desc3,Risk.desc4]} />
                <RotateCard title="مبانی حاکمیت شرکتی" image={governance} description={[Governance.desc1,Governance.desc2,Governance.desc3,Governance.desc4]} />
            </div>

            <div className='min-[500px]:hidden'>
                <Accordion title="مفاهیم مالی برای افراد غیرمالی" image={financial} description={[Financial.desc1,Financial.desc2,Financial.desc3,Financial.desc4,Financial.desc5]} />
                <Accordion title="مدیریت ارتباطات و تعارض" image={conflict} description={[Conflict.desc1,Conflict.desc2,Conflict.desc3,Conflict.desc4]} />
                <Accordion title="مدیریت ریسک با رویکرد حقوقی" image={risk} description={[Risk.desc1,Risk.desc2,Risk.desc3,Risk.desc4]} />
                <Accordion title="مبانی حاکمیت شرکتی" image={governance} description={[Governance.desc1,Governance.desc2,Governance.desc3,Governance.desc4]} />            </div>
        </div>
    </div>
  )
}

export default Workshops