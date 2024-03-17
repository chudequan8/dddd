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
import Input from "@/components/form/Input";
import Button from "@/components/ui/Button";

import Download from "@/assets/profile/download.png"
import Visa from "@/assets/profile/visa.webp"
import Moonpay from "@/assets/profile/moonpay.png"

import Checkbox from "@/components/form/Checkbox";

export default function WalletBuyCrypto(){

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

    return <div style={{ maxWidth:'1430px',margin:'0 auto',marginTop:'1.5rem',width:'100%' }}>
        <ProfileTitle title="WALLET"></ProfileTitle>
        <div className='flex justify-between'>
            <ProfileNav active={3}></ProfileNav>
            <div className='flex-1 flex flex-col py-6 px-8 bg-[#fff]'>
                <div  style={{ maxWidth:'420px' }}>
                    <div className='mt-5'>
                        <div className="mb-3 text-[#000000] text-sm">
                            You pay with
                        </div>
                        <div>
                            <div className="bg-[#F7F7FA] px-8 py-2 flex items-center justify-between" style={{ marginBottom:"1px" }}>
                                <div className='flex items-center'>
                                    <Input value={30} name="pay" className="text-lg font-bold"></Input>
                                </div>
                                <div className='flex items-center bg-[#fff]'>
                                    <Button style={{ fontSize: '14px' }} className="bg-[#fff] dark:bg-[#1e2024] flex items-center">
                                        <Image className="w-6 h-6 mr-2" src={USDT} alt=""></Image>
                                        <span>
                                            0.00
                                        </span>
                                        <Icon icon="HeroChevronRight" style={{ transform:'rotate(90deg)' }} className="ml-2">
                                        </Icon>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className="mb-3 text-[#000000] text-sm">
                            You get
                        </div>
                        <div>
                            <div className="bg-[#F7F7FA] px-8 py-2 flex items-center justify-between" style={{ marginBottom:"1px" }}>
                                <div className='flex items-center'>
                                    <Input value={29.55} name="pay" className="text-lg font-bold"></Input>
                                </div>
                                <div className='flex items-center bg-[#fff]'>
                                    <Button style={{ fontSize: '14px' }} className="bg-[#fff] dark:bg-[#1e2024] flex items-center">
                                        <Image className="w-6 h-6 mr-2" src={USDT} alt=""></Image>
                                        <span>
                                            0.00
                                        </span>
                                        <Icon icon="HeroChevronRight" style={{ transform:'rotate(90deg)' }} className="ml-2">
                                        </Icon>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className="mb-3 text-[#000000] text-sm">
                            Payment Details
                        </div>
                        <div className="bg-[#f5f6fa] mt-5">
                            <div className="flex justify-between py-2 px-3">
                                <span>Provider</span>
                                <span className="font-bold flex items-center">
                                    <Image src={Download} alt="" className="h-5 w-5"></Image>
                                    MoonPay
                                </span>
                            </div>
                            <div className="flex justify-between py-2 px-3">
                                <span>Method</span>
                                <span className="flex items-center">
                                    Credit Card
                                    <Image src={Visa} alt="" className="h-5 w-auto"></Image>
                                </span>
                            </div>
                            <div className="flex justify-between py-2 px-3">
                                <span>Deposit to account</span>
                                <span className="flex items-center">
                                    huiqing lin
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className="bg-[#f5f6fa] mt-5">
                            <div className="flex justify-between py-2 px-3">
                                <span>Total (including fee)</span>
                                <span className="font-bold flex items-center">
                                    30 USD
                                </span>
                            </div>
                            <div className="flex justify-between py-2 px-3">
                                <span>You will get</span>
                                <span className="font-bold flex items-center text-[#3BC117]">
                                    29.55 USDT
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 bg-[#3ac9481a] py-2 px-3">
                        <div style={{ marginTop:'0' }}>
                            <span className="text-[#3BC117] font-bold">NOTICE: </span>
                            Depending on the blockchain, the deposit may take a few minutes to 1 hour to arrive.
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        <Checkbox></Checkbox>
                        I have read and agree to the <span className="underline">disclaimer.</span>
                    </div>
                    <div className="flex justify-between">
                        <Button
                            style={{
                                backgroundColor: '#1d803ab3',
                                color: '#fff',
                                padding: '10px 100px',
                                fontSize: '14px',
                                backgroundImage:'conic-gradient(from 1turn, rgba(88, 175, 16, 1), rgba(29, 128, 58, 1))',
                                border:'none',
                                margin:'2rem auto'
                            }}
                            className="profile-button">
                            <Image className="w-6 mr-2" src={Moonpay} alt=""></Image>
                            Buy Via MoonPay
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>

}