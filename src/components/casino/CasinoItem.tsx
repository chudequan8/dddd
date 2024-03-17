import React from "react";
import Icon from "@/components/icon/Icon";
import GamePngOne from '@/newAssets/img/GamePngOne.avif';
import classNames from "classnames";
import Image from "next/image";
import Link from 'next/link';

const CasinoItem = (props: any) => {
    const { children, className, onClick, people = 0, title = 'BC Originals' } = props
    return (
        <Link href={'/casino/gameDetail'} className={className}>
            <div className={classNames('relative cursor-pointer')} onClick={onClick}>
                <div className='absolute flex items-center right-3 top-3 px-[8px] py-[1px] bg-black/50 rounded-[65px]'>
                    <Icon className="!text-primary" icon='CasinoUserIcon' log></Icon>
                    <span className='text-white text-sm ml-1'>{people}</span>
                </div>

                <Image className='w-full rounded-[4px]' alt='' src={GamePngOne}></Image>
                <div className='w-full items-center rounded-[4px] bg-[#32343B] p-[10px] text-[14px] text-[#98A7B5]'>
                        {title}
                </div>
            </div>
        </Link>
    )


}

export default CasinoItem