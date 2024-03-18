import React, { useEffect, useState } from "react"
import Icon from "../icon/Icon"
import EmptyImg from "@/assets/profile/empty_w.webp";
import Image from 'next/image';

export const Empty = (props:any) => {

    return <div className="flex flex-col items-center" style={{ maxWidth:'420px' }}>
        <Image style={{ width:'12.5rem',height:"12.5rem" }} src={EmptyImg} alt=""></Image>
        <span className="text-sm text-[#99a4b099]">
            Oops! There is no data yet!
        </span>
    </div>

}