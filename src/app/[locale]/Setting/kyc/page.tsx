'use client';
import { ProfileTitle } from '@/components/ui/ProfileTitle';
import { ProfileNav } from '@/components/ui/ProfileNav';
import React, { useState } from "react";
import USDT from "@/assets/coin/us.png";
import Image from 'next/image';
import Icon from "@/components/icon/Icon";
import { Tooltip } from "antd";
import CODE from "@/assets/coin/code.png"
import { Empty } from "@/components/ui/Empty";
import Input from "@/components/form/Input";
import Button from "@/components/ui/Button";
import NCoin from "@/assets/profile/ncoin.webp"

export default function WalletRollover(){

    return <div style={{ maxWidth:'1430px',margin:'0 auto',marginTop:'1.5rem',width:'100%' }}>
        <ProfileTitle title="Global Settings"></ProfileTitle>
        <div className='flex justify-between'>
            <ProfileNav active={4}></ProfileNav>
            <div className="w-full flex-1 flex flex-col">
                <div className='p-6 flex flex-col bg-[#fff]'>
                    <div className='pb-3 font-bold text-base border-b border-solid border-gray-300'>
                        Profile Info
                    </div>
                    <div className='flex justify-between mt-5'>
                        <div className='flex items-center'>
                            <Image src={USDT} alt="" className='mr-3' style={{ height:"4rem",width:'4rem' }}></Image>
                            <div className='flex-col flex'>
                                <span className='mb-2 font-bold text-base text-[#000]'>huiqing lin</span>
                                <span className='text-base text-[#000]'>User ID: 31577130</span>
                            </div>
                        </div>
                        <div className='h-2'>
                            <Button
                                icon="HeroLanguage"
                                hover
                                className='bg-[#3bc117]'
                            >
                                Edit
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='p-6 flex flex-col bg-[#fff] mt-3'>
                    <div className='pb-3 font-bold text-base border-b border-solid border-gray-300'>
                        Contact Info
                    </div>
                    <div className='flex flex-col mt-5'>
                        <span className='mb-2'>E-mail Verification</span>
                        <div className='px-3 py-2 bg-[#F5F6FA]'>
                            <span className='text-[#5F6975]'>linhuiqing0492@gmail.com</span>
                            <span className='text-[#3bc117]'>Verified</span>
                        </div>
                    </div>
                    <div className='flex justify-between mt-5 items-center'>
                        <div className='flex flex-col mt-5'>
                            <span className='mb-2'>Phone Number</span>
                            <span className='text-[#5F6975]'>Verify your phone number and you can use the phone as your second login method.</span>
                        </div>
                        <div className='h-2'>
                            <Button
                                icon="HeroLanguage"
                                hover
                                className='bg-[#3bc117]'
                            >
                                Edit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}