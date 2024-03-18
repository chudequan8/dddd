"use client";

import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import DARK_MODE from "@/constants/darkMode.constant";
import { useTheme } from "@/context/themeContext";
import themeConfig from "@/config/theme.config";

interface IStyledButtonProps {
  text: string;
  icon: string;
  status: DarkModeType.DarkMode;
}
const StyledButton: FC<IStyledButtonProps> = ({ text, icon, status }) => {
  const { darkModeStatus, setDarkModeStatus, asideStatus } = useTheme();

  const { t } = useTranslation();

  const handeClick = () => {
    if (!asideStatus) {
      if (darkModeStatus === DARK_MODE.DARK) {
        setDarkModeStatus(DARK_MODE.LIGHT);
      } else {
        setDarkModeStatus(DARK_MODE.DARK);
      }
    } else {
      setDarkModeStatus(status);
    }
  };

  if (!asideStatus && darkModeStatus !== status) return null;
  let isActive:boolean = darkModeStatus == status;
  return (
    <button
      type="button"
      className={classNames(
        "p-4",
        "text-black",
        "flex flex-auto items-center justify-center",
        "truncate text-title",
		    darkModeStatus === status && 'bg-blue',
        themeConfig.transition
      )}
      onClick={handeClick}
    >
      <i className={classNames("icon",icon)}></i>
      {asideStatus && (
        <span className="overflow-hidden truncate whitespace-nowrap ml-3">
          {t(text)}
        </span>
      )}
    </button>
  );
};

const DarkModeSwitcherPart = () => {
  return (
    <div className="flex w-full mt-2 overflow-hidden rounded-xl bg-blue-light text-sm bg-primary">
      <StyledButton status={DARK_MODE.DARK} text="Dark" icon='icon-moon' />
      <StyledButton status={DARK_MODE.LIGHT} text="Light" icon='icon-sun-light' />
    </div>
  );
};

export default DarkModeSwitcherPart;
