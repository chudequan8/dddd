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

import Lock from "@/assets/profile/lock.svg"
import tip from "@/assets/profile/tips.svg"

export default function WalletRollover(){

    return <div style={{ maxWidth:'1430px',margin:'0 auto',marginTop:'1.5rem',width:'100%' }}>
        <ProfileTitle title="Global Settings"></ProfileTitle>
        <div className='flex justify-between'>
            <ProfileNav active={4}></ProfileNav>
            <div className="w-full flex-1 flex flex-col">
                <div className='p-6 flex flex-col bg-[#fff]'>
                    <div className='flex flex-col pb-3 border-b border-solid border-gray-300'>
                        <span className='font-bold text-base'>Verify Setup</span>
                        <span className='mt-3 text-sm'>
                            To serve you better we ask that you provide original identifying documents. This will secure your account in cases of account recovery. It also helps to ensure that the gifts or actual rewards you receive are sent to the correct location.
                        </span>
                    </div>
                    <div className='mt-5 flex flex-wrap gap-4'>
                        <div style={{ height:'fit-content',width:'49%' }} className="justify-between items-center flex flex-col h-32 bg-[#f1f3f7] rounded-lg">
                            <div className='flex justify-center mt-8'>
                                <span className='font-bold'>Basic Verification</span>
                            </div>
                            <div className='flex flex-col px-6 mt-2 w-full'>
                                <span className='mb-2 mt-2 text-base flex items-center'>
                                    <Icon icon='HeroLanguage'></Icon>
                                    <span className='ml-2'>Personal Information</span>
                                </span>
                                <span className='mb-2 mt-2 text-base flex items-center'>
                                    <Icon icon='HeroLanguage'></Icon>
                                    <span className='ml-2'>Facial Verification</span>
                                </span>
                                <span className='mb-2 mt-2 text-base flex items-center'>
                                    <Icon icon='HeroLanguage'></Icon>
                                    <span className='ml-2'>Government ID</span>
                                </span>
                            </div>
                            <div className='cursor-pointer w-full h-9 flex justify-center items-center text-[#fff]' style={{ width:"90%",marginTop:'2rem',borderRadius:'.25rem',backgroundColor:'#1d803ab3',backgroundImage:'conic-gradient(from 1turn, rgba(88, 175, 16, 1), rgba(29, 128, 58, 1));' }}>
                                Verify Now
                            </div>
                            <span className='mb-4 mt-2 text-base flex items-center'>
                                <Icon icon='HeroLanguage'></Icon>
                                <span className='ml-2'>Review time: Few mins</span>
                            </span>
                        </div>
                        <div style={{ height:'fit-content',width:'49%' }} className="justify-between items-center flex flex-col h-32 bg-[#f1f3f7] rounded-lg">
                            <div className='flex justify-center mt-8'>
                                <span className='font-bold'>Advanced Verification</span>
                            </div>
                            <div className='flex flex-col px-6 mt-2 w-full'>
                                <span className='mb-2 mt-2 text-base flex items-center'>
                                    <Icon icon='HeroLanguage'></Icon>
                                    <span className='ml-2'>Basic Verification</span>
                                </span>
                                <span className='mb-2 mt-2 text-base flex items-center'>
                                    <Icon icon='HeroLanguage'></Icon>
                                    <span className='ml-2'>Proof of Address</span>
                                </span>
                                <span className='mb-2 mt-2 text-base flex items-center'>
                                    <Icon icon='HeroLanguage'></Icon>
                                    <span className='ml-2'>Video verification</span>
                                </span>
                            </div>
                            <div className='cursor-pointer w-full h-9 flex justify-center items-center text-[#fff]' style={{ width:"90%",marginTop:'2rem',borderRadius:'.25rem',backgroundColor:'#1d803ab3',backgroundImage:'conic-gradient(from 1turn, rgba(88, 175, 16, 1), rgba(29, 128, 58, 1));' }}>
                                Verify Now
                            </div>
                            <span className='mb-4 mt-2 text-base flex items-center'>
                                <Icon icon='HeroLanguage'></Icon>
                                <span className='ml-2'>10 D</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}