import { CustomIcon, IconProps } from "@/components/icon/common";

import team1Logo from "@/assets/sports/2824.png";
import team2Logo from "@/assets/sports/4488.png";
import classNames from "classnames";
import GameCard, { GameCardProps } from "./GameCard";
import HotCombos from "./HotCombos";

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

export default function TopMatches() {

  return (
    <div className="mb-4">
      <div className="flex items-center mb-4 mt-6">
        <CustomIcon
          type="crown"
          svgProps={{
            className: "w-[32px] h-[26px] mr-2 text-amber-500",
          }}
        />
        <h3 className="text-[var(--text-color)] text-[22px] font-semibold">
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
                ? "text-white bg-[#3BC117]"
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
          className="grid gap-4 sports-module-container"
        >
          {teamCardList.map((item, index) => (
            <GameCard {...item} key={index} />
          ))}
          <div className="flex justify-self-stretch	min-w-0" style={{
            gridArea: "widget"
          }}>
            <HotCombos /> 
          </div>
        </div>
      </div>
    </div>
  );
}
