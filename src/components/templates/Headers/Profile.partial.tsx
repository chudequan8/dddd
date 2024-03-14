'use client';

import React, { useState } from "react";
import useMessageStatus from "@/hooks/useMessageStatus";
import Image from 'next/image';
import Avatar from "@/assets/profile/user.png"
import Dropdown, { DropdownMenu, DropdownToggle } from './Dropdown';
import Button from "@/components/ui/Button";
import { usePathname } from 'next/navigation';
import Link from "next/link";

export const ProfileDropdown = () => {

    const { messageStatus, setMessageStatus } = useMessageStatus();

    const [ profileArray,setProfileArray ] = useState<any>([
        {
            text:"Wallet",
            icon:"",
            path:"/Wallet/Balance"
        },
        {
            text:"Withdraw",
            icon:"",
            path:"/Wallet/Deposit"
        },
        {
            text:"Transcations",
            icon:"",
            path:"/Wallet/Withdraw"
        },
        {
            text:"Rollover Overview",
            icon:"",
            path:"/Wallet/RolloverOverview"
        },
        {
            text:"VIP Club",
            icon:"",
            path:"/Wallet/VIPClub"
        },
        {
            text:"Affiliate",
            icon:"",
            path:"/Wallet/Affiliate"
        },
        {
            text:"Refer and Earn",
            icon:"",
            path:"/Wallet/ReferandEarn"
        },
        {
            text:"MyProfile",
            icon:"",
            path:"/Wallet/MyProfile"
        },
        {
            text:"GlobalSettings",
            icon:"",
            path:"/Wallet/GlobalSettings"
        },
    ])

    const pathname = usePathname();

    return (
        <div className='relative flex items-center'>
            <Dropdown>
                <DropdownToggle>
                    <Image
                        src={Avatar}
                        alt={"Avatar"}
                        className='h-8 w-8 rounded-full cursor-pointer'
                    >
                    </Image>
                </DropdownToggle>
                <DropdownMenu className='!p-0 absolute' style={{ inset:'3.5rem auto auto -11rem' }}>
                    <div className="py-3 w-55" style={{ boxSizing:"border-box" }}>
                        <div className="flex flex-col px-3">
                            {
                                profileArray.map((item:any, index:number) => {
                                    return <Link href={item.path} key={index}>
                                        <Button
                                            icon='HeroSportMenuIcon'
                                            children={item.text}
                                            className='profile-button w-full h-10 pl-3 text-sm whitespace-nowrap flex items-center'
                                            isActive={pathname.includes(item.path)}
                                        />
                                    </Link>
                                })
                            }
                        </div>
                        <div className="mt-2 px-3 pt-3 border-t border-solid">
                            <Button
                                icon='HeroSportMenuIcon'
                                children={'Log out'}
                                className='profile-button w-full h-10 pl-3 text-sm whitespace-nowrap flex items-center'
                            />
                        </div>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};