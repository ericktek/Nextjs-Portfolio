import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = () => {
  const Menu = [
    {
      title: "ALL",
      path: "/",
    },
    {
      title: "Websites",
      path: "/websites",
    },
    {
      title: "Social Media Branding",
      path: "/social",
    },
    {
      title: "Graphics Design",
      path: "/graphics",
    },
    {
      title: "Printing",
      path: "/printing",
    },
  ];

  const pathName = usePathname();

  return (
    <>
      {Menu.map((Menu, index) => (
        <Link
          href={Menu.path}
          className={`font-extralight hover:bg-orange-500 rounded-md p-3 cursor-pointer ${
            pathName === Menu.path &&
            "bg-orange-500 rounded-md  font-base cursor-pointer"
          }`}
          key={index}
        >
          <span>{Menu.title}</span>
        </Link>
      ))}
    </>
  );
};

export default links;
