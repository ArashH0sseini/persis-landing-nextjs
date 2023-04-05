import management from "../../assets/images/management.jpg";
import performance from "../../assets/images/performance.jpg";
import business from "../../assets/images/business.jpg";
import modir from "../../assets/images/modir.jpeg";
import BlogHeader from "../../components/Blog/BlogHeader";
import Link from "next/link";
import HamberMenu from "../../components/Layout/HamberMenu";
import { useRecoilValue } from "recoil";
import { menuState } from "../../atoms/menuAtom";

function Posts() {
  const open = useRecoilValue(menuState);

  return (
    <div className="bg-hero-pattern pb-10">
      {open ? <HamberMenu /> : null}
      <BlogHeader />

      <div
        className="w-full bg-cover bg-left md:bg-center h-[35rem] sm:h-[40rem]"
        style={{ backgroundImage: "url(/images/blogheader.jpg)" }}
      >
        <div className="flex items-center justify-center h-full w-full bg-neutral-900 bg-opacity-70">
          <h1 className="text-white text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
            بلاگ
          </h1>
        </div>
      </div>

      <div className=" max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto overflow-x-scroll scrollbar-hide px-8">
          <div className="w-full mt-8 rounded-[2.5rem] overflow-hidden cursor-pointer bg-gradient-to-b from-[#FF821E] via-[#FF821E] border-4 border-[#FF821E] border-b-0 border-t-0">
            <Link href={`/blog/راهنمای-برگزاری-جلسات-هیئت-مدیره`}>
              <img
                src={management.src}
                alt=""
                className="w-full h-[250px] rounded-b-[2.5rem] shadow-lg border-[#FF821E]"
              />
              <p className="flex text-center items-center justify-center text-white h-20 font-bold text-lg">
                راهنمای برگزاری جلسات هیئت مدیره
              </p>
            </Link>
          </div>
          <div className="w-full mt-8 rounded-[2.5rem] overflow-hidden cursor-pointer bg-gradient-to-b from-[#FF821E] via-[#FF821E] border-4 border-[#FF821E] border-b-0 border-t-0">
            <Link
              href={`/blog/آنچه-باید-در-مورد-هیئت-مدیره-یک-استارتاپ-بدانید`}
            >
              <img
                src={performance.src}
                alt=""
                className="w-full h-[250px] rounded-b-[2.5rem] shadow-lg border-[#FF821E]"
              />
              <p className="flex text-center items-center justify-center text-white h-20 font-bold text-lg ">
                آن‌چه باید در مورد هیئت مدیره یک استارتاپ بدانید
              </p>
            </Link>
          </div>
          <div className="w-full mt-8 rounded-[2.5rem] overflow-hidden cursor-pointer bg-gradient-to-b from-[#FF821E] via-[#FF821E] border-4 border-[#FF821E] border-b-0 border-t-0">
            <Link href={`/blog/چرا-باید-با-هر-دور-سرمایه-گذاری-تکامل-یافت`}>
              <img
                src={business.src}
                alt=""
                className="w-full h-[250px] rounded-b-[2.5rem] shadow-lg border-[#FF821E]"
              />
              <p className="flex text-center items-center justify-center text-white h-20 font-bold text-lg">
                چرا باید با هر دور سرمایه‌گذاری تکامل یافت
              </p>
            </Link>
          </div>
          <div className="w-full mt-8 rounded-[2.5rem] overflow-hidden cursor-pointer bg-gradient-to-b from-[#FF821E] via-[#FF821E] border-4 border-[#FF821E] border-b-0 border-t-0">
            <Link href={`/blog/چگونه-هیئت-مدیره-خود-را-مدیریت-کنم`}>
              <img
                src={modir.src}
                alt=""
                className="w-full h-[250px] rounded-b-[2.5rem] shadow-lg border-[#FF821E]"
              />
              <p className="flex text-center items-center justify-center text-white h-20 font-bold text-lg">
                چگونه هیئت مدیره خود را مدیریت کنم؟
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
