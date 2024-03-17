'use client';
import React, { useState } from 'react';
import { ProfileTitle } from '@/components/ui/ProfileTitle';
import { ProfileNav } from '@/components/ui/ProfileNav';
import Coin from "@/assets/profile/coin.webp"
import Image from 'next/image';
import Switch from '@/components/ui/Switch';
import Input from '@/components/form/Input';
import BTC from "@/assets/profile/BTC.webp";

export default function WalletBalance(){

    const [navList,setNavList] = useState<any>([
        {
            title:"Fiat Currency",
            array:[
                {
                    icon:null,
                    name:"CHF",
                    value:"BDT 0.00",
                    num:0.00,
                }
            ]
        },
        {
            title:"Crypto Currency",
            array:[
                {
                    icon:null,
                    name:"JB",
                    value:"BDT 0.00",
                    num:0.00,
                },
                {
                    icon:null,
                    name:"BCD",
                    value:"BDT 0.00",
                    num:0.00,
                },
                {
                    icon:null,
                    name:"SATS",
                    value:"BDT 0.00",
                    num:0.00,
                },
                {
                    icon:null,
                    name:"ETH",
                    value:"BDT 0.00",
                    num:0.00,
                },
                {
                    icon:null,
                    name:"BNB",
                    value:"BDT 0.00",
                    num:0.00,
                },
            ]
        }
    ])

    return <div style={{ maxWidth:'1430px',margin:'0 auto',marginTop:'1.5rem',width:'100%' }}>
        <ProfileTitle title="WALLET"></ProfileTitle>
        <div className='flex justify-between'>
            <ProfileNav active={0}></ProfileNav>
            <div className='w-full flex-1 flex flex-col'>
                <div className="py-6 pr-8 pl-6 flex item-center bg-[#fff]">
                    <div className="">
                        <div className='flex items-center'>
                            <Image className='w-11' src={Coin} alt=""></Image>
                            <div className='flex flex-col justify-center'>
                                <span className='text-[#000000] text-sm text-lg'>Total Balance</span>
                                <span className="text-[#feca20] font-bold">BDT 0.00</span>
                            </div>
                            <div className='flex flex-col justify-center ' style={{ marginLeft:'4rem' }}>
                                <span className='text-[#000000] text-sm text-lg'>Real Money</span>
                                <span className="text-[#000000] font-bold">BDT 0.00</span>
                            </div>
                            <div className='flex flex-col justify-center' style={{ marginLeft:'4rem' }}>
                                <span className='text-[#000000] text-sm text-lg'>Bonus Money</span>
                                <span className="text-[#000000] font-bold">BDT 0.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 pr-8 pl-6 flex item-center bg-[#fff] flex-col">
                    <div className="flex items-center justify-between w-full">
                        <div className='flex items-center text-[#31373D] text-sm'>
                            <span className='mr-2' style={{ whiteSpace:'nowrap' }}>Hide 0 balance</span>
                            <Switch size="small"></Switch>
                        </div>
                        <div style={{ width:'200px' }}>
                            <Input name="Search" placeholder='Search'></Input>
                        </div>
                    </div>
                    <div className="">
                        {
                            navList.map((item:any) => {
                                return <div className='mt-5'>
                                    <div className="mb-3 text-[#000000] text-sm">
                                        {
                                            item.title
                                        }
                                    </div>
                                    <div>
                                        {
                                            item.array.map((item2:any) => {
                                                return <div className="bg-[#F7F7FA] px-8 py-6 flex items-center justify-between" style={{ marginBottom:"1px" }}>
                                                    <div className='flex items-center'>
                                                        <Image src={BTC} alt="" className='w-7 h-7 mr-4' />
                                                        <span className='text-[#31373d] text-sm font-bold whitespace-no-wrap'>{ item2.name }</span>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <div className='flex flex-col items-end ml-5'>
                                                            <span className="text-[#31373d] font-bold text-sm">{ item2.value }</span>
                                                            <span className="text-[rgba(153,164,176,.8)] text-xs">{ item2.num }</span>
                                                        </div>
                                                        <span className='ml-5 text-[#28a700] cursor-pointer text-xs'>Deposit</span>
                                                        <span className='ml-5 text-[#28a700] cursor-pointer text-xs'>Withdraw</span>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}