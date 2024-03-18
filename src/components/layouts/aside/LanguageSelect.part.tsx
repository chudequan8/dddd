import React, {useContext} from "react";
import Image from "next/image";
import { IconLanguage } from "@/assets/images";
import i18nConfig from "../../../../i18nConfig";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import LANG from "@/constants/lang.constant";
import dayjs from "dayjs";
import { useTheme } from "@/context/themeContext";
import ThemeContext from '@/context/themeContext';
import { LangType } from "@/types/lang.type";

const LanguageSelectBtnt = () => {
	const { setLanguage, setDir } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const { asideStatus } = useTheme();

  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale: LangType.Lang) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `; expires=${date.toUTCString()}`;
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      i18n
        .changeLanguage(newLocale)
        .then(() => {
					setLanguage(newLocale);
					setDir(i18n.dir());
          dayjs.locale(newLocale);
        })
        .then(() => {
          router.push(`/${newLocale}${currentPathname}`);
        })
        .catch(() => {});
    } else {
      i18n
        .changeLanguage(newLocale)
        .then(() => {
					setLanguage(newLocale);
					setDir(i18n.dir());
          dayjs.locale(newLocale);
        })
        .then(() => {
          console.log("route2",currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
          router.push(
            currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
          );
        })
        .catch(() => {});
    }

    // router.refresh();
  };
  const langArray = Object.values(LANG);

  return (
    <div className="dropdown dropdown-top w-full mb-4">
      <button
        type="button"
        tabIndex={0}
        className="flex w-full p-4 overflow-hidden rounded-xl bg-blue-light text-sm dark:bg-dark-blue-light"
      >
        <Image src={IconLanguage} className="w-6 h-6" alt="" />
        {asideStatus && (
          <span className="overflow-hidden truncate whitespace-nowrap ml-3 text-base text-black dark:text-white">
            {t("Language")}
          </span>
        )}
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[999] menu p-2 shadow bg-blue-light rounded-box w-full dark:bg-blue dark:text-white"
      >
        {langArray.map((item) => (
          <li
            // isActive={currentLocale === item.lng}
            key={item.lng}
            // onClick={() => setLanguage(item.lng)}
            className="hover:bg-blue-hover"
            onClick={() => handleChange(item.lng)}
          >
            <a>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const LanguageSelectPart = () => {

  return (
    <LanguageSelectBtnt />
  );
};

export default LanguageSelectPart;
