"use client"

import { CustomIcon, IconProps } from "@/components/icon/common";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const navList: {
  name:  IconProps["type"];
  to: string;
}[] = [
  {
    name: "home",
    to: "/sports",
  },
  {
    name: "live",
    to: "/sports/live",
  },
  {
    name: "search",
    to: "/sports/search",
  },
];

export default function HeadNav() {

  const pathname = usePathname()

  return (
    <div className="w-full h-16 p-2 flex items-center justify-between bg-white dark:bg-16j75bq dark:text-white">
      {navList.map((nav, index) => {
        return (
          <>
            {index === navList.length - 1 && (
              <div className="flex-1" key={index}></div>
            )}
            <Link key={nav.name} className={classNames(pathname === nav.to && 'text-primary', "w-12 h-12 p-2 hover:text-primary")} href={nav.to}>
              <div className="tooltip z-50" data-tip={nav.name}>
                <CustomIcon type={nav.name} svgProps={{
                  className: 'w-[32px] h-[32px]'
                }} />
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}
