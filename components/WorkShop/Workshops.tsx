import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import React from "react";
import WorkshopsItem from "./WorkshopsItem";
import WorkshopsItemList from "./WorkshopsItemList";
import { workshopsData } from "./WorkshopsData";

function Workshops() {
  const workshops: any = workshopsData();

  return (
    <div className="mb-20">
      <div className="flex px-14 space-x-2 space-x-reverse items-center justify-center lg:justify-start">
        <RocketLaunchIcon className="w-6 md:w-7 text-[#FF821E]" />
        <p className="text-[#FF821E] my-10 text-lg md:text-xl font-bold text-center lg:text-start">
          کارگاه ها
        </p>
      </div>
      
      <div className="flex flex-col">
        <div className="hidden min-[500px]:grid min-[500px]:grid-cols-2 lg:grid-cols-4">
          {workshops.map((workshop: any) => (
            <WorkshopsItem
              image={workshop.image}
              title={workshop.title}
              description={workshop.desc}
            />
          ))}
        </div>

        <div className="min-[500px]:hidden">
          {workshops.map((workshop: any) => (
            <WorkshopsItemList
              image={workshop.image}
              title={workshop.title}
              description={workshop.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workshops;
