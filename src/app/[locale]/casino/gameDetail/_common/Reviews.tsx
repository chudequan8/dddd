import React, { useState } from 'react';
import CrashImg from '@/assets/casino/crash.avif'
import Image from 'next/image';
import { Rate, Progress } from 'antd';
import AvatarImg from "@/assets/casino/avatar.webp"
import PinnedImg from '@/assets/casino/pinned.png'
import Icon from '@/components/icon/Icon';

const Reviews = () => {
    return (
        <div className=''>
            <div className='bg-standard p-4 rounded-md mt-8'>
                <div className='flex mb-4'>
                    <Image className='w-28 h-28 rounded-md' src={CrashImg} alt=''></Image>
                    <div className='ml-8'>
                        <div className='text-3xl text-title font-bold'>Crash</div>
                        <div className='text-text mb-4 mt-4'>By <span className='text-title'>BC Originals</span></div>
                        <div>2018/3/1</div>
                    </div>
                </div>
                <div className='text-primary'>
                    Show more >
                </div>
            </div>

            <div className='text-title mt-8 leading-10 text-2xl'>Ratings</div>
            <div className='bg-standard p-4 rounded-md'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='text-primary text-[48px] mr-4'>3.8</div>
                        <div>
                            <Rate disabled defaultValue={4} count={5} className='text-primary text-sm mb-1' />
                            <div>out of 5</div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <Rate disabled defaultValue={0} count={5} className='text-primary text-sm h-[22px] flex items-center' />
                            <Rate disabled defaultValue={0} count={4} className='text-primary text-sm h-[22px] flex items-center' />
                            <Rate disabled defaultValue={0} count={3} className='text-primary text-sm h-[22px] flex items-center' />
                            <Rate disabled defaultValue={0} count={2} className='text-primary text-sm h-[22px] flex items-center' />
                            <Rate disabled defaultValue={0} count={1} className='text-primary text-sm h-[22px] flex items-center' />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <Progress strokeColor='currentColor' trailColor='#23242a' className='text-primary' percent={75} showInfo={false} />
                        <Progress strokeColor='currentColor' trailColor='#23242a' className='text-primary' percent={50} showInfo={false} />
                        <Progress strokeColor='currentColor' trailColor='#23242a' className='text-primary' percent={40} showInfo={false} />
                        <Progress strokeColor='currentColor' trailColor='#23242a' className='text-primary' percent={30} showInfo={false} />
                        <Progress strokeColor='currentColor' trailColor='#23242a' className='text-primary' percent={20} showInfo={false} />
                    </div>
                </div>
            </div>

            {/* 评论 */}
            <div className='text-title mt-8 leading-10 text-2xl'>Cpmments</div>
            <div className='bg-standard p-4 rounded-md mt-2 mb-4 text-lg cursor-pointer'>
                <div className='flex items-center w-full justify-between'>
                    <div>Leave Your Comment</div>
                    <div><Icon className='!w-6 !h-6' icon='CasinoChatPeoPle'></Icon></div>
                </div>
            </div>
            <div className='bg-standard p-4 rounded-md mb-2 text-lg'>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <div><Image src={AvatarImg} className='w-10 h-10 rounded-full' alt=''></Image></div>
                        <div className='mx-4 text-5l1a8f'>Your Friends</div>
                        <div className='text-1by3zu8'>1y</div>
                    </div>
                    <div className='flex items-center'>
                        <div className='cursor-pointer ml-4 flex items-center'><Icon className='text-[#67707b] !w-5 !h-5 mt-[-5px] mr-1' icon='CasinoChatLike'></Icon>765</div>
                        <div className='cursor-pointer ml-4 '><Icon className='text-[#67707b] !w-5 !h-5' icon='CasinoChat'></Icon></div>
                        <div className='cursor-pointer ml-4 '><Icon className='text-[#67707b] !w-5 !h-5' icon='CasinoChatMore'></Icon></div>
                    </div>
                </div>
                <div className='leading-8 text-a56fau my-4'>
                    I think this is the best online casino game in the world probably fear and smooth.
                    <br/>
                    <br/>
                    this is the best way to make money.
                    <br/>
                    BC game is one of the most useful and making money online platform I'll happy use this one thanks
                </div>
                <div className='text-primary flex justify-between w-full'>
                    <div className='flex items-center'>
                        <div className='cursor-pointer hover:border-b-[1px] leading-4 border-primary border-solid'>show 61 Replies </div>
                        <span className='text-text ml-4 text-2xl cursor-pointer'>></span>
                    </div>

                    <div className='py-1 px-2 rounded-md bg-[#244321] cursor-pointer flex items-center'>
                        <Image className='w-5 h-5 mr-1' src={PinnedImg} alt='' />
                        Pinned
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews