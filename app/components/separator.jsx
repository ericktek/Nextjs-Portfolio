import React from "react";
import { SiAdobe, SiAnaconda, SiMicrosoftoffice } from "react-icons/si";
import { TbBrandFigma, TbBrandPython } from "react-icons/tb";

const separator = () => {
  const Brand = [
    {
      title: "Adobe",
      icon: <SiAdobe className="lg:w-8 lg:h-8 sm:h-6 sm:w-6" />,
    },

    {
      title: "Anaconda",
      icon: <SiAnaconda className="lg:w-8 lg:h-8 sm:h-6 sm:w-6" />,
    },
    {
      title: "Microsoft",
      icon: <SiMicrosoftoffice className="lg:w-8 lg:h-8 sm:h-6 sm:w-6" />,
    },
    {
      title: "Adobe",
      icon: <SiAdobe className="lg:w-8 lg:h-8 sm:h-6 sm:w-6" />,
    },
    {
      title: "Figma",
      icon: <TbBrandFigma className="lg:w-8 lg:h-8 sm:h-6 sm:w-6" />,
    },
    {
      title: "Python",
      icon: <TbBrandPython className="lg:w-8 lg:h-8 sm:h-6 sm:w-6" />,
    },
  ];

  return (
    <div className="pb-20">
      <div className="backdrop-brightness-125 bg-white/10 py-3 overflow-x-hidden">
        <div className="flex flex-row w-full gap-3 mx-auto justify-between opacity-30">
          {Brand.map((Brand, index) => (
            <span
              key={index}
              className="flex items-center gap-4 font-serif flex-shrink-0 "
            >
              <span className="">{Brand.icon}</span>
              <span className="flex-none lg:text-2xl sm:text-sm">
                {Brand.title}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default separator;
