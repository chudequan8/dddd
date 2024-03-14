'use client';

import React from "react";
import Button from "@/components/ui/Button";
import useMessageStatus from "@/hooks/useMessageStatus";

export const NoticeMessage = () => {
    const { messageStatus, setMessageStatus } = useMessageStatus();

    return (
        <div className='relative'>
            <Button
                icon='HeroNotice'
                aria-label='Messages'
                className='relative text-2xl text-[#9FA5AC]'
                onClick={() => setMessageStatus(!messageStatus)}
            />

            <span className='absolute end-0 top-0 flex h-3 w-3'>
				<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75'/>
				<span className='relative inline-flex h-3 w-3 rounded-full bg-green-600'/>
			</span>
        </div>
    );
};