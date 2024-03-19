'use client';
import React, { useEffect, useState, FC } from 'react';
import { Modal, ConfigProvider, Tooltip, Progress } from 'antd';
import Image from 'next/image';
import { ExclamationCircleOutlined } from '@ant-design/icons';
export default function vipClub() {
  const [visiable, setVisiable] = useState<boolean>(true);
  useEffect(() => {
    setVisiable(true);
  }, []);

  return (
    <ConfigProvider theme={{ hashed: false }}>
      <Modal title="" className="p-0" width="800px" open={visiable} onCancel={() => setVisiable(false)} footer={null}>
        <div className="flex justify-center items-center py-[30px] px-[60px] bg-[#fff]">
          <Image
            src={require('@/assets/vipclub/title.png')}
            alt=""
            className="w-[353px] h-[48px] flex justify-center absolute"
          />
          <div className="text-center font-bold absolute">VIP CLUB</div>
        </div>
        <div className="bg-[#fff] mx-[20px] my-[16px]">
          Level up to get exclusive access to generous rewards and personalized gifts! Join our community of elite
          players and enjoy the best that online gaming has to offer.
          <span className="text-primary cursor-pointer hover:underline">View level up details</span>
        </div>
        <div className="flex">
          <div
            className="flex w-[60%] relative "
            style={{ background: 'linear-gradient(82.85deg, #475565 -.8%, #6F7F93 103.54%)' }}>
            <div className='w-[50%] items-center flex justify-center'>
              <Image
                src={require('@/assets/vipclub/nostage.webp')}
                alt=""
                className="w-[120px] h-[138px] flex justify-center mx-[20px] mb-[30px]"
              />
              <div className='text-title absolute top-[40%] left-[25%]' style={{ transform: 'translate(-50%,0)' }}>
                VIP 0
              </div>
              <Image
                src={require('@/assets/vipclub/light.svg')}
                alt=""
                style={{ transform: 'translate(-50%,0)' }}
                className="w-[108px] h-[138px] flex justify-center absolute top-[0] left-[25%]"
              />
            </div>
            <div className="flex flex-col justify-around my-[20px]">
              <div className="text-title text-[16px] font-bold">Your VIP Progress</div>
              <div className="flex items-center">
                <div className="text-title mr-[6px]">0 XP</div>
                <Tooltip
                  placement="bottom"
                  title="Wager $1.00 = 1 XP; Sports Wager $1.00 = 2 XP All wagers are converted to USD at the current rate">
                  <ExclamationCircleOutlined className="text-[14px] cursor-pointer hover:text-[#fff] text-[#67707B]" />
                </Tooltip>
              </div>
              <Progress percent={100} strokeColor="#f7f4f3" showInfo={false} />
              <div className="text-title">1 XP until VIP 1</div>
            </div>
          </div>

          <div className="w-[40%] bg-[#2D3035] p-[16px]">
            <div className="flex justify-between items-center">
              <div className="w-[85px] text-title px-[10px]" style={{ backgroundColor: 'rgb(177, 202, 235)' }}>
                VIP HOST
              </div>
              <div>
                <Tooltip
                  placement="bottom"
                  title="VIP Host is your exclusive customer support. Feel free to contact them any time.">
                  <ExclamationCircleOutlined className="text-[18px] cursor-pointer hover:text-[#fff] text-[#67707B]" />
                </Tooltip>
              </div>
            </div>
            <div className="flex justify-center mx-[40px]">
              <Image src={require('@/assets/vipclub/chat.webp')} className="w-[140px] h-[40px]" style={{}} alt="" />
            </div>
            <div className="flex justify-center mx-[40px]">
              <div className="text-[#98a7b5] text-[14px]">Unlock your exclusive VIP HOST at<span className="italic text-title font-bold"> VIP 38</span></div>
            </div>
          </div>
        </div>
      </Modal>
    </ConfigProvider>
  );
}
