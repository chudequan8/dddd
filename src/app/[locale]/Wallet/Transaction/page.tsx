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

export default function WalletTransaction(){

    const [transaction,transactionList] = useState([
        {
            name:"Deposit",
            active:true,
        },
        {
            name:"All assets",
            active:false,
        },
        {
            name:"Past 30 days",
            active:false,
        },
        {
            name:"All status",
            active:false,
        },
    ]);

    const [isDetails,setIsDetails] = useState(true);

    return <div style={{ maxWidth:'1430px',margin:'0 auto',marginTop:'1.5rem',width:'100%' }}>
        <ProfileTitle title="WALLET"></ProfileTitle>
        <div className='flex justify-between'>
            <ProfileNav active={4}></ProfileNav>
            <div className="w-full flex-1 flex flex-col">
                <div className='flex'>
                    {
                        transaction.map(item => {
                            return <div className='h-12 mr-3 px-5 flex justify-between bg-[#fff] items-center' style={{ minWidth:'9.375rem' }}>
                                <span style={{ whiteSpace:"nowrap" }}>{ item.name }</span>
                                <Icon icon='HeroAntModalClose' className='w-10 ml-5'>
                                </Icon>
                            </div>
                        })
                    }
                </div>
                <div className='mt-8 bg-[#fff] py-10 flex justify-center'>
                    <Empty></Empty>
                </div>
            </div>
        </div>
    </div>
}