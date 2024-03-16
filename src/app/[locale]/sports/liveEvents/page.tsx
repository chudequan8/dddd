import { CustomIcon, IconProps } from "@/components/icon/common";
import Banner from "@/components/ui/sports/Banner";

import Image from "next/image";
import bgImg1 from "@/assets/sports/2238011734688407561.jpeg";
import bgImg2 from "@/assets/sports/2277745949226971136.jpeg";
import bgImg3 from "@/assets/sports/63ee4bee9ac843a34d57aed4.jpeg";
import team1Logo from "@/assets/sports/2824.png";
import team2Logo from "@/assets/sports/4488.png";
import classNames from "classnames";

const navList: {
  type: IconProps["type"];
  title: string;
}[] = [
  {
    type: "soccer",
    title: "Soccer",
  },
  {
    type: "fifa",
    title: "FIFA",
  },
];

const teamCardList = [
  {
    src: bgImg1,
    team1: {
      title: "RCD Mallorca",
      logo: team1Logo,
    },
    team2: {
      title: "Cadiz CF",
      logo: team2Logo,
    },
  },
  {
    src: bgImg2,
    team1: {
      title: "RCD Mallorca",
      logo: team1Logo,
    },
    team2: {
      title: "Cadiz CF",
      logo: team2Logo,
    },
  },
  {
    src: bgImg3,
    team1: {
      title: "RCD Mallorca",
      logo: team1Logo,
    },
    team2: {
      title: "Cadiz CF",
      logo: team2Logo,
    },
  },
  {
    src: bgImg1,
    team1: {
      title: "RCD Mallorca",
      logo: team1Logo,
    },
    team2: {
      title: "Cadiz CF",
      logo: team2Logo,
    },
  },
  {
    src: bgImg2,
    team1: {
      title: "RCD Mallorca",
      logo: team1Logo,
    },
    team2: {
      title: "Cadiz CF",
      logo: team2Logo,
    },
  },
  {
    src: bgImg3,
    team1: {
      title: "RCD Mallorca",
      logo: team1Logo,
    },
    team2: {
      title: "Cadiz CF",
      logo: team2Logo,
    },
  },
];

export default function LiveEvents() {
  return (
    <div>
      <Banner />
      <div className="flex items-center mb-4 mt-6">
        <CustomIcon
          type="crown"
          svgProps={{
            className: "w-[32px] h-[26px] mr-2 text-amber-500",
          }}
        />
        <h3 className="dark:text-white text-[22px] font-semibold">
          Top Matches
        </h3>
      </div>
      <div className="flex mb-4">
        {navList.map((item, index) => (
          <div
            key={item.type}
            className={classNames(
              "inline-flex items-center cursor-pointer mr-2 h-[32px] rounded-[16px] pr-4",
              index === 0
                ? "text-white bg-green-400"
                : "text-gray-400 bg-gray-800"
            )}
          >
            <span className="pl-2 pr-[5px]">
              <CustomIcon
                type={item.type}
                svgProps={{
                  className: "w-[22px] h-[22px]",
                }}
              />
            </span>
            <span className="text-xs font-bold">{item.title}</span>
          </div>
        ))}
      </div>
      <div>
        <div
          className="grid gap-4"
          style={{
            gridTemplateAreas: `
            "none none widget"
            "none none widget"
            "none none widget"`,
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {teamCardList.map((item, index) => (
            <div
              key={index}
              className="relative justify-self-stretch min-w-0 h-[196px] rounded-lg bg-slate-900"
            >
              <div className="relative p-2">
                <div className="relative px-2 flex items-center h-5 mb-1 text-white text-opacity-50 text-xs">
                  <div className="inline-flex flex-1">
                    <CustomIcon
                      type="soccer"
                      svgProps={{
                        className: "mr-1",
                      }}
                    />
                    <span>Italy</span>
                    <CustomIcon
                      type="arrow"
                      size={16}
                      svgProps={{
                        className: "w-2 h-2 -rotate-90 scale-50",
                      }}
                    />
                    <span>Serie A</span>
                  </div>
                  <CustomIcon type="rate" size={16} />
                </div>
                <div className="flex justify-between px-2">
                  <span className=" text-sky-500 text-xs font-semibold tracking-[0.24px]">
                    50′ 2nd half
                  </span>
                  <CustomIcon
                    type="radar"
                    size={16}
                    svgProps={{
                      className: "text-red-500 ml-1",
                    }}
                  />
                </div>
                <div className="text-white text-sm font-medium pt-2 pl-2 pb-3">
                  <div className="relative flex items-center mb-2">
                    <Image src={item.team1.logo} className=" w-8 h-8" alt="" />
                    <span className="flex-1">{item.team1.title}</span>
                    <div className="min-w-[32px] text-center px-2 py-1 text-sm font-semibold rounded-lg border border-solid border-opacity-10 border-white bg-white bg-opacity-5">
                      2
                    </div>
                  </div>
                  <div className="relative flex items-center">
                    <Image src={item.team2.logo} className=" w-8 h-8" alt="" />
                    <span className="flex-1">{item.team2.title}</span>
                    <div className="min-w-[32px] text-center px-2 py-1 text-sm font-semibold rounded-lg border border-solid border-opacity-10 border-white bg-white bg-opacity-5">
                      2
                    </div>
                  </div>
                </div>
                <div className="pl-2 font-semibold text-xs text-white text-opacity-50">
                  1x2
                </div>
                <div
                  className="-m-1 mt-2 flex"
                  style={{
                    width: "calc(100% + 8px)",
                  }}
                >
                  <div className="p-1 w-1/3 basis-1/3">
                    <div className="flex items-center font-semibold text-xs h-[40px] px-2 text-white bg-slate-800 rounded-md">
                      <span className="flex-1 text-white text-opacity-50">
                        1
                      </span>
                      <span>7.7</span>
                    </div>
                  </div>
                  <div className="p-1 w-1/3 basis-1/3">
                    <div className="flex items-center font-semibold text-xs h-[40px] px-2 text-white bg-slate-800 rounded-md">
                      <span className="flex-1 text-white text-opacity-50">
                        draw
                      </span>
                      <span>2.79</span>
                    </div>
                  </div>
                  <div className="p-1 w-1/3 basis-1/3">
                    <div className="flex items-center font-semibold text-xs h-[40px] px-2 text-white bg-slate-800 rounded-md">
                      <span className="flex-1 text-white text-opacity-50">
                        1
                      </span>
                      <span>7.7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-self-stretch	min-w-0" style={{
            gridArea: "widget"
          }}>
            <div className="relative w-full h-full rounded-lg bg-slate-900">
              <div className="flex items-center justify-center mb-4 mt-6">
                <CustomIcon
                  type="file"
                  svgProps={{
                    className: "w-[32px] h-[32px] mr-2 text-red-600",
                  }}
                />
                <h3 className="text-white text-[22px] font-semibold">
                  Hot Combos
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
