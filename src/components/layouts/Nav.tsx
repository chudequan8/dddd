"use client";

import React, {
  FC,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useId,
  useState,
} from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import purePathnameUtil from "@/utils/purePathname.util";
import themeConfig from "@/config/theme.config";
import Image from "next/image";
import { IconArrow } from "@/assets/images";
import { useTheme } from "@/context/themeContext";

const navItemClasses = {
  default: classNames(
    "p-3 last:mb-0",
    "flex items-center",
    "cursor-pointer",
    "overflow-hidden",
    "rounded-xl",
    "border",
    "text-black",
    "hover:text-black-950 hover:bg-blue-hover dark:hover:text-zinc-100",
    "dark:hover:bg-dark-blue-hover dark:text-white",
    "grow",
    themeConfig.transition
  ),
  inactive: "border-transparent",
  active:
    "border-zinc-300 text-black-950 dark:border-zinc-800 dark:text-zinc-100",
  here: "text-zinc-950 dark:text-zinc-100 border-transparent",
};

const navItemChildCheck = (
  children:
    | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
    | string
    | number
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | boolean
    | null
    | undefined
    | INavButtonProps
): boolean => {
  // @ts-ignore
  return children?.length > 1
    ? // @ts-ignore
      children?.map((child) => child.type.displayName).includes("NavButton")
    : // @ts-ignore
      children?.type?.displayName === "NavButton";
};

