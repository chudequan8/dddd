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

export default function WalletVaultPro(){

    const [nav,setNav] = useState<any>([
        {
            name:"Transfer In",
            active:true,
        },
        {
            name:"Transfer Out",
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

    const [drawerN,setDrawN] = useState();
    const toDrawer = (index:any) => {
        setDrawN(index)
    }

    return <div style={{ maxWidth:'1430px',margin:'0 auto',marginTop:'1.5rem',width:'100%' }}>
        <ProfileTitle title="WALLET"></ProfileTitle>
        <div className='flex justify-between'>
            <ProfileNav active={4}></ProfileNav>
            <div className='w-full flex-1 flex flex-col'>
                <div className="bg-[#fff] py-6 px-8">
                    <div className="h-9 flex mb-4 justify-between" style={{ borderBottom:'1px solid #F1F3F7' }}>
                        <div className="flex">
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
                        <div className="flex items-center text-[#3bc117]">
                            Security Rules
                            <Icon icon="HeroChevronRight" className="w-4 h-4">
                            </Icon>
                        </div>
                    </div>
                    <div className="flex">
                        <div className='flex-1 mr-6'>
                            <div className="h-12 bg-[#F6F7FA] w-full pl-5 flex py-2 px-5">
                                <Input value={0.0000} name="" className="h-full bg-[#fff] font-bold text-[#31373d] outline-none"></Input>
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
                            <div className="flex justify-between mt-2">
                                <span>Available:<span className="font-bold">0.00 BTC</span></span>
                                <span>Locked funds:<span className="font-bold">0.00 BTC</span></span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center" style={{ width:"256px" }}>
                            <Button
                                style={{
                                    height:'3rem',
                                    backgroundColor: '#1d803ab3',
                                    color: '#fff',
                                    padding: '10px 100px',
                                    fontSize: '14px',
                                    backgroundImage:'conic-gradient(from 1turn, rgba(88, 175, 16, 1), rgba(29, 128, 58, 1))',
                                    border:'none',
                                }}
                                className="profile-button">
                                Confirm
                            </Button>
                            <span className=' mt-2'>Annual Rate::<span className="font-bold text-[#3bc117]">5%</span></span>
                        </div>
                    </div>
                </div>
                <div className='bg-[#fff] py-6 px-8 mt-4 flex flex-col items-center'>
                    <Image src={NCoin} alt="" className='h-12 w-12 rounded-full'></Image>
                    <span className='font-bold mt-1 text-sm'>No Asset yet</span>
                    <span className='mt-1 text-sm'>Start earning by transferring assets to Vault Pro</span>
                    <Button icon='HeroAntModalClose' hover style={{ boxSizing:'border-box',paddingLeft:'3rem',paddingRight:'3rem' }} className='mt-4 bg-[#3bc117] text-[#fff]'>
                        Transfer In
                    </Button>
                </div>
                <div className='bg-[#fff] py-6 px-8 mt-4 flex flex-col items-center'>
                    <span className='font-lg font-bold'>Frequently Asked Questions</span>
                    <div className='tips-list flex flex-col w-full'>
                        <div style={ drawerN == 0 ? {height:'100px'} : {}} className='transition-all duration-1000 my-4 h-12 w-full border-b border-gray-400 border-solid overflow-hidden'>
                            <div className="flex justify-between items-center">
                                <span>How is the deposit and withdrawal of funds in Vault Pro protected?</span>
                                <div className='h-8 w-8 rounded-full bg-[#eee] flex items-center justify-center cursor-pointer' onClick={() => { toDrawer(0) }}>
                                    <Icon icon="HeroAntModalClose">
                                    </Icon>
                                </div>
                            </div>
                            <div className='my-4'>Funds deposited and withdrawn in Vault Pro are protected by 2FA (Two-Factor Authentication) and can be accessed by the depositor at any time.</div>
                        </div>
                        <div style={ drawerN == 1 ? {height:'100px'} : {}} className='transition-all duration-1000 my-4 h-12 w-full border-b border-gray-400 border-solid overflow-hidden'>
                            <div className="flex justify-between items-center">
                                <span>When is the daily interest calculated, and how is it determined?</span>
                                <div className='h-8 w-8 rounded-full bg-[#eee] flex items-center justify-center cursor-pointer' onClick={() => { toDrawer(1) }}>
                                    <Icon icon="HeroAntModalClose">
                                    </Icon>
                                </div>
                            </div>
                            <div className='my-4'>The daily interest is calculated every day on the amount that remains not withdrawn from 00:00 to 23:59 (UTC+0). The interest is calculated at 02:00 (UTC+0), precisely 24 hours after the fund is deposited.</div>
                        </div>
                        <div style={ drawerN == 2 ? {height:'100px'} : {}} className='transition-all duration-1000 my-4 h-12 w-full border-b border-gray-400 border-solid overflow-hidden'>
                            <div className="flex justify-between items-center">
                                <span>Can I trust that my funds in Vault Pro are safe?</span>
                                <div className='h-8 w-8 rounded-full bg-[#eee] flex items-center justify-center cursor-pointer' onClick={() => { toDrawer(2) }}>
                                    <Icon icon="HeroAntModalClose">
                                    </Icon>
                                </div>
                            </div>
                            <div className='my-4'>Absolutely! BC.GAME ensures that the funds (cryptos) in Vault Pro are safeguarded and will not be accessed by anyone other than the depositor. Your funds are entirely yours, and they will always remain secure for your use.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}