"use client"

import { CustomIcon } from "@/components/icon/common";
import GameCard, { GameCardProps } from "@/components/ui/sports/GameCard";
import classNames from "classnames";
import { useState } from "react";

import team1Logo from "@/assets/sports/2824.png";
import team2Logo from "@/assets/sports/4488.png";

const btnList = [
  {
    title: 'UEFA Champions League',
    src: 'https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/international.svg'
  },
  {
    title: 'UEFA Europa League',
    src: 'https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/international.svg'
  }
]


const teamCardList: GameCardProps[] = new Array(6).fill(0).map(() => ({
  team: [
    {
      title: "RCD Mallorca",
      logo: team1Logo,
      score: 2,
    },
    {
      title: "Cadiz CF",
      logo: team2Logo,
      score: 1,
    },
  ],
  '1x2': [
    {
      left: 1,
      right: 737
    },
    {
      left: 'draw',
      right: 2.79
    },
    {
      left: 1,
      right: 737
    },
  ],
  'Double chance': [
    {
      left: 'draw or Genoa CFC',
      right: 1.04
    },
    {
      left: 'draw or Genoa CFC',
      right: 1.22
    },
    {
      left: 'draw or Genoa CFC',
      right: 1.33
    },
  ],
  total: [
    {
      left: 'over',
      right: 2.27
    },
    {
      left: 'under',
      right: 1.68
    },
  ],
  'Handicap': [
    {
      left: '(-1.5) Juventus Turin',
      right: 2.27
    },
    {
      left: '(-1.5) Juventus Turin',
      right: 2.27
    },
  ],
  'Draw no bet': [
    {
      left: 'Sevilla FC',
      right: 2.27
    },
    {
      left: 'RC Celta de Vigo',
      right: 2.27
    },
  ],
  'Both teams to score': [
    {
      left: 'yes',
      right: 2.27
    },
    {
      left: 'no',
      right: 1.58
    },
  ]
}));


export default function Search() {

  const [isSearch, setIsSearch] = useState<string>()

  return (
    <div className="-m-6 h-full p-2 bg-18w92jy">
      <div className={isSearch ? "px-8" : "p-8"}>
        {
          !isSearch && (
            <div className="flex items-center">
              <input className="flex-1 text-title text-2xl h-12 pl-4 bg-primary bg-opacity-20 rounded-md" type="search" placeholder="Search" />
              <span className="text-xs text-title ml-4">Close</span>
            </div>
          )
        }
        <div className="flex space-x-2 mt-4">
          {
            btnList.map(item => (
              <div onClick={() => setIsSearch(item.title)} className={
                classNames("cursor-pointer  flex items-center text-xs font-bold h-[32px] px-4 rounded-[18px] text-title", item.title === isSearch ? 'bg-[#3BC117]' : 'bg-primary')
              }>
                <img className="w-[24px] h-[24px] pr-1" src={item.src} alt="" />
                {item.title}
              </div>
            ))
          }
        </div>
        {
          isSearch && (
            <>
              <div className="mt-6 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-title text-[22px] font-semibold">
                  <div className="flex items-center">
                    <img className="w-[24px] h-[24px] mr-3" src="https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code/international.svg" alt="" />
                    UEFA Europa League
                    <CustomIcon type="arrow" size={16}
                      svgProps={{
                        className: "rotate-0 peer-checked:rotate-180",
                      }}
                    />
                  </div>
                </div>
                <div className="collapse-content">
                  <div
                    className="grid gap-4 sports-module-container"
                  >
                    {teamCardList.map((item, index) => (
                      <GameCard {...item} key={index} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-title text-[22px] font-semibold">
                  <div className="flex items-center">
                    <CustomIcon type="vedio"
                      svgProps={{
                        className: "-ml-1 w-[32px] h-[32px] mr-2",
                      }}
                    />
                    Outrights International Clubs
                    <CustomIcon type="arrow" size={16}
                      svgProps={{
                        className: "rotate-0 peer-checked:rotate-180",
                      }}
                    />
                  </div>
                </div>
                <div className="collapse-content">
                  {teamCardList.map((item, index) => (
                    <div key={index} className="bg-primary mb-4 pt-4 px-4 pb-6 rounded-lg">
                      <div className="flex items-center mb-3 text-title">
                        <CustomIcon
                          type="soccer"
                          svgProps={{
                            className: "w-[32px] h-[32px] mr-2 opacity-30",
                          }}
                        />
                        <div className="text-title font-semibold">
                          <p className=" opacity-30 mb-2">Mar 25, 12:00</p>
                          <p>UEFA Europa League - Liverpool FC reach the Semi-Final?</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 text-title">
                        <div className="inline-flex items-center w-1/2 h-[32px] rounded-lg bg-[#2e3036] px-2 text-xs">
                          <span className="opacity-50 flex-1">Yes</span>
                          <span>1.2</span>
                        </div>
                        <div className="inline-flex items-center w-1/2 h-[32px] rounded-lg bg-[#2e3036] px-2 text-xs">
                          <span className="opacity-50 flex-1">No</span>
                          <span>3.2</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )
        }
        {
          !isSearch && (
            <div className="w-full flex flex-col items-center pt-12">
              <CustomIcon type="sports" svgProps={{
                width: 263,
                height: 110,
                viewBox: undefined,
                className: "w-[263px] h-[110px]"
              }} />
              <h3 className="text-title text-lg mt-8">Looking for something special?</h3>
            </div>
          )
        }
      </div>
    </div>
  );
}
