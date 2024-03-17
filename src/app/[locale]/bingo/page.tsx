'use client'

import React, { useState } from "react"
import CasinoItem from '@/components/casino/CasinoItem';
import BreadCrumb from "@/components/ui/BreadCrumb";
import sImg from '@/assets/bingo/s.png'
import Image from "next/image";
import CoinFlagImg from '@/assets/bingo/coinFlag.png'
import Icon from "@/components/icon/Icon";

const Bingo = () => {
    const [ onlineActive, setOnlineActive ] = useState(0)
    return (
        <div className="max-page-container">
            <BreadCrumb option={[{name: 'Bingo'}]} />
			<div className='text-2xl text-title mt-4 mb-2'>Play Online Bingo</div>
            <div className="grid grid-cols-6 gap-5">
                {new Array(5).fill(0).map((t, index) => (
                    <div
                        className="w-full relative rounded-md overflow-hidden cursor-pointer"
                        onMouseEnter={() => setOnlineActive(index)}
                        onMouseLeave={() => setOnlineActive(-1)}
                        >
                        <div className="absolute right-0 top-0 text-sm px-4 py-1 z-10 rounded-sm text-white" style={{
                            background: 'rgba(0, 0, 0, 0.7)'
                        }}>00:00</div>
                        <Image className="opacity-[0.7]" src={sImg} alt=""></Image>
                        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-4" style={{
                            backgroundImage: 'linear-gradient(0deg,var(--1q81als) 69.86%,var(--1f5xvoq) 100%)'
                        }}>
                            <div className="flex text-yellow text-lg items-center justify-center leading-3">
                                <Image className="w-5 h-5 mr-2" src={CoinFlagImg} alt=""></Image>
                                R$127,109.52
                            </div>
                            <div className="mt-2 h-[40px]">
                                {
                                    onlineActive == index ? (
                                    <>
                                            <div className="s-conic py-2 text-base text-center rounded-md">
                                                Play
                                            </div>
                                    </>
                                    ) : (
                                        <>
                                            <p className="mb-2 mx-auto h-[1px]" style={{background: 'rgba(152,167,181,.2)', borderTop: 'rgba(152,167,181,.2)'}}></p>
                                            <div className="flex justify-center text-sm text-title gap-1">
                                                <div className="flex items-center">
                                                    <Icon className="mr-1 text-[#98A7B5] !w-4 !h-4" icon='CasinoUserIcon'></Icon>
                                                    0
                                                </div>
                                                
                                                <div className="flex items-center">
                                                    <Icon className="mr-1 text-[#98A7B5] !w-4 !h-4" icon='BingoMoney'></Icon>
                                                    R$0.10
                                                </div>
                                                <div className="flex items-center">
                                                    <Icon className="mr-1 text-[#98A7B5] !w-4 !h-4" icon='BingoSetting'></Icon>
                                                    R$32.37
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                            
                            
                        </div>
                    </div>
                ))}
            </div>

			<div className='text-2xl text-title mt-4 mb-2'>Buy Extra Ball Feature</div>
            <div className='grid grid-cols-6 w-full gap-5'>
                <CasinoItem className='flex-1'></CasinoItem>
                <CasinoItem className='flex-1'></CasinoItem>
                <CasinoItem className='flex-1'></CasinoItem>
                <CasinoItem className='flex-1'></CasinoItem>
                <CasinoItem className='flex-1'></CasinoItem>
                <CasinoItem className='flex-1'></CasinoItem>
            </div>
        </div>
    )
}

export default Bingo