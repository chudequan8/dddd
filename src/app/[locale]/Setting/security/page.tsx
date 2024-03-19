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
                    <div className='pb-3 font-bold text-base border-b border-solid border-gray-300'>
                        Security Setup
                    </div>
                    <div className='mt-5 flex flex-wrap gap-4'>
                        <div style={{ height:'180px',width:'49%' }} className="justify-between px-4 py-5 flex flex-col h-32 bg-gray-300 bg-[#f1f3f7] rounded-lg">
                            <div className='flex justify-between'>
                                <Image src={Lock} alt="" className='h-7 w-7'></Image>
                                <Image src={tip} alt="" className='h-7 w-7'></Image>
                            </div>
                            <div className='flex flex-col'>
                                <span className='mb-2 font-bold text-base'>Set Password</span>
                                <span className='text-sm text-[#67707B]'>Create your own password for security.</span>
                            </div>
                            <div className='cursor-pointer w-full h-9 flex justify-center items-center text-[#fff]' style={{ borderRadius:'.25rem',backgroundColor:'#1d803ab3',backgroundImage:'conic-gradient(from 1turn, rgba(88, 175, 16, 1), rgba(29, 128, 58, 1));' }}>
                                SetPassword
                            </div>
                        </div>
                        <div style={{ height:'180px',width:'49%' }} className="justify-between px-4 py-5 flex flex-col h-32 bg-gray-300 bg-[#f1f3f7] rounded-lg">
                            <div className='flex justify-between'>
                                <Image src={Lock} alt="" className='h-7 w-7'></Image>
                                <Image src={tip} alt="" className='h-7 w-7'></Image>
                            </div>
                            <div className='flex flex-col'>
                                <span className='mb-2 font-bold text-base'>Email Verification</span>
                                <span className='text-sm text-[#67707B]'>Your email address is verified!</span>
                            </div>
                            <div className='cursor-pointer w-full h-9 flex justify-center items-center text-[#fff]' style={{ borderRadius:'.25rem',backgroundColor:'#1d803ab3',backgroundImage:'conic-gradient(from 1turn, rgba(88, 175, 16, 1), rgba(29, 128, 58, 1));' }}>
                                Verified
                            </div>
                        </div>
                        <div style={{ height:'180px',width:'49%' }} className="justify-between px-4 py-5 flex flex-col h-32 bg-gray-300 bg-[#f1f3f7] rounded-lg">
                            <div className='flex justify-between'>
                                <Image src={Lock} alt="" className='h-7 w-7'></Image>
                                <Image src={tip} alt="" className='h-7 w-7'></Image>
                            </div>
                            <div className='flex flex-col'>
                                <span className='mb-2 font-bold text-base'>Phone Number Verification</span>
                                <span className='text-sm text-[#67707B]'>Verify your phone number is valid and accessible by you.</span>
                            </div>
                            <div className='cursor-pointer w-full h-9 flex justify-center items-center text-[#fff]' style={{ borderRadius:'.25rem',backgroundColor:'#1d803ab3',backgroundImage:'conic-gradient(from 1turn, rgba(88, 175, 16, 1), rgba(29, 128, 58, 1));' }}>
                            Phone Number Verification
                            </div>
                        </div>
                        <div style={{ height:'180px',width:'49%' }} className="justify-between px-4 py-5 flex flex-col h-32 bg-gray-300 bg-[#f1f3f7] rounded-lg">
                            <div className='flex justify-between'>
                                <Image src={Lock} alt="" className='h-7 w-7'></Image>
                                <Image src={tip} alt="" className='h-7 w-7'></Image>
                            </div>
                            <div className='flex flex-col'>
                                <span className='mb-2 font-bold text-base'>Two-factor authentication</span>
                                <span className='text-sm text-[#67707B]'>Enable Two-factor to protect your account from unauthorized access.</span>
                            </div>
                            <div className='cursor-pointer w-full h-9 flex justify-center items-center text-[#fff]' style={{ borderRadius:'.25rem',backgroundColor:'#1d803ab3',backgroundImage:'conic-gradient(from 1turn, rgba(88, 175, 16, 1), rgba(29, 128, 58, 1));' }}>
                                Enable 2FA
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-3 bg-[#fff] p-6'>
                    <div className='pb-3 font-bold text-base'>
                        Sessions
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex bg-[#EAECF3] h-9 items-center px-2'>
                            <div className='' style={{ width:'45%' }}>
                                Device
                            </div>  
                            <div className='' style={{ width:'15%' }}>
                                Location
                            </div>
                            <div className='' style={{ width:'20%' }}>
                                IP Address
                            </div>
                            <div className='' style={{ width:'10%' }}>
                                Last Used
                            </div>
                            <div className='' style={{ width:'10%' }}>
                                Edit
                            </div>
                        </div>
                        <div className='flex h-12 items-center px-2 border-b border-solid border-gray-300'>
                            <div className='' style={{ width:'45%' }}>
                                Windows 10 (Chrome 12)
                            </div>  
                            <div className='' style={{ width:'15%' }}>
                            JP
                            </div>
                            <div className='' style={{ width:'20%' }}>
                            38.207.136.210
                            </div>
                            <div className='' style={{ width:'10%' }}>
                            Online	
                            </div>
                            <div className='' style={{ width:'10%' }}>
                            In Use
                            </div>
                        </div>
                        <div className='flex h-12 items-center px-2 border-b border-solid border-gray-300'>
                            <div className='' style={{ width:'45%' }}>
                                Windows 10 (Chrome 12)
                            </div>  
                            <div className='' style={{ width:'15%' }}>
                            JP
                            </div>
                            <div className='' style={{ width:'20%' }}>
                            38.207.136.210
                            </div>
                            <div className='' style={{ width:'10%' }}>
                            Online	
                            </div>
                            <div className='' style={{ width:'10%' }}>
                            In Use
                            </div>
                        </div>
                        <div className='flex h-12 items-center px-2 border-b border-solid border-gray-300'>
                            <div className='' style={{ width:'45%' }}>
                                Windows 10 (Chrome 12)
                            </div>  
                            <div className='' style={{ width:'15%' }}>
                            JP
                            </div>
                            <div className='' style={{ width:'20%' }}>
                            38.207.136.210
                            </div>
                            <div className='' style={{ width:'10%' }}>
                            Online	
                            </div>
                            <div className='' style={{ width:'10%' }}>
                            In Use
                            </div>
                        </div>
                        <div className='flex h-12 items-center px-2 border-b border-solid border-gray-300'>
                            <div className='' style={{ width:'45%' }}>
                                Windows 10 (Chrome 12)
                            </div>  
                            <div className='' style={{ width:'15%' }}>
                            JP
                            </div>
                            <div className='' style={{ width:'20%' }}>
                            38.207.136.210
                            </div>
                            <div className='' style={{ width:'10%' }}>
                            Online	
                            </div>
                            <div className='' style={{ width:'10%' }}>
                            In Use
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}