'use client';
import React, { useState } from 'react';
import "@/style/common.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Icon from '@/components/icon/Icon';
import { CasinoLoveIcon, CasinoStarIcon, CasinoShareIcon, CasinoJIcon, CasinoRichIcon, CasinoQuestionIcon } from '@/components/icon/common';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import LogoImg from '@/assets/casino/logo.avif'
import '../../../styles/casino.css'
import NavCrash from './_common/NavCrash';
import BreadCrumb from '@/components/ui/breadCrumb';

export default function CrashPage() {
    const [btnActive, setBtnActive] = useState(0)
    const breadCrumbOption = [
        {
            name: 'BC Originals',
            to: '/casino/picks'
        },
        {
            name: 'Crash'
        }
    ]

	return (
		<div className='max-page-container'>
            <BreadCrumb option={breadCrumbOption} />
            <div className='mb-4'>
                <div className='h-[600px] bg-black border-solid border-b-[3px] border-[#25262b]'></div>
                <div className='bg-black px-4 py-2 flex justify-between'>
                    <div className='flex'>
                        <div className='flex px-4 py-2 items-center hover:bg-[#2D3035]  hover:text-[#FFF] cursor-pointer transition-[300] rounded-[4px]'>
                            <Icon icon={CasinoStarIcon}></Icon> <span className='ml-2'>10086</span>
                        </div>
                        <div className='flex px-4 py-2 items-center hover:bg-[#2D3035]  hover:text-[#FFF] cursor-pointer transition-[300] rounded-[4px]'>
                            <Icon icon={CasinoLoveIcon}></Icon> <span className='ml-2'>72537</span>
                        </div>
                        <div className='flex px-4 py-2 items-center hover:bg-[#2D3035]  hover:text-[#FFF] cursor-pointer transition-[300] rounded-[4px]'>
                            <Icon icon={CasinoLoveIcon}></Icon>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='px-4 py-2 hover:bg-[#2D3035]  hover:text-[#FFF] cursor-pointer transition-[300] rounded-[4px]'><Icon icon={CasinoJIcon}></Icon></div>
                        <div className='px-4 py-2 hover:bg-[#2D3035]  hover:text-[#FFF] cursor-pointer transition-[300] rounded-[4px]'><Icon icon={CasinoRichIcon}></Icon></div>
                        <div className='px-4 py-2 hover:bg-[#2D3035]  hover:text-[#FFF] cursor-pointer transition-[300] rounded-[4px]'><Icon icon={CasinoQuestionIcon}></Icon></div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex gap-3'>
                    <Button onClick={() => setBtnActive(0)} className={`text-white ${btnActive == 0 ? '' : ''}`}>Crash</Button>
                    <Button onClick={() => setBtnActive(1)} className={`text-white ${btnActive == 1 ? '' : ''}`}>Description</Button>
                    <Button onClick={() => setBtnActive(2)} className={`text-white ${btnActive == 2 ? '' : ''}`}>Reviews</Button>
                </div>

                {
                    btnActive == 0 ? <NavCrash /> : btnActive == 1 ? (
                        <></>
                    ) : (
                        <></>
                    )
                }
                <div className=''>
                    <div className='text-white text-2xl my-8 mb-4'>About The Provider</div>
                    <div className='p-4 bg-[#2b2f37]'>
                        <div className='p-1 bg-[#25262a] inline-block mb-2'>
                            <Image className='w-[130px] h-[50px]' src={LogoImg} alt=''></Image>
                        </div>
                        <div className='flex'>
                            <div className='px-3 py-3 text-white border-solid border-[1px] border-[#4D565] rounded-sm mr-4  '>45 Games <span className='ml-2'>></span></div>
                            <div className='px-3 py-3 text-white border-solid border-[1px] border-[#4D565] rounded-sm'>More info</div>
                        </div>
                    </div>
                </div>


            </div>
		</div>
	);
}
