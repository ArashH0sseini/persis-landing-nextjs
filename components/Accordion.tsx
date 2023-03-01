import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

interface Props {
  title: string;
  image: any;
  description: any;
}

export default function Accordion({ title, image, description }: Props) {
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md rounded-2xl p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center w-full justify-between rounded-lg ring-2 ring-[#FF821E] px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <Image
                  src={image.src}
                  width="300"
                  height="300"
                  alt="icon"
                  objectFit="cover"
                  className="w-16 object-cover"
                />
                <span className=" text-start">{title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-7 w-7 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white bg-[#FF821E] mt-3 rounded-lg">
                <ul className="text-white px-8 space-y-2">
                  {description.map((desc: any, index: any) => (
                    <li key={index} className="text-start list-disc text-sm">
                      {desc}
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
