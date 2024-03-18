import { CustomIcon, IconProps } from "@/components/icon/common";
import Banner from "@/components/ui/sports/Banner";
import LiveMatches from "@/components/ui/sports/LiveMatches";
import TopMatches from "@/components/ui/sports/TopMatches";
import UpcomingEvents from "@/components/ui/sports/UpcomingEvents";

import classNames from "classnames";

const navList: {
  type: IconProps["type"];
  title: string;
}[] = [
    {
      type: "menu",
      title: "Highlights",
    },
    {
      type: "schedule",
      title: "Schedule",
    },
  ];

export default function SportsHome() {
  return (
    <div>
      <div className="flex mb-4">
        {navList.map((item, index) => (
          <div
            key={item.type}
            className={classNames(
              "inline-flex items-center cursor-pointer mr-2 h-[32px] rounded-[16px] px-4 bg-gray-800",
              index === 0
                ? "text-white"
                : "text-gray-400"
            )}
          >
            <span className="pr-[5px]">
              <CustomIcon
                type={item.type}
                size={16}
                svgProps={{
                  className: classNames("w-[14px] h-[14px]", index === 0 ? "text-yellow" : "text-gray-400"),
                }}
              />
            </span>
            <span className="text-xs font-bold">{item.title}</span>
          </div>
        ))}
      </div>
      <Banner />
      <TopMatches />
      <LiveMatches />
      <Banner />
      <UpcomingEvents />  
    </div>
  );
}
