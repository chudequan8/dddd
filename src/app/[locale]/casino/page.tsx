'use client';
import React, { useState } from 'react';
import evolution from '@/newAssets/img/evolution.avif';
import Image from 'next/image';
import ArrowDownGray from '@/assets/casino/ArrowDownGray.svg';
import BcOriginals from './_common/BcOriginals';
import Slots from './_common/Slots';
import FeatureBuyIn from './_common/FeatureBuyIn';
import LiveCasion from './_common/LiveCasion';
// import { SearchPartial } from "@/components/layouts/Headers/Search.partial";
import "@/style/common.css"
import Button from '@/components/ui/Button'

import { Controller, Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import type { Swiper as SwiperType } from 'swiper/types';

export default function PickPage() {
	const [slideIndex, setSlideIndex] = useState(0)
	const [swiper, setSwiper] = useState<SwiperType>()
	const next = () => {
		swiper?.slideNext()
	};
	const prev = () => {
		swiper?.slidePrev()
	};
	const slideChange = (e: any) => {
		setSlideIndex(e.activeIndex)
	}

	const navCLickHandle = () => {
		console.log(123465);
	}
	return (
		<div>
			<div className='bg-1q81als '>
				<div className='relative !w-full max-page-container py-8'>
					<div
						className='rounded-1 absolute left-1 top-[50%] flex  h-9 w-9 translate-y-[-50%] rotate-[90deg] cursor-pointer items-center  justify-center bg-[#25272C] transition-[300ms]  hover:bg-[#2D3035]'
						onClick={() => prev()}>
						<Image src={ArrowDownGray} className='h-5 w-3' alt=''></Image>
					</div>
					<div className='px-10'>

						<Swiper
							modules={[Controller, Scrollbar, Autoplay, Pagination]}
							spaceBetween={10}
							slidesPerView={3}
							autoplay
							onSwiper={setSwiper}
							onSlideChange={slideChange}
						>
							<SwiperSlide><Image className='w-full' alt='' src={evolution}></Image></SwiperSlide>
							<SwiperSlide><Image className='w-full' alt='' src={evolution}></Image></SwiperSlide>
							<SwiperSlide><Image className='w-full' alt='' src={evolution}></Image></SwiperSlide>
							<SwiperSlide><Image className='w-full' alt='' src={evolution}></Image></SwiperSlide>
							<SwiperSlide><Image className='w-full' alt='' src={evolution}></Image></SwiperSlide>
							<SwiperSlide><Image className='w-full' alt='' src={evolution}></Image></SwiperSlide>
							<SwiperSlide><Image className='w-full' alt='' src={evolution}></Image></SwiperSlide>
							<SwiperSlide><Image className='w-full' alt='' src={evolution}></Image></SwiperSlide>
						</Swiper>
					</div>
					<div
						className='rounded-1 absolute right-1 top-[50%] flex  h-9 w-9 translate-y-[-50%] rotate-[270deg] cursor-pointer items-center  justify-center bg-[#25272C] transition-[300ms] hover:bg-[#2D3035]'
						onClick={() => next()}>
						<Image src={ArrowDownGray} className='h-5 w-3' alt=''></Image>
					</div>
				</div>
			</div>

			<div className='pt-6 mt-6'>
				<div className='max-page-container relative px-10'>

					<div className='border-1 relative h-[44px] overflow-hidden rounded-[2px] border-solid  border-[#656E78] bg-[#1C1E22] '>
						{/* <SearchPartial /> */}
					</div>

					<div className='mt-[10px] flex items-center'>
						
						<Button icon='Nav1' onClick={navCLickHandle} className="mr-2" hover>Lobby</Button>
						<Button icon='Nav2' onClick={navCLickHandle} className="mr-2" hover>Top Picks</Button>
						<Button icon='Nav3' onClick={navCLickHandle} className="mr-2" hover>Slots</Button>
						<Button icon='Nav4' onClick={navCLickHandle} className="mr-2" hover>Hot Games</Button>
						<Button icon='Nav5' onClick={navCLickHandle} className="mr-2" hover>Live Casino</Button>
						<Button icon='Nav6' onClick={navCLickHandle} className="mr-2" hover>Table Games</Button>
						<Button icon='Nav7' onClick={navCLickHandle} className="mr-2" hover>New Releases</Button>

					</div>
					<BcOriginals></BcOriginals>
					<Slots></Slots>
					<FeatureBuyIn></FeatureBuyIn>
					<LiveCasion></LiveCasion>
				</div>

			</div>
		</div>
	);
}
