import React from 'react';
import type { CarouselRef } from 'antd/lib/carousel';
import { createRef } from 'react';
import { Carousel } from 'antd';

import Image from 'next/image';
import CasinoItem from '@/components/casino/CasinoItem';
import ViewAllPaginate from '@/components/casino/ViewAllPaginate';

export default function BcOriginals() {
	const carRef = createRef<CarouselRef>();
	const next = () => {
		carRef.current?.next();
	};
	const prev = () => {
		carRef.current?.prev();
	};
	const navClickHandle = () => {
		// Router.push('casino/crash')
	}
	return (
		<div className='mt-11 '>
			<div className='mb-[10px] flex w-full items-center justify-between'>
				<span className='text-2xl text-title'>BC Originals</span>

				<ViewAllPaginate next={next} prev={prev} />
			</div>

			<Carousel dotPosition='bottom' ref={carRef} dots={false}>
				<div className='flex w-full items-center justify-between'>
					<div className='flex w-full items-center justify-between gap-5'>
						<CasinoItem onClick={navClickHandle} className='flex-1'></CasinoItem>
						<CasinoItem className='flex-1'></CasinoItem>
						<CasinoItem className='flex-1'></CasinoItem>
						<CasinoItem className='flex-1'></CasinoItem>
						<CasinoItem className='flex-1'></CasinoItem>
						<CasinoItem className='flex-1'></CasinoItem>
					</div>
				</div>
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
