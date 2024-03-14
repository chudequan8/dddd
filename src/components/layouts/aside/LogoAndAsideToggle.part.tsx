import React from "react";
import Link from "next/link";
import Visible from "@/components/ui/Visible";
import Image from "next/image";
import { ImgLogo } from "@/assets/images";
import classNames from "classnames";
import { useTheme } from "@/context/themeContext";

const LogoAndAsideTogglePart = () => {
  const { asideStatus, setAsideStatus } = useTheme();

  return (
    <div
      className={classNames(
        "flex items-center justify-between w-full",
        asideStatus && "px-2"
      )}
    >
      <div
        onClick={() => setAsideStatus(!asideStatus)}
        className="btn bg-yellow hover:bg-yellow flex h-12 w-12 items-center justify-center"
      >
        <i className="trigger-icon icon-bottom-menu text-white text-xl"></i>
      </div>
      <Visible is={!!asideStatus}>
        <Link href="/" aria-label="Logo">
          <Image src={ImgLogo} alt="" className="h-12 w-auto" />
        </Link>
      </Visible>
    </div>
  );
};

export default LogoAndAsideTogglePart;
