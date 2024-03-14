'use client';

import DefButton from "@/components/ui/Button";
import { ProfileNav } from "@/components/ui/ProfileNav";
import { ProfileTitle } from "@/components/ui/ProfileTitle";
import React, { useState } from "react";
import USDT from "@/assets/coin/us.png";
import Image from 'next/image';
import Icon from "@/components/icon/Icon";
import { Tooltip } from "antd";
import CODE from "@/assets/coin/code.png"
import { Empty } from "@/components/ui/Empty";

export default function WalletDeposit(){

    const [nav,setNav] = useState<any>([
        {
            name:"Crypto",
            active:true,
        },
        {
            name:"Fiat",
            active:false,
        }
    ])

    const changeActive = (index:any) => {
        const updatedNav = nav.map((item:any, i:any) => ({
          ...item,
          active: i === index, // 将当前索引的 active 设置为 true，其余为 false
        }));
        setNav(updatedNav);
    };

      const [btnActive, setBtnActive] = useState(0)

      const [coinArray,setCoinArray] = useState<any>([
        {
            text:"USDT",
            icon:USDT
        },
        {
            text:"USDT",
            icon:USDT
        },
        {
            text:"USDT",
            icon:USDT
        },
        {
            text:"USDT",
            icon:USDT
        },
    ])

    return <div style={{ maxWidth:'1430px',margin:'0 auto',marginTop:'1.5rem',width:'100%' }}>
        <ProfileTitle title="WALLET"></ProfileTitle>
        <div className='flex justify-between'>
            <ProfileNav active={1}></ProfileNav>
            <div className='w-full flex-1 flex flex-col py-6 px-8 bg-[#fff]'>
                <div className="h-9 flex mb-4" style={{ borderBottom:'1px solid #F1F3F7' }}>
                    {
                        nav.map((item:any,index:any) => {
                            return <div onClick={() => changeActive(index)} className="flex justify-center items-center cursor-pointer" style={ item.active ? { borderBottom:'2px solid #3BC117',boxSizing:'border-box',backgroundImage:'linear-gradient(to top, rgba(59, 193, 23, .15), rgba(59, 193, 23, 0) 60%)',fontWeight:'bold',minWidth:'12.5rem' } : { minWidth:'12.5rem' }}>
                                {
                                    item.name
                                }
                            </div>
                        })
                    }
                </div>
                {
                    nav[0].active ? 
                    <>
                        <div className="" style={{ maxWidth:'500px' }}>
                            <div className="py-7 bg-[#fff]">
                                <div className="flex h-7 mb-3 justify-between" style={{ flexWrap:'wrap' }}>
                                    {
                                        coinArray.map((item:any,index:any) => {
                                            return <div key={index} style={{ width:'fit-content' }} className="text-base mr-2 px-3 h-7 flex items-center bg-[#eaecf3] rounded-xl" style={{ boxSizing:'border-box' }}>
                                                <Image src={item.icon} alt="" className="w-4 h-4 mr-1">
                                                </Image>
                                                { item.text }
                                            </div>
                                        })
                                    }
                                    <div className="mr-2 px-3 h-7 flex items-center bg-[#eaecf3] rounded-xl" style={{ boxSizing:'border-box' }}>
                                        <span className="mr-2 text-base">
                                            More
                                        </span>
                                        <Image src={USDT} alt="" className="w-4 h-4 mr-1">
                                        </Image>
                                        <Icon icon="HeroDropDown" className="w-4 h-4">
                                        </Icon>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col w-1/2 mr-4">
                                        <span className="mb-3">Deposit Currency</span>
                                        <div className="h-12 bg-[#F5F6FA] px-5 flex items-center justify-between">
                                            <div className="flex">
                                                <Image src={USDT} alt="" className="w-7 h-7 mr-4">
                                                </Image>
                                                <span className="text-base">USDT</span>
                                            </div>
                                            <Icon icon="HeroDropDown" className="w-4 h-4">
                                            </Icon>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-1/2">
                                        <span className="mb-3">Choose Network</span>
                                        <div className="h-12 bg-[#F5F6FA] px-5 flex items-center justify-between">
                                            <div className="flex">
                                                <Image src={USDT} alt="" className="w-7 h-7 mr-4">
                                                </Image>
                                                <span className="text-base">USDT</span>
                                            </div>
                                            <Icon icon="HeroDropDown" className="w-4 h-4">
                                            </Icon>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-center">
                                        Get extra <b>180%</b> bonus on minimum of <b>10.00 USDT</b> deposit
                                        <Tooltip title={<div>
                                            1st Deposit Bonus<br/>
                                            180% Up to 20000.00 USDT<br/>
                                            Minimum Deposit 10.00
                                        </div>}>
                                        <Icon className="ml-2 cursor-pointer" icon="HeroWarning" />
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className="mt-2 py-5 px-3 bg-[#f5f6fa] flex flex-col">
                                    <div className="flex items-center">
                                        <Image className="mr-4" style={{ height:'9.25rem',width:'9.25rem' }} src={CODE} alt="">
                                        </Image>
                                        <div className="flex flex-col">
                                            <span>Deposit Address</span>
                                            <div className="p-2 bg-[#e7eaf0] flex items-center justify-between">
                                                <div style={{ width:'18rem',boxSizing:'border-box' }} className="break-words pr-4">
                                                    0x8d2Ac715C72DEBaa9019152DbD707675116B45Bd
                                                </div>
                                                <div className="px-5 h-7 bg-[#DADDE6] rounded-sm cursor-pointer">Copy</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 bg-[#e7eaf0] flex items-center py-1 px-2">
                                        <Icon className="ml-2 mr-2 cursor-pointer" icon="HeroWarning" />
                                        Minimum Deposit: 0.000000001 USDT
                                    </div>
                                </div>
                                <div className="mt-5 bg-[#3ac9481a] py-2 px-3">
                                    <span className="text-[#3BC117] font-bold">NOTICE: </span>
                                    Send only USDT to this deposit address. Coins will be deposited automatically after 6 network confirmations. Smart contract addresses are not supported(Contact us).
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="flex items-center justify-between" style={{ maxWidth:'420px' }}>
                            <span className="text-[#31373D] text-sm">Deposit Currency</span>
                            <div className="flex items-center">
                                <span className="mr-2 text-base font-bold">CHF</span>
                                <Image src={USDT} alt="" className="w-7 h-7"></Image>
                                <Icon icon="HeroChevronRight" style={{ transform:'rotate(90deg)' }} className="ml-2">
                                </Icon>
                            </div>
                            
                        </div>
                        <Empty></Empty>
                    </>
                }
            </div>
        </div>
    </div>

}