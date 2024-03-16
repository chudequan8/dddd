import "@/app/styles/globals.css";

import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { dir } from "i18next";

import i18nConfig from "../../../i18nConfig";
import { variables } from "../fonts";
import classNames from "classnames";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const RootLayout = ({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) => {

  return (
    <html suppressHydrationWarning lang={locale} dir={dir(locale)} className={classNames(...variables, 'theme-default dark')}>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
