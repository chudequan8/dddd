'use client'

import Mask, { MaskProps } from "@/components/ui/Mask";
import classNames from "classnames";
import Image from "next/image";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import LoginForm from "./LoginForm";

const LoginModal: FC<Omit<MaskProps, 'children'>> = ({
  ...maskProps
}) => {
  const { t } = useTranslation();

  return (
    <Mask
      maskClosable={false}
      {...maskProps}
    >
      <div className="w-[800px] max-md:w-full max-md:h-full md:max-h-[calc(100%-32px)] bg-white md:rounded-lg overflow-auto flex">
        <div className="relative h-full">
          <Image src="/images/mask-logo.jpg" width={394} height={684} alt="" />
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <div className="text-xl whitespace-nowrap font-semibold">
              <span className="">{t('Welcome to')}</span>
              <span className="ml-2 text-[var(--primary-color)]">{t('Product.com')}</span>
            </div>
            <div className="mt-1 font-semibold text-sm text-[var(--text-color-2)]">
              {t('Buy product on {{Brand}}!', { Brand: t('Product.com') })}
            </div>
            <div className="mt-4 text-center">
              <Image src="/images/638410752008704197.png" alt="" width={127.5} height={23} className="inline-block" />
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 bg-[var(--bg1)]">
          <LoginForm />
        </div>
      </div>
    </Mask>
  )
}

export default LoginModal