interface INavItemTextProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
const NavItemText: FC<INavItemTextProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Nav/NavItemText"
      className={classNames(
        "overflow-hidden truncate whitespace-nowrap text-base leading-4",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
NavItemText.displayName = "NavItemText";

interface INavItemContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
const NavItemContent: FC<INavItemContentProps> = (props) => {
  const { children, className, ...rest } = props;

  const { asideStatus } = useTheme();

  return (
    <div
      data-component-name="Nav/NavItemContent"
      className={classNames(
        "flex w-full items-center justify-between truncate",
        {
          hidden: !asideStatus,
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
NavItemContent.displayName = "NavItemContent";

interface INavButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconClassName?: string;
  title: string;
}
export const NavButton: FC<INavButtonProps> = (props) => {
  const { className, iconClassName, ...rest } = props;

  return (
    <button
      data-component-name="Nav/NavButton"
      type="button"
      className={classNames(className)}
      {...rest}
    >
      <i className={classNames("iconfont", iconClassName)} />
    </button>
  );
};
NavButton.displayName = "NavButton";

interface INavItemProps extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  iconClassName?: string;
  text: string;
  to?: string;
  className?: string;
  isSub?: boolean;
}
export const NavItem: FC<INavItemProps> = (props) => {
  const { children, iconClassName, text, to, className, isSub, ...rest } = props;

  const { t } = useTranslation();

  const { asideStatus, setAsideStatus } = useTheme();

  // @ts-ignore
  const isChildrenNavButton = navItemChildCheck(children);

  const CONTENT = (
    <>
      <i className={classNames('iconfont text-blue  w-[2.5rem]', iconClassName)}></i>
      <NavItemContent>
        <NavItemText>{t(text)}</NavItemText>
        {children && !isChildrenNavButton && <div>{children as ReactNode}</div>}
      </NavItemContent>
    </>
  );

  const pathname = usePathname();
  const purePath = purePathnameUtil(pathname);

  return (
    <div
      className={classNames('w-full ', {
        'tooltip tooltip-right hover:tooltip-open': !asideStatus
      })}
      data-tip={t(text)}
    >
      <li
        data-component-name="Nav/NavItem"
        className={classNames(
          "flex list-none items-center overflow-hidden whitespace-nowrap",
          !isSub && "bg-blue-light dark:bg-dark-blue-light mb-4 rounded-xl",
          className
        )}
        {...rest}
      >
        {to ? (
          <>
            {/* For Desktop */}
            <Link
              href={to}
              className={
                purePath === to
                  ? classNames(
                      navItemClasses.default,
                      navItemClasses.active,
                      "max-md:hidden"
                    )
                  : classNames(
                      navItemClasses.default,
                      navItemClasses.inactive,
                      "max-md:hidden"
                    )
              }
            >
              {CONTENT}
            </Link>
            {/* For Mobile */}
            <Link
              href={to}
              onClick={() => setAsideStatus(false)}
              className={
                purePath === to
                  ? classNames(
                      navItemClasses.default,
                      navItemClasses.active,
                      "md:hidden"
                    )
                  : classNames(
                      navItemClasses.default,
                      navItemClasses.inactive,
                      "md:hidden"
                    )
              }
            >
              {CONTENT}
            </Link>
          </>
        ) : (
          <>
            {/* For Desktop */}
            <div
              className={classNames(
                navItemClasses.default,
                navItemClasses.inactive,
                "max-md:hidden"
              )}
            >
              {CONTENT}
            </div>
            {/* For Mobile */}
            <div
              className={classNames(
                navItemClasses.default,
                navItemClasses.inactive,
                "md:hidden"
              )}
            >
              {CONTENT}
            </div>
          </>
        )}
        {asideStatus && children && isChildrenNavButton && (
          <div className="mb-2 flex items-center gap-3 px-3">
            {children as ReactNode}
          </div>
        )}
      </li>
    </div>
  )
}
NavItem.displayName = "NavItem";

interface INavCollapseProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  icon?: string;
  text: string;
  to: string;
  className?: string;
}
export const NavCollapse: FC<INavCollapseProps> = (props) => {
  const { children, icon, text, className, to, ...rest } = props;

  const { t } = useTranslation();

  const id = useId();
  const [isActive, setIsActive] = useState<boolean>(false);

  const { asideStatus } = useTheme();

  const pathname = usePathname();

  const here = to && to !== "/" && pathname.includes(to);

  useEffect(() => {
    setIsActive(here);
  }, [here, pathname]);

  return (
    <li
      data-component-name="Nav/NavCollapse"
      className={classNames(
        "list-none overflow-hidden bg-blue-light dark:bg-dark-blue-light mb-4 rounded-xl",
        className
      )}
      {...rest}
    >
      <div data-tip={asideStatus ? "" : t(text)} className="tooltip hover:tooltip-open tooltip-right">
        <div
          role="presentation"
          className={
            isActive || here
              ? classNames(navItemClasses.default, navItemClasses.here)
              : classNames(navItemClasses.default, navItemClasses.inactive)
          }
          onClick={() => setIsActive(!isActive)}
        >
          <div className={classNames("icon text-xl w-[2.5rem] text-[var(--primary-color)]", icon)}></div>
          <NavItemContent >
            <NavItemText>{t(text)}</NavItemText>
            <div>
              <Image
                src={IconArrow}
                alt=""
                className={classNames(
                  "text-xl",
                  "w-6 h-6",
                  {
                    "rotate-90": isActive,
                  }
                )}
              />
            </div>
          </NavItemContent>
        </div>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.ul
            key={id}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto" },
              collapsed: { height: 0 },
            }}
            transition={{ duration: 0.3 }}
            className={classNames(
              "!transition-margin !duration-300 !ease-in-out",
              {
                "mx-2": asideStatus,
              }
            )}
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};
NavCollapse.displayName = "NavCollapse";

interface INavFooterItemProps extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  icon?: string;
  text: string;
  to?: string;
  className?: string;
  isMenu?: boolean;
  isCenter?: boolean;
}
export const NavFooterItem: FC<INavFooterItemProps> = (props) => {
  const { children, icon, text, to, className, isMenu, isCenter, ...rest } =
    props;

  const { t } = useTranslation();

  const pathname = usePathname();
  const purePath = purePathnameUtil(pathname);
  const { asideStatus, setAsideStatus } = useTheme();
  const router = useRouter();

  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center",
        className,
        isCenter &&
          "w-[5rem] h-[5rem] rounded-full bg-white relative -top-3 z-50 "
      )}
      onClick={() => {
        if (isMenu) {
          setAsideStatus(!asideStatus);
        } else if (to) {
          router.push(to);
        }
      }}
    >
      {isCenter ? (
        <div className="flex items-center w-[3rem] h-[3rem] rounded-full justify-center bg-blue">
          <i className={classNames(icon, "text-white text-2xl")}></i>
        </div>
      ) : (
        <i
          className={classNames(icon, "text-[var(--text-color-2)] text-xl")}
        ></i>
      )}
      <p className="mt-2 text-xs text-[var(--text-color-2)]">{t(text)}</p>
    </div>
  );
};
NavFooterItem.displayName = "NavFooterItem";

interface INavProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
const Nav: FC<INavProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <nav
      data-component-name="Nav"
      className={classNames(className)}
      {...rest}
    >
      <ul>{children}</ul>
    </nav>
  );
};
Nav.displayName = "Nav";

export default Nav;
