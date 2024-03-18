import React, { FC, useState } from "react"
import ViewAllPaginate, { IViewAllPaginateProps } from "@/components/casino/ViewAllPaginate";
import { Controller, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import type { Swiper as SwiperType } from 'swiper/types';
import CasinoItem, { ICasinoItemProps } from '@/components/casino/CasinoItem';

interface ISwiperProps extends IViewAllPaginateProps {
    title?: string
    columns: ICasinoItemProps[]
    onClick?: () => void
}

const SwiperList: FC<ISwiperProps> = (props) => {
    const { next, prev, title = 'BC Originals', columns } = props
    const [slideIndex, setSlideIndex] = useState(0)
	const [swiper, setSwiper] = useState<SwiperType>()
	const onNext = () => {
		swiper?.slideNext()
        next && next()
	};
	const onPrev = () => {
		swiper?.slidePrev()
        prev && prev()
	};
	const slideChange = (e: any) => {
		setSlideIndex(e.activeIndex)
	}

    return (
        <div>
            <div className='mb-[10px] flex w-full items-center justify-between'>
				<span className='text-2xl text-title'>{title}</span>
				<ViewAllPaginate next={onNext} prev={onPrev} />
			</div>
            <Swiper
                modules={[Controller, Scrollbar]}
                spaceBetween={10}
                slidesPerView={6}
                autoplay
                onSwiper={setSwiper}
                onSlideChange={slideChange}
            >
                {
                    columns.map((t, i) => (
                        <SwiperSlide key={i}><CasinoItem {...t}></CasinoItem></SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default SwiperList