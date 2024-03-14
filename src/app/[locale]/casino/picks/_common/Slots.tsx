import React from 'react';
import type { CarouselRef } from 'antd/lib/carousel';
import { createRef } from 'react';
import ArrowDownGray from '../../../../../../SvgIcons/ArrowDownGray.svg';
import { Carousel } from 'antd';

import Image from 'next/image';
import CasinoItem from '@/components/casino/CasinoItem';

export default function Slots() {
	const carRef = createRef<CarouselRef>();
	const next = () => {
		carRef.current?.next();
	};
	const prev = () => {
		carRef.current?.prev();
	};
	return (
		<div className='mt-11 '>
			<div className='mb-[10px] flex w-full items-center justify-between'>
				<span className='text-[20px] text-white'>Slots</span>

				<div className='relative  flex items-center justify-center'>
					<span className='px-[10px] text-[14px] text-[#3BC117]'>View all</span>

					<div
						className='left-1  mr-[1px]  flex  h-9 w-9 rotate-[90deg] cursor-pointer items-center  justify-center rounded-[4px] bg-[#1C1E22] transition-[300ms]  hover:bg-[#2D3035]'
						onClick={() => prev()}>
						<Image src={ArrowDownGray} className='h-5 w-3' alt=''></Image>
					</div>

					<div
						className='left-1  flex h-9  w-9 rotate-[270deg]  cursor-pointer items-center justify-center  rounded-[4px] bg-[#1C1E22] transition-[300ms]  hover:bg-[#2D3035]'
						onClick={() => next()}>
						<Image src={ArrowDownGray} className='h-5 w-3' alt=''></Image>
					</div>
				</div>
			</div>

			<Carousel dotPosition='bottom' ref={carRef} dots={false}>
				<div className='flex w-full items-center justify-between'>
					<div className='flex w-full items-center justify-between gap-5'>
						<CasinoItem className='flex-1'></CasinoItem>
						<CasinoItem className='flex-1'></CasinoItem>
						<CasinoItem className='flex-1'></CasinoItem>
						<CasinoItem className='flex-1'></CasinoItem>
						<CasinoItem className='flex-1'></CasinoItem>
						<CasinoItem className='flex-1'></CasinoItem>
					</div>
				</div>
			</Carousel>
		</div>
	);
}
