'use client'

import LoginModal from "@/components/templates/LoginModal";
import { useMaskProps } from "@/components/ui/Mask";
import Image from "next/image";
import BannerImg from '@/assets/home/banner.png'


export default function Home() {
  const loginModalProps = useMaskProps()
  const { setOpen: setLoginModalOpen } = loginModalProps

  return (
    <div className="max-page-container">
      <div className="bg-3qez5v">
        <div className="flex min-h-[16.875rem]">
          <div className="w-[450px]">
            <div className="text-2xl text-title font-bold mt-6 mb-4">Hi Mxbppbjvtoac! Welcome aboard</div>
            <div className="text-4xl text-title">FIRST DEPOSIT BONUS</div>
            <div className="text-primary text-[42px] font-bold my-2">+180%</div>
            <div className="text-primary text-[42px] font-bold">REWARDS</div>
            <div>
              <div></div>
            </div>
          </div>
          <div className="flex-auto w-[1px] relative">
            <Image className="absolute top-0 right-0 w-[640px] object-contain h-auto" src={BannerImg} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
