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

export default function WalletWithdraw(){

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
            <ProfileNav active={2}></ProfileNav>
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
            </div>
        </div>
    </div>
}