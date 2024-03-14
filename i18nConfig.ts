import { Config } from 'next-i18n-router/dist/types';

const i18nConfig: Config = {
	locales: ['en', 'vi', 'ja'],
	defaultLocale: 'en',
	localeDetector: false,
};

export default i18nConfig;
