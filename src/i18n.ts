import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from '../i18nConfig';

export default async function initTranslations(locale: string, namespaces: string[]) {
	const i18nInstance = createInstance();

	await i18nInstance
		.use(initReactI18next)
		.use(
			resourcesToBackend(
				(language: string, namespace: string) =>
					import(`@/locales/${language}/${namespace}.json`),
			),
		)
		.init({
			lng: locale,
			fallbackLng: i18nConfig.defaultLocale,
			supportedLngs: i18nConfig.locales,
			defaultNS: namespaces[0],
			fallbackNS: namespaces[0],
			ns: namespaces,
			preload: typeof window === 'undefined' ? i18nConfig.locales : [],
			// debug: true,
			// react i18next special options (optional)
			// override if needed - omit if ok with defaults
			react: {
				bindI18n: 'editorSaved loaded',
				// bindI18nStore: '',
				// transEmptyNodeValue: '',
				// transSupportBasicHtmlNodes: true,
				// transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
				useSuspense: false,
			}
		});

	return i18nInstance;
}
