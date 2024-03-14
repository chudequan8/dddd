import React from "react";
// import Icon from "@/components/icon/Icon";
import GamePngOne from '@/newAssets/img/GamePngOne.avif';
import { CasinoUserIcon } from "@/components/icon/common";
import classNames from "classnames";
import Image from "next/image";
import Link from 'next/link';

const CasinoItem = (props: any) => {
    const { children, className, onClick } = props
    return (
        <div className={classNames('relative cursor-pointer', className)} onClick={onClick}>
            <div className='absolute flex items-center right-3 top-3 px-[8px] py-[1px] bg-black/50 rounded-[65px]'>
                {/* <Icon icon={CasinoUserIcon}></Icon> */}
                <span className='text-white text-sm ml-1'>794</span>
            </div>
            <Image className='w-full rounded-[4px]' alt='' src={GamePngOne}></Image>
            <div className='w-full items-center rounded-[4px] bg-[#32343B] p-[10px] text-[14px] text-[#98A7B5]'>
                <Link href={'/casino/crash'}>
                    BC Originals
                </Link>
            </div>
        </div>
    )
}

export default CasinoItem