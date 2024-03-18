'use client';
import React, { useEffect, useState, FC } from 'react';
import { Modal,ConfigProvider } from 'antd';
import titleImg from '@/assets/vipclub/title.png';
import Image from 'next/image';

export default function vipClub() {
    const [visiable, setVisiable] = useState<boolean>(true);
    useEffect(() => {
        setVisiable(true);
    }, []);
    return (
      <ConfigProvider
				theme={{ hashed: false }}
			>
        <Modal
            title=''
            className='dark:bg-[#202327] bg-[#c5c6ca] p-0'
            width='800px'
            open={visiable}
            onCancel={() => setVisiable(false)}
            footer={null}>
              <div className='flex justify-center items-center py-[30px] px-[60px] bg-[#fff]'>
                  <Image
                      src={titleImg}
                      alt=''
                      className='w-[353px] h-[48px] flex justify-center'
                      style={{ position: 'absolute' }}
                      />
                  <div
                      style={{ position: 'absolute',  }}
                      className='text-center font-bold'>
                      VIP CLUB
                  </div>
              </div>
              <div className='bg-[#fff] mx-[20px] my-[16px]'>
                Level up to get exclusive access to generous rewards and personalized gifts! Join our community of elite players and enjoy the best that online gaming has to offer.
                <span className='text-primary cursor-pointer hover:underline'>View level up details</span>
              </div>
        </Modal>
        </ConfigProvider>
    );
}
