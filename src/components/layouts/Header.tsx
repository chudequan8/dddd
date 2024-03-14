"use client";

import React, { FC, HTMLAttributes, ReactNode, useRef } from "react";
import classNames from "classnames";
import { useThemeStore } from "@/stores";
import useDomRect from "@/hooks/useDomRect";

interface IHeaderLeftProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}
export const HeaderLeft: FC<IHeaderLeftProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Header/HeaderLeft"
      className={classNames(
        "flex items-center gap-4",
        "ltr:md:mr-auto rtl:md:ml-auto",
        className
      )}
      {...rest}
    >
      {children || <></>}
    </div>
  );
};
HeaderLeft.displayName = "HeaderLeft";

interface IHeaderRightProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}
export const HeaderRight: FC<IHeaderRightProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Header/HeaderRight"
      className={classNames(
        "flex items-center gap-4",
        "ltr:md:ml-auto rtl:md:mr-auto",
        className
      )}
      {...rest}
    >
      {children || <></>}
    </div>
  );
};
HeaderRight.displayName = "HeaderRight";

interface IHeaderProps {
  children: ReactNode;
  className?: string;
}
const Header: FC<IHeaderProps> = (props) => {
  const { children, className, ...rest } = props;

  const divRef = useRef<HTMLDivElement>(null);
  const [domRect] = useDomRect(divRef);

  return (
    <>
      <style>{`:root {--header-height: ${domRect?.height || 0}px}`}</style>
      <header
        ref={divRef}
        data-component-name="Header"
        className={classNames(
          "sticky top-0 z-10 px-4 md:px-12",
          "flex justify-between gap-4",
          "bg-white",
          "p-4 bottom-shadow",
          "backdrop-blur-md",
          "dark:bg-dark-blue dark:text-white",
          className
        )}
        {...rest}
      >
        {children}
      </header>
    </>
  );
};
Header.displayName = "Header";

export default Header;
