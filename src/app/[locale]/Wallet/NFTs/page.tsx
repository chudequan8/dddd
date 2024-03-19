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

export default function WalletNFTs(){

    const [nfts,setNfts] = useState([
        {
            img:null,
            code:'0x8d2Ac715C72DEBaa9019152DbD707675116B45Bd',
            coin:"BAYC"
        }
    ]);

    const [isDetails,setIsDetails] = useState(true);

    return <div style={{ maxWidth:'1430px',margin:'0 auto',marginTop:'1.5rem',width:'100%' }}>
        <ProfileTitle title="WALLET"></ProfileTitle>
        <div className='flex justify-between'>
            <ProfileNav active={4}></ProfileNav>
            <div className='w-full flex-1 flex flex-col bg-[#fff] px-8 py-6'>
                {
                    isDetails ? 
                    <div className='flex flex-col' style={{ maxWidth:'500px' }}>
                        <div className='flex cursor-pointer' onClick={() => setIsDetails(false)}>
                            <Icon icon="HeroAntModalClose">
                            </Icon>
                            <span className='ml-2'>NFT Portfolio</span>
                        </div>
                        <div style={{ padding:'0.125rem 1.25rem 0.125rem 0.3125rem' }} className='flex justify-between items-center rounded-sm bg-[#F6F7FA] mt-4 h-12 border border-solid border-gray-300'>
                            <div className='flex items-center'>
                                <Image style={{ width:'2.375rem',height:'2.375rem',marginRight:'1.375rem' }} src={USDT} alt="">
                                </Image>
                                <span>
                                    BAYC
                                </span>
                            </div>
                            <Icon icon="HeroAntModalClose">
                            </Icon>
                        </div>
                        <div className="flex items-center bg-[#f5f6fa] p-3 mt-4">
                            <div className='flex flex-col mr-4'>
                                <div className='bg-[#E9EAF0] p-2 flex flex-col items-center'>
                                    <Image style={{ height:'9.25rem',width:'9.25rem' }} src={CODE} alt="">
                                    </Image>
                                    <span className='text-sm mt-2' style={{ whiteSpace:'nowrap' }}>Scan QR code to deposit</span>
                                </div>
                                <span className='text-[#3ab41a] flex justify-center mt-2' style={{ whiteSpace:'nowrap' }}><Icon icon="HeroAntModalClose"></Icon><span className='ml-2'>Save QR Code</span></span>
                            </div>
                            <div className="flex flex-col">
                                <span>Deposit Address</span>
                                <div className="p-2 bg-[#e7eaf0] flex items-center justify-between">
                                    <div style={{ width:'16rem',boxSizing:'border-box' }} className="break-words pr-4">
                                        0x8d2Ac715C72DEBaa9019152DbD707675116B45Bd
                                    </div>
                                    <div className="px-5 h-7 bg-[#DADDE6] rounded-sm cursor-pointer">Copy</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 bg-[#3ac9481a] py-2 px-3">
                            <span className="text-[#3BC117] font-bold">NOTICE: </span>
                            Please only deposit NFT on ERC721 and right the BAYC collectible to this address, or your assets will be lost.
                        </div>
                    </div>
                    :
                    <div className='flex'>
                        {
                            <div>
                                <div className='flex border-b border-solid border-gray-200 pb-4'>
                                    <div className='flex flex-col pr-6 mr-6 border-r border-solid border-gray-200'>
                                        <span>Total:</span>
                                        <span className='text-lg font-bold'>0</span>
                                    </div>
                                    <div className='flex flex-col pr-6 mr-6'>
                                        <span>NFT:</span>
                                        <span className='text-lg font-bold'>0</span>
                                    </div>
                                </div>
                                {
                                    nfts.map(item => {
                                        return <div onClick={() => setIsDetails(true)} className='bg-[#f5f6fa] mt-6 flex flex-col cursor-pointer' style={{ width:"10.5rem",height:"14.125rem",padding:'0.4375rem' }}>
                                            <div className='flex flex-1 items-center justify-center w-full h-full'>
                                                <Icon icon="HeroAntModalClose">
                                                </Icon>
                                            </div>
                                            <div className='h-11 bg-[#fff] flex items-center overflow-hidden' style={{ whiteSpace:"nowrap" }}>
                                                Deposit your first NFT
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    </div>

}