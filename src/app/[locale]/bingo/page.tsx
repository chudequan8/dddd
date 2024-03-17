import React from "react"
import CasinoItem from '@/components/casino/CasinoItem';
import BreadCrumb from "@/components/ui/BreadCrumb";
import sImg from '@/assets/bingo/s.png'
import Image from "next/image";
import CoinFlagImg from '@/assets/bingo/coinFlag.png'

const Bingo = () => {
    return (
        <div className="max-page-container">
            <BreadCrumb option={[{name: 'Bingo'}]} />
			<div className='text-2xl text-title mt-4 mb-2'>Play Online Bingo</div>
            <div className="grid grid-cols-6 gap-5">
                <div className="w-full relative rounded-md overflow-hidden">
                    <div className="absolute right-0 top-0 px-4 py-2 z-10 rounded-sm text-white" style={{
                        background: 'rgba(0, 0, 0, 0.7)'
                    }}>00:00</div>
                    <Image className="opacity-[0.7]" src={sImg} alt=""></Image>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>

			<div className='text-2xl text-title mt-4 mb-2'>Buy Extra Ball Feature</div>
            <div className='grid grid-cols-6 w-full gap-5'>
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