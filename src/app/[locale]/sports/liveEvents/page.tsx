"use client";

import Image from "next/image";
import bgImg1 from "@/assets/sports/2238011734688407561.jpeg";
import bgImg2 from "@/assets/sports/2277745949226971136.jpeg";
import bgImg3 from "@/assets/sports/63ee4bee9ac843a34d57aed4.jpeg";
import team1Logo from "@/assets/sports/2824.png";
import team2Logo from "@/assets/sports/4488.png";
import { useRef, useState } from "react";

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
        setCurIndex(Math.min(curIndex + 384 + 16, (contentWidth || 0) - (wrapperWidth || 0)));
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
            <div className="h-5 mb-1"></div>
            <div className="relative flex justify-between p-2 text-white text-sm font-medium">
              <div className="relative inline-flex flex-col flex-1 items-start text-left">
                <Image src={item.team1.logo} className=" w-8 h-8" alt="" />
                <span>{item.team1.title}</span>
                <div className="absolute right-1 -top-0.5 min-w-[26px] text-center px-2 py-1.5 text-sm font-semibold rounded-lg border border-solid border-opacity-50 border-white bg-white bg-opacity-30">
                  2
                </div>
              </div>
              <div className="relative inline-flex flex-col flex-1 items-end text-right">
                <Image src={item.team2.logo} className="w-8 h-8 pb-2" alt="" />
                <span>{item.team2.title}</span>
                <div className="absolute left-1 -top-0.5 min-w-[26px] text-center px-2 py-1.5 text-sm font-semibold rounded-lg border border-solid border-opacity-50 border-white bg-white bg-opacity-30">
                  1
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
