"use client";

import Image from "next/image";
import bgImg1 from "@/assets/sports/2238011734688407561.jpeg";
import bgImg2 from "@/assets/sports/2277745949226971136.jpeg";
import bgImg3 from "@/assets/sports/63ee4bee9ac843a34d57aed4.jpeg";
import team1Logo from "@/assets/sports/2824.png";
import team2Logo from "@/assets/sports/4488.png";
import { useRef, useState } from "react";
import { CustomIcon } from "@/components/icon/common";

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

export default function Banner() {
  const [curIndex, setCurIndex] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const changeIndex = (type: "left" | "next") => {
    const wrapperWidth = wrapperRef.current?.getBoundingClientRect().width;
    const contentWidth = contentRef.current?.getBoundingClientRect().width;

    switch (type) {
      case "left":
        setCurIndex(Math.max(curIndex - 384 - 16, 0));
        break;
      case "next":
      default: {
        setCurIndex(
          Math.min(
            curIndex + 384 + 16,
            (contentWidth || 0) - (wrapperWidth || 0)
          )
        );
      }
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="group relative w-full h-[152px] overflow-x-hidden"
    >
      <div
        ref={contentRef}
        className="flex absolute items-center space-x-4 transition transform duration-300"
        style={{
          transform: `translateX(-${curIndex}px)`,
        }}
      >
        {teamCardList.map((item, index) => (
          <div key={index} className="relative w-[384px] h-[152px]">
            <Image
              src={item.src}
              alt=""
              className="w-full h-full rounded-xl absolute"
            />
            <div className="relative p-2">
              <div className="relative flex items-center h-5 mb-1">
                <div className="inline-flex flex-1 text-white text-opacity-50">
                  <CustomIcon
                    type="fifa"
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
                <div className="inline-flex">
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
              </div>
              <div className="relative flex justify-between  text-white text-sm font-medium">
                <div className="relative inline-flex flex-col flex-1 items-start text-left">
                  <Image src={item.team1.logo} className=" w-8 h-8" alt="" />
                  <span>{item.team1.title}</span>
                  <div className="absolute right-1 -top-0.5 min-w-[26px] text-center px-2 py-1.5 text-sm font-semibold rounded-lg border border-solid border-opacity-50 border-white bg-white bg-opacity-30">
                    2
                  </div>
                </div>
                <div className="relative inline-flex flex-col flex-1 items-end text-right">
                  <Image
                    src={item.team2.logo}
                    className="w-8 h-8 pb-2"
                    alt=""
                  />
                  <span>{item.team2.title}</span>
                  <div className="absolute left-1 -top-0.5 min-w-[26px] text-center px-2 py-1.5 text-sm font-semibold rounded-lg border border-solid border-opacity-50 border-white bg-white bg-opacity-30">
                    1
                  </div>
                </div>
              </div>
              <div className="-m-1 mt-10 flex" style={{
                width: "calc(100% + 8px)",
              }}>
                <div className="p-1 w-1/3 basis-1/3">
                  <div className="flex items-center font-semibold text-xs h-[32px] px-2 text-white bg-white bg-opacity-30 rounded-md">
                    <span className="flex-1">1</span>
                    <span>7.7</span>
                  </div>
                </div>
                <div className="p-1 w-1/3 basis-1/3">
                  <div className="flex items-center font-semibold text-xs h-[32px] px-2 text-white bg-white bg-opacity-30 rounded-md">
                    <span className="flex-1">draw</span>
                    <span>2.79</span>
                  </div>
                </div>
                <div className="p-1 w-1/3 basis-1/3">
                  <div className="flex items-center font-semibold text-xs h-[32px] px-2 text-white bg-white bg-opacity-30 rounded-md">
                    <span className="flex-1">1</span>
                    <span>7.7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div
        style={{
          zIndex: 3,
          pointerEvents: "none",
          position: "absolute",
          inset: "0px 0px auto auto",
          width: 40,
          height: "100%",
          background:
            "linear-gradient(to left, rgb(28, 30, 34), rgba(28, 30, 34, 0))",
        }}
      ></div> */}
      <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute z-10 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 pointer-events-none	">
        <a
          className="btn btn-circle pointer-events-auto"
          onClick={() => changeIndex("left")}
        >
          ❮
        </a>
        <a
          className="btn btn-circle pointer-events-auto"
          onClick={() => changeIndex("next")}
        >
          ❯
        </a>
      </div>
    </div>
  );
}
