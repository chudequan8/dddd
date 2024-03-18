import React, { FC } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import ArrowDownGray from '@/assets/casino/ArrowDownGray.svg';

export interface IViewAllPaginateProps {
	next?: () => void;
	prev?: () => void;
	className?: string;
	text?: string;
}
const ViewAllPaginate: FC<IViewAllPaginateProps> = (props) => {
	const { next, prev, className, text = 'View all', ...rest } = props;
    const onPrev = () => {
        prev && prev()
    }
    const onNext = () => {
        next && next()
    }
	return (
		<div className='relative  flex items-center justify-center'>
            <span className='px-[10px] text-[14px] text-primary'>View all</span>
            <div
                className='left-1  mr-[1px]  flex  h-9 w-9 rotate-[90deg] cursor-pointer items-center  justify-center rounded-[4px] bg-[#1C1E22] transition-[300ms]  hover:bg-[#2D3035]'
                onClick={onPrev}>
                <Image src={ArrowDownGray} className='h-5 w-3' alt=''></Image>
            </div>

            <div
                className='left-1  flex h-9  w-9 rotate-[270deg]  cursor-pointer items-center justify-center  rounded-[4px] bg-[#1C1E22] transition-[300ms]  hover:bg-[#2D3035]'
                onClick={onNext}>
                <Image src={ArrowDownGray} className='h-5 w-3' alt=''></Image>
            </div>
        </div>
	);
};

export default ViewAllPaginate;
