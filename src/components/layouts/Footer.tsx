import React, { FC, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import TranslationsProvider from "../TranslationsProvider";

interface IFooterLeftProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const FooterLeft: FC<IFooterLeftProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Footer/FooterLeft"
      className={classNames(
        "flex items-center gap-4",
        "ltr:md:mr-auto rtl:md:ml-auto",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
FooterLeft.displayName = "FooterLeft";

interface IFooterRightProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const FooterRight: FC<IFooterRightProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Footer/FooterRight"
      className={classNames(
        "flex items-center gap-4",
        "ltr:md:ml-auto rtl:md:mr-auto",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
FooterRight.displayName = "FooterRight";

interface IFooterMobileProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const FooterMobile: FC<IFooterMobileProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Footer/FooterMobile"
      style={{filter:"drop-shadow(0 0 5px rgba(0,0,0,.08))"}}
      className={classNames(
        "flex items-center justify-around gap-4 md:hidden top-shadow" ,
        "fixed bottom-0 left-0 right-0 bg-white px-4 py-0 z-40",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
FooterMobile.displayName = "FooterMobile";

interface IFooterDesktopProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const FooterDesktop: FC<IFooterDesktopProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Footer/FooterDesktop"
      className={classNames(
        "hidden md:flex justify-between gap-4 p-6 text-sm",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
FooterDesktop.displayName = "FooterDesktop";

interface IFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
const Footer: FC<IFooterProps> = (props) => {
  const { children, className = undefined, ...rest } = props;

  return (
    <footer data-component-name="Footer" className={className} {...rest}>
      {children}
    </footer>
  );
};
Footer.displayName = "Footer";

export default Footer;
