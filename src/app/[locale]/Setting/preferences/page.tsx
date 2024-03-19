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
import Switch from '@/components/ui/Switch';

export default function WalletRollover(){

    return <div style={{ maxWidth:'1430px',margin:'0 auto',marginTop:'1.5rem',width:'100%' }}>
        <ProfileTitle title="Global Settings"></ProfileTitle>
        <div className='flex justify-between'>
            <ProfileNav active={4}></ProfileNav>
            <div className="w-full flex-1 flex flex-col">
                <div className='p-6 flex flex-col bg-[#fff]'>
                    <div className='pb-3 font-bold text-base border-b border-solid border-gray-300'>
                        Account Preferences
                    </div>
                    <div className='mt-5'>
                        <div className='h-12 py-2 flex justify-between'>
                            <span>View in fiat</span>
                            <Button size='xs' hover>
                                <Image src={USDT} alt='' className='h-5 w-5'></Image>
                                <span className='ml-2 text-lg'>BDT</span>
                            </Button>
                        </div>
                        <div className='h-12 py-2 flex justify-between'>
                            <span>Change Language</span>
                            <Button size='xs' hover>
                                <span className='ml-2 text-lg'>EN</span>
                            </Button>
                        </div>
                        <div className='h-12 py-2 flex justify-between'>
                            <span>Show full name of currency in Crypto list</span>
                            <Switch></Switch>
                        </div>
                        <div className='h-12 py-2 flex justify-between'>
                            <span>Display mode</span>
                            <Switch></Switch>
                        </div>
                    </div>
                </div>
                <div className='p-6 flex flex-col bg-[#fff] mt-3'>
                    <div className='pb-3 font-bold text-base border-b border-solid border-gray-300'>
                        Privacy Preferences
                    </div>
                    <div className='mt-5'>
                        <div className='h-12 py-2 flex justify-between'>
                            <span>Hide my gaming data on profile</span>
                            <Switch></Switch>
                        </div>
                        <div className='h-12 py-2 flex justify-between'>
                            <span>Hide my username from public lists</span>
                            <Switch></Switch>
                        </div>
                        <div className='h-12 py-2 flex justify-between'>
                            <span>Refuse tip from strangers</span>
                            <Switch></Switch>
                        </div>
                    </div>
                </div>
                <div className='p-6 flex flex-col bg-[#fff] mt-3'>
                    <div className='pb-3 font-bold text-base border-b border-solid border-gray-300'>
                        Marketing
                    </div>
                    <div className='mt-5'>
                        <div className='h-12 py-2 flex justify-between'>
                            <span>Receive marketing promotions by Email</span>
                            <Switch></Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}