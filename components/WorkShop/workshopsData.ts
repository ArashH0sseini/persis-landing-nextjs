import financial from '../../assets/images/financial.png'
import governance from '../../assets/images/governance.png'
import risk from '../../assets/images/risk.png'
import conflict from '../../assets/images/conflict.png'


export const workshopsData = () => {
    const workshopData = [
        {
            title: "مفاهیم مالی برای افراد غیرمالی",
            image: financial,
            desc: [
                'آشنایی با‌ انواع‌ صورت‌های‌ مالی',
                'نحوه تفسیر اطلاعات مالی از منظر غیرمالی',
                'درک روابط بین ذی‌نفعان مالی یک شرکت و مدیران/صاحبان کسب‌وکار',
                'آشنایی با گیج‌های مالی اساسی کسب‌وکار',
                'استخراج ترازنامه‌ی مقدماتی از کسب‌وکار'
            ]
        },
        {
            title: "مدیریت ارتباطات و تعارض",
            image: conflict,
            desc: [
                'آشنایی با سبک‌های رهبری',
                'آشنایی با مهارت‌های ارتباطی',
                'مدیریت تعارض',
                'مکانیزم‌های تصمیم‌گیری جمعی'
            ]
        },
        {
            title: "مدیریت ریسک با رویکرد حقوقی",
            image: risk,
            desc: [
                'ریسک چیست',
                'آشنایی با مهارت‌های ارتباطی',
                'شناسایی ریسک‌های حقوقی برای کسب‌وکار و هیئت مدیره',
                'مدیریت ریسک و فراهم نمودن تمهیدات لازم'
            ]
        },
        {
            title: "مبانی حاکمیت شرکتی",
            image: governance,
            desc: [
                'حاکمیت شرکتی و نقش مدیران و هیئت مدیره',
                'تفاوت نقش‌ها در هیئت مدیره',
                'دیسیپلین برگزاری جلسات هیئت مدیره',
                'قدرت‌ها، مسئولیت‌ها و چهارچوب پاسخگویی هیئت مدیره'
            ]
        }
    ]
    return workshopData;
}