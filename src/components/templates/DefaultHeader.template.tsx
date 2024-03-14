import React, { useState } from "react";
import Mounted from '@/components/Mounted';
import Header, { HeaderLeft, HeaderRight } from "../layouts/Header";
import { headMenuPages } from "@/config/pages.config";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Visible from "../ui/Visible";
import { ImgLogo } from "@/assets/images";
import Link from "next/link";
import { useMaskProps } from "../ui/Mask";
// import LoginModal from "./LoginModal";
import classNames from "classnames";
import { useTheme } from "@/context/themeContext";
import LoginModal from './Headers/login';
import { MessagesButtonPartial } from './Headers/MessagesButton.partial';
import { NoticeMessage } from './Headers/Notice.partial';
import { ProfileDropdown } from './Headers/Profile.partial';
import { Wallet } from './Headers/Wallet.partial';
import LanguageSelectorPartial from './Headers/LanguageSelector.partial';
import Button from "../ui/Button";


const HeaderTemplate = () => {
  const { t } = useTranslation();
  const { asideStatus } = useTheme();
  const loginModalProps = useMaskProps()
  const { setOpen: setLoginModalOpen } = loginModalProps
	const [isLogin, setIsLogin] = useState<any>(false);

  return (
    <>
      <Header>
      <HeaderLeft>
        <Visible is={!asideStatus}>
          <Link href="/" aria-label="Logo">
            <Image src={ImgLogo} alt="" className="h-12 w-auto mr-4" />
          </Link>
        </Visible>
        <div className="hidden items-center md:flex">
          {headMenuPages.map((m) => (
            
            <Link href={m.to} aria-label="Logo" key={m.to}>
              <div
                key={m.to}
                className="btn btn-ghost flex items-center hover:bg-blue-hover mr-4"
              >
                <i className={classNames("icon text-[var(--primary-color)] text-xl",m.icon)}></i>
                <span className="text-lg text-[var(--text-color)]">{m.text}</span>
              </div>
            </Link>
          ))}
        </div>
      </HeaderLeft>
        <HeaderRight>
          {/* <div className="flex items-center">
            <button
              className="btn bg-[var(--primary-color)] rounded-lg font-normal hover:bg-[var(--primary-color-opacity-80)] text-white px-6 mr-5"
              onClick={() => {
                setLoginModalOpen(true)
              }}
            >
              {t("Sign In")}
            </button>
            <button className="btn bg-[var(--secondary-color)] hover:bg-[var(--secondary-color-opacity-80)] text-white px-6">
              {t("Sign Up")}
            </button>
          </div> */}
          {isLogin ? (
            <>
              <LoginModal />
              <MessagesButtonPartial />
              <Mounted
                fallback={
                  <Button icon='HeroLanguage' aria-label='Select Language' isDisable />
                }>
                <LanguageSelectorPartial />
              </Mounted>
            </>
          ) : (
            <>
              <Wallet />
              <NoticeMessage />
              <MessagesButtonPartial />
              <ProfileDropdown />
              <Mounted
                fallback={
                  <Button icon='HeroLanguage' aria-label='Select Language' isDisable />
                }>
                <LanguageSelectorPartial />
              </Mounted>
            </>
          )}
        </HeaderRight>
      </Header>

      {/* <LoginModal {...loginModalProps} /> */}
    </>
  );
};

const DefaultHeaderTemplate = () => {
  return (
    <HeaderTemplate />
  );
};

export default DefaultHeaderTemplate;
