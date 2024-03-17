'use client';

import { ProfileNav } from "@/components/ui/ProfileNav";
import { ProfileTitle } from "@/components/ui/ProfileTitle";
import React, { useState } from "react";
import USDT from "@/assets/coin/us.png";
import Image from 'next/image';
import Icon from "@/components/icon/Icon";
import Input from "@/components/form/Input";
import Button from "@/components/ui/Button";
import { Empty } from "@/components/ui/Empty";

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

    const [coinArray,setCoinArray] = useState<any>([
        {
            text:"USDT",
            icon:USDT
        },
        {
            text:"USDT",
            icon:USDT
        },
        {
            text:"USDT",
            icon:USDT
        },
        {
            text:"USDT",
            icon:USDT
        },
    ])

    const changeActive = (index:any) => {
        const updatedNav = nav.map((item:any, i:any) => ({
          ...item,
          active: i === index, // 将当前索引的 active 设置为 true，其余为 false
        }));
        setNav(updatedNav);
    };
    const changeActive2 = (index:number) => {
		const newNavArray = methodArray.map((item:any, index2:any) => {
			if (index2 !== index) {
				return { ...item, active: false };
			} else {
				return { ...item, active: true };
			}
		});
		setMethodArray(newNavArray);
	}

    const [methodArray,setMethodArray] = useState<any>([
        {
            text:"Currency",
            active:true,
        },
        {
            text:"mNFT",
            active:false,
        }
    ])

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
                {
                    nav[0].active 
                    ?
                    <div className="" style={{ maxWidth:'500px' }}>
                        <div className="py-7 pt-5 bg-[#fff]">
                            <div className="flex justify-between">
                                <div className="flex flex-col w-1/2 mr-4">
                                    <span className="mb-3">Deposit Currency</span>
                                    <div className="h-12 bg-[#F5F6FA] px-5 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Image src={USDT} alt="" className="w-7 h-7 mr-4">
                                            </Image>
                                            <span className="text-base">USDT</span>
                                        </div>
                                        <Icon icon="HeroDropDown" className="w-4 h-4">
                                        </Icon>
                                    </div>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <span className="mb-3">Choose Network</span>
                                    <div className="h-12 bg-[#F5F6FA] px-5 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Image src={USDT} alt="" className="w-7 h-7 mr-4">
                                            </Image>
                                            <span className="text-base">USDT</span>
                                        </div>
                                        <Icon icon="HeroDropDown" className="w-4 h-4">
                                        </Icon>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="flex flex-col w-full">
                                    <span className="mb-3">Choose Network</span>
                                    <div className="h-12 bg-[#F5F6FA] px-5 flex items-center justify-between">
                                        <Input name="WithdrawalAddress" placeholder="Fill in carefully according to the specific currency" ></Input>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="flex flex-col w-full">
                                    <div className="mb-3 flex justify-between">
                                        <span>Choose Network</span>
                                        <span>Min: 210 BCD</span>
                                    </div>
                                    <div className="h-12 bg-[#F5F6FA] px-5 flex items-center justify-between">
                                        <Input className="font-bold" value="0.00000" name="WithdrawalAddress" placeholder="Fill in carefully according to the specific currency" ></Input>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <span>Available:<span className="text-[#000000] font-bold">BDT 0.00</span></span>
                                <span><span className="text-[#000000] border-b">Locked funds:</span><span className="text-[#000000] font-bold">BDT 0.00</span></span>
                            </div>
                            <div className="bg-[#f5f6fa] mt-5">
                                <div className="flex justify-between py-2 px-3">
                                    <span>Withdraw amount:</span>
                                    <span className="font-bold">0.00 BCD</span>
                                </div>
                                <div className="flex justify-between py-2 px-3">
                                    <span>Fee:</span>
                                    <span className="font-bold">10 BCD</span>
                                </div>
                                <div className="flex justify-between py-2 px-3">
                                    <span>Total withdrawal amount:</span>
                                    <span className="font-bold text-[#3BC117]">0.00BCD</span>
                                </div>
                            </div>
                            <div className="mt-5 bg-[#3ac9481a] py-2 px-3">
                                <div className="my-3" style={{ marginTop:'0' }}>
                                    <span className="text-[#3BC117] font-bold">NOTICE: </span>
                                    Withdrawals can only be made to either the Cwallet or a decentralized wallet to prevent potential asset loss.
                                </div>
                                <div className="my-3" style={{ marginBottom:'0' }}>
                                    <span className="text-[#3BC117] font-bold">NOTICE: </span>
                                    For security purposes, large or suspicious withdrawal may take 1-6 hours for audit process. We appreciate your patience!
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
                            <div className="flex items-center justify-end w-full">
                                Share
                                <Image alt="" className="cursor-pointer mx-5 w-6 h-6 " src={USDT}></Image>
                                <Image alt="" className="cursor-pointer w-6 h-6" src={USDT}></Image>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <div className="flex items-center justify-between" style={{ maxWidth:'420px' }}>
                            <span className="text-[#31373D] text-sm">Deposit Currency</span>
                            <div className="flex items-center">
                                <span className="mr-2 text-base font-bold">CHF</span>
                                <Image src={USDT} alt="" className="w-7 h-7"></Image>
                                <Icon icon="HeroChevronRight" style={{ transform:'rotate(90deg)' }} className="ml-2">
                                </Icon>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="mb-2 text-sm">Choose the currency type you want to withdraw</div>
                        </div>
                        <div className="h-9 mb-7 mx-5 bg-[#f0f1f5] p-1 flex" style={{ maxWidth:'420px' }}>
                            {
                                methodArray.map((item:any,index:any) => {
                                    return <div onClick={() => changeActive2(index)} className={ item.active ? ' bg-[#fff] flex justify-center items-center w-1/2 font-bold text-sm cursor-pointer' : 'flex justify-center items-center w-1/2 font-bold text-sm cursor-pointer' }>
                                        {item.text}
                                    </div>
                                })
                            }
                        </div>
                        <Empty></Empty>
                    </>
                }
            </div>
        </div>
    </div>
}