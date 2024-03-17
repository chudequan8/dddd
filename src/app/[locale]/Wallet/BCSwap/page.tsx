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

export default function WalletBCSwap(){

    return <div style={{ maxWidth:'1430px',margin:'0 auto',marginTop:'1.5rem',width:'100%' }}>
        <ProfileTitle title="WALLET"></ProfileTitle>
        <div className='flex justify-between'>
            <ProfileNav active={4}></ProfileNav>
            <div className='w-full flex-1 flex flex-col py-6 px-8 bg-[#fff]'>
                <div className="mt-6" style={{ maxWidth:'420px' }}>
                    <div className="flex flex-col w-full">
                        <div className="mb-3 flex justify-between">
                            <span>You get Approximately</span>
                            <span>Min:1 BCD</span>
                        </div>
                        <div className="relative">
                            <div className="flex items-center justify-between" style={{ border:"4px solid #EAECF3",borderBottom:'none' }}>
                                <div className="h-12 bg-[#F6F7FA] w-full pl-5 flex">
                                    <Input value={0} name="" className="h-full font-bold text-[#31373d] outline-none"></Input>
                                    <div className='flex items-center bg-[#fff] mr-1'>
                                        <Button style={{ fontSize: '14px' }} className="bg-[#fff] dark:bg-[#1e2024] flex items-center">
                                            <span>
                                                Max
                                            </span>
                                        </Button>
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
                            <div className="flex items-center justify-between" style={{ border:"4px solid #EAECF3" }}>
                                <div className="h-12 bg-[#F6F7FA] w-full pl-5 flex">
                                    <Input value={0} name="" className="h-full font-bold text-[#31373d] outline-none"></Input>
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
                            <div className="bg-[#f5f6fa] h-7 w-7 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ border:'3px solid #EAECF3' }}>
                                <Icon icon="HeroChevronRight">

                                </Icon>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mt-5">
                        <div className="mb-3 flex justify-between">
                            <span>Real Money:<span className="font-bold">0 BCD</span></span>
                            <span>Bonus Money:<span className="font-bold">0 BCD</span></span>
                        </div>
                        <div className="h-12 bg-[#F5F6FA] px-5 flex items-center justify-between" style={{ marginBottom:'1px' }}>
                            1 BCD ≈ 1.00000000 USDT
                        </div>
                        <div className="h-12 bg-[#F5F6FA] px-5 flex items-center justify-between">
                            <span>
                            Estimated Time*
                            </span>
                            <span>
                            Seconds
                            </span>
                        </div>
                        <div className="h-12 bg-[#F5F6FA] px-5 flex items-center justify-between">
                            <span>
                            Swap fee:
                            </span>
                            <span>
                            0.00000000 BCD
                            </span>
                        </div>
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
                            Confirm
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>

}