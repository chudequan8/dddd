import React from "react"
import CasinoItem from '@/components/casino/CasinoItem';
import BreadCrumb from "@/components/ui/BreadCrumb";

const GameList = () => {
    return (
        <div className="max-page-container">
            <BreadCrumb option={[{name: 'Picks For You'}]} />
            <div className='flex w-full items-center flex-wrap gap-5'>
                <CasinoItem className='2xl:w-[14%]'></CasinoItem>
                <CasinoItem className='2xl:w-[14%]'></CasinoItem>
                <CasinoItem className='2xl:w-[14%]'></CasinoItem>
                <CasinoItem className='2xl:w-[14%]'></CasinoItem>
                <CasinoItem className='2xl:w-[14%]'></CasinoItem>
                <CasinoItem className='2xl:w-[14%]'></CasinoItem>
                <CasinoItem className='2xl:w-[14%]'></CasinoItem>
                <CasinoItem className='2xl:w-[14%]'></CasinoItem>
                <CasinoItem className='2xl:w-[14%]'></CasinoItem>
                <CasinoItem className='2xl:w-[14%]'></CasinoItem>
                <CasinoItem className='2xl:w-[14%]'></CasinoItem>
            </div>
        </div>
    )
}

export default GameList