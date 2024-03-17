import React from "react"
import CasinoItem from '@/components/casino/CasinoItem';
import BreadCrumb from "@/components/ui/BreadCrumb";
import sImg from '@/assets/bingo/s.png'
import Image from "next/image";

const Bingo = () => {
    return (
        <div className="max-page-container">
            <BreadCrumb option={[{name: 'Bingo'}]} />
			<div className='text-2xl text-title mt-4 mb-2'>Play Online Bingo</div>
            <div>
                <div>
                    <Image className="w-64 h-64" src={sImg} alt=""></Image>
                </div>

            </div>

			<div className='text-2xl text-title mt-4 mb-2'>Buy Extra Ball Feature</div>
            <div className='flex w-full items-center flex-wrap gap-5'>
                <CasinoItem className='flex-1'></CasinoItem>
                <CasinoItem className='flex-1'></CasinoItem>
                <CasinoItem className='flex-1'></CasinoItem>
                <CasinoItem className='flex-1'></CasinoItem>
                <CasinoItem className='flex-1'></CasinoItem>
                <CasinoItem className='flex-1'></CasinoItem>
            </div>
        </div>
    )
}

export default Bingo