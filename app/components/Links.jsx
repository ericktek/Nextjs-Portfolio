import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { SiTaichigraphics } from "react-icons/si";
import { RiPrinterCloudLine } from "react-icons/ri";

const links = () => {
  const Menu = [
    {
      icon: <IoHomeOutline />,
      path: "/portfolio",
      name: "portfolio",
    },
    {
      icon: <CgWebsite />,
      path: "/portfolio/websites",
      name: "websites",
    },
    {
      icon: <MdOutlineOnlinePrediction />,
      path: "/portfolio/social",
      name: "social",
    },
    {
      icon: <SiTaichigraphics />,
      path: "/portfolio/graphics",
      name: "graphics",
    },
    {
      icon: <RiPrinterCloudLine />,
      path: "/portfolio/printing",
      name: "printing",
    },
  ];

  const pathName = usePathname();

  return (
    <>
       {Menu.map((menuItem, index) => (
        <Link
          href={menuItem.path}
          className={`font-extralight hover:bg-orange-500 rounded-md p-3 px-4 cursor-pointer ${
            pathName === menuItem.path && 'bg-orange-500 rounded-md font-base cursor-pointer'
          }`}
          key={index}
        >
        


          <div className='has-tooltip'>
  <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-gray-800 -mt-8'>{menuItem.name}</span>
  {menuItem.icon}
</div>
        </Link>
      ))}
    </>
  );
};

export default links;
