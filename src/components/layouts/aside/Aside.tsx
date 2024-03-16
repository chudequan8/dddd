import React, { FC, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import themeConfig from "@/config/theme.config";
import { useTheme } from "@/context/themeContext";

interface IAsideHeadProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}
export const AsideHead: FC<IAsideHeadProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Aside/AsideHead"
      style={{}}
      className={classNames(
        "flex items-center justify-between px-6 pb-4 max-md:flex-row-reverse mb-6 bottom-shadow",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

interface IAsideBodyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}
export const AsideBody: FC<IAsideBodyProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Aside/AsideBody"
      className={classNames(
        "h-full px-6",
        "no-scrollbar",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

interface IAsideFooterProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}
export const AsideFooter: FC<IAsideFooterProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Aside/AsideFooter"
      className={classNames("px-6", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

interface IAsideProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}
const Aside: FC<IAsideProps> = (props) => {
  const { children, className, ...rest } = props;

  const { asideStatus } = useTheme();
  return (
    <aside
      data-component-name="Aside"
      className={classNames(
        "peer",
        "fixed bottom-0 top-0 z-30 md:z-20",
        "flex flex-col",
        "border-zinc-300/25",
        "py-4 shadow-2xl",
        "ltr:border-r rtl:border-l",
        themeConfig.transition,
        className,
        // Mobile Design
        "max-md:w-full max-md:shadow-none ltr:max-md:-left-[20rem] rtl:max-md:-right-[20rem]",
        {
          "md:w-[20rem]": asideStatus,
          "md:w-[6.225em]": !asideStatus,
          "ltr:max-md:-left-[26rem] rtl:max-md:-right-[26rem]": !asideStatus,
          "ltr:max-md:left-0 rtl:max-md:right-0": asideStatus,
        }
      )}
      {...rest}
    >
      {children}
    </aside>
  );
};

export default Aside;
