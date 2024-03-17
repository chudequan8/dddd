'use client'

import React, { FC, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { CustomIcon } from '@/components/icon/common';
import classNames from 'classnames';

type TeamInfo = {
    logo: StaticImageData;
    title: string;
    score: number;
}

type ScoreCard = {
    left: any;
    right: any;
}

export type GameCardProps = {
    active?: boolean;
    team: TeamInfo[];
    '1x2': ScoreCard[];
    'Double chance': ScoreCard[];
    total: ScoreCard[];
    Handicap: ScoreCard[];
    'Draw no bet': ScoreCard[];
    'Both teams to score': ScoreCard[];
}

const GameCard: FC<GameCardProps> = (props) => {

    const { active, team } = props;

    const [open, setOpen] = useState(false);

    return (
        <div
            className={classNames('relative justify-self-stretch min-w-0 h-[204px]', active && 'last-card')}
        >
            <div className={classNames("collapse relative p-2 bg-[#24262B] rounded-lg", open ? 'collapse-open z-[100]' : 'collapse-close')} tabIndex={0} style={{
                boxShadow: open ? '0 0 100px rgba(0,0,0,0.65)' : 'none'
            }} >
                <div className='relative z-10'>
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
                        {
                            team.map(teamInfo => (
                                <div className="relative flex items-center mb-2">
                                    <Image src={teamInfo.logo} className=" w-8 h-8" alt="" />
                                    <span className="flex-1">{teamInfo.title}</span>
                                    <div className="min-w-[32px] text-center px-2 py-1 text-sm font-semibold rounded-lg border border-solid border-opacity-10 border-white bg-white bg-opacity-5">
                                        {teamInfo.score}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="pl-2 font-semibold text-xs text-white text-opacity-50">
                        1x2
                    </div>
                    <div
                        className="mt-2 flex items-center"
                    >
                        <div className="inline-flex flex-1 -m-1 " style={{
                            width: "calc(100% + 8px)",
                        }}>
                            {
                                props['1x2'].map((scoreItem, index) => (
                                    <div key={index} className="p-1 w-1/3 basis-1/3">
                                        <div className="flex items-center font-semibold text-xs h-[40px] px-2 text-white bg-[#2e3036] rounded-md">
                                            <span className="flex-1 text-white text-opacity-50">
                                                {scoreItem.left}
                                            </span>
                                            <span>{scoreItem.right}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="w-[32px] h-[40px] ml-2 px-2 text-white text-opacity-50 hover:text-opacity-100 text-xs bg-[#2e3036] rounded-md flex items-center justify-center cursor-pointer" onClick={() => setOpen(!open)}>
                            <CustomIcon type="arrow" size={16}
                            svgProps={{
                              className: classNames(
                                'transition-transform',
                                open ? "-rotate-180" : "rotate-0"
                              ),
                            }} 
                            />
                        </div>
                    </div>
                </div>
                <div className='collapse-content -mt-2 p-2 text-white text-opacity-50 text-xs'>
                    <div className='max-h-[302px] overflow-y-auto overflow-x-hidden -mx-2'>
                        <div className='pt-5'>
                            <div className="pl-2 font-semibold text-xs text-white text-opacity-50">
                                Double chance
                            </div>
                            <div
                                className="mt-2 flex items-center"
                            >
                                <div className="inline-flex flex-1 -m-1 " style={{
                                    width: "calc(100% + 8px)",
                                }}>
                                    {
                                        props['Double chance'].map((scoreItem, index) => (
                                            <div key={index} className="p-1 w-1/3 basis-1/3">
                                                <div className="flex items-center font-semibold text-xs h-[40px] px-2 text-white bg-[#2e3036] rounded-md">
                                                    <span className="flex-1 text-white text-opacity-50 overflow-hidden break-all h-[1.2em]">
                                                        {scoreItem.left}
                                                    </span>
                                                    <span className='pl-1'>{scoreItem.right}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                        <div className='pt-5'>
                            <div className="pl-2 font-semibold text-xs text-white text-opacity-50">
                                total
                            </div>
                            <div
                                className="mt-2 flex items-center"
                            >
                                <div className="inline-flex flex-1 -m-1 " style={{
                                    width: "calc(100% + 8px)",
                                }}>
                                    {
                                        props['total'].map((scoreItem, index) => (
                                            <div key={index} className="p-1 w-1/2 basis-1/2">
                                                <div className="flex items-center font-semibold text-xs h-[40px] px-2 text-white bg-[#2e3036] rounded-md">
                                                    <span className="flex-1 text-white text-opacity-50 overflow-hidden break-all h-[1.2em]">
                                                        {scoreItem.left}
                                                    </span>
                                                    <span className='pl-1'>{scoreItem.right}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <div className="pl-2 font-semibold text-xs text-white text-opacity-50">
                                Handicap
                            </div>
                            <div
                                className="mt-2 flex items-center"
                            >
                                <div className="inline-flex flex-1 -m-1 " style={{
                                    width: "calc(100% + 8px)",
                                }}>
                                    {
                                        props['Handicap'].map((scoreItem, index) => (
                                            <div key={index} className="p-1 w-1/2 basis-1/2">
                                                <div className="flex items-center font-semibold text-xs h-[40px] px-2 text-white bg-[#2e3036] rounded-md">
                                                    <span className="flex-1 text-white text-opacity-50 overflow-hidden break-all h-[1.2em]">
                                                        {scoreItem.left}
                                                    </span>
                                                    <span className='pl-1'>{scoreItem.right}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <div className="pl-2 font-semibold text-xs text-white text-opacity-50">
                                Draw no bet
                            </div>
                            <div
                                className="mt-2 flex items-center"
                            >
                                <div className="inline-flex flex-1 -m-1 " style={{
                                    width: "calc(100% + 8px)",
                                }}>
                                    {
                                        props['Draw no bet'].map((scoreItem, index) => (
                                            <div key={index} className="p-1 w-1/2 basis-1/2">
                                                <div className="flex items-center font-semibold text-xs h-[40px] px-2 text-white bg-[#2e3036] rounded-md">
                                                    <span className="flex-1 text-white text-opacity-50 overflow-hidden break-all h-[1.2em]">
                                                        {scoreItem.left}
                                                    </span>
                                                    <span className='pl-1'>{scoreItem.right}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <div className="pl-2 font-semibold text-xs text-white text-opacity-50">
                                Both teams to score
                            </div>
                            <div
                                className="mt-2 flex items-center"
                            >
                                <div className="inline-flex flex-1 -m-1 " style={{
                                    width: "calc(100% + 8px)",
                                }}>
                                    {
                                        props['Both teams to score'].map((scoreItem, index) => (
                                            <div key={index} className="p-1 w-1/2 basis-1/2">
                                                <div className="flex items-center font-semibold text-xs h-[40px] px-2 text-white bg-[#2e3036] rounded-md">
                                                    <span className="flex-1 text-white text-opacity-50 overflow-hidden break-all h-[1.2em]">
                                                        {scoreItem.left}
                                                    </span>
                                                    <span className='pl-1'>{scoreItem.right}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GameCard;
