"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { i18n as i18nInterface } from "i18next";
import initTranslations from "@/i18n";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "../../i18nConfig";

let i18n: i18nInterface;

const namespaces = ["translation"]

const TranslationsProvider = ({
  children,
  fallback = null,
}: {
  children: ReactNode;
  // locale?: string;
  // namespaces?: string[];
  fallback?: ReactNode;
}) => {
  const [instance, setInstance] = useState(i18n);
  const currentLocale = useCurrentLocale(i18nConfig);

  useEffect(() => {
    const init = async () => {
      if (!i18n) {
        const newInstance = await initTranslations(
          currentLocale || i18nConfig.defaultLocale,
          namespaces
        );
        // @ts-ignore
        i18n = newInstance;
        // @ts-ignore
        setInstance(newInstance);
      } else if (i18n.language !== currentLocale) {
				await i18n.changeLanguage(currentLocale);
			}
    };

    init()
      .then(() => {})
      .catch(() => {});
  }, [currentLocale])

  if (!instance) {
    return fallback;
  }

  return (
    <I18nextProvider i18n={instance} defaultNS={namespaces[0]}>
      {children}
    </I18nextProvider>
  );
};

export default TranslationsProvider;
