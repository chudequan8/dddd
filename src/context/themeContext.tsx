'use client';

import React, {
	createContext,
	FC,
	ReactNode,
	useContext,
	useEffect,
	useLayoutEffect,
	useMemo,
	useState
} from 'react';
import theme from 'tailwindcss/defaultTheme';
import DARK_MODE from '../constants/darkMode.constant';
import themeConfig from '../config/theme.config';
import useDeviceScreen from '../hooks/useDeviceScreen';
import { useLocalStorageState } from 'ahooks';
import STORAGE from '@/constants/storage.constant';
import { LangType } from '@/types/lang.type';
import type { SetState } from 'ahooks/lib/createUseStorageState'

export type ThemeContextProps = {
	isDarkTheme: boolean
	darkModeStatus?: DarkModeType.DarkMode
	setDarkModeStatus: (value?: SetState<DarkModeType.DarkMode>) => void
	asideStatus?: boolean
	setAsideStatus: (value?: SetState<boolean>) => void
	language?: LangType.Lang
	setLanguage: (value?: SetState<LangType.Lang>) => void
	dir?: string
	setDir: (value?: SetState<string>) => void
	messageStatus: boolean,
	setMessageStatus: (value?: SetState<boolean>) => void;
	fontSize: number;
	setFontSize: (value?: SetState<number>) => void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

interface IThemeContextProviderProps {
	children: ReactNode;
}

export const ThemeContextProvider: FC<IThemeContextProviderProps> = ({ children }) => {
	/**
	 * Language
	 */
	const [language, setLanguage] = useLocalStorageState<LangType.Lang>(STORAGE.LANGUAGE, {
		defaultValue: themeConfig.language
	})

	const [dir, setDir] = useLocalStorageState<string>(STORAGE.DIR, {
		defaultValue: 'ltr'
	})

	/**
	 * Dark Mode
	 */
	const [darkModeStatus, setDarkModeStatus] = useLocalStorageState<DarkModeType.DarkMode | null>(
		((typeof window !== 'undefined' && localStorage.getItem('theme')) ||
			themeConfig.theme) as DarkModeType.DarkMode,
	);
	
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(darkModeStatus === DARK_MODE.DARK);
	useLayoutEffect(() => {
		localStorage.setItem('theme', darkModeStatus as string);
		if (
			localStorage.getItem('theme') === DARK_MODE.DARK
		) {
			document.documentElement.classList.add(DARK_MODE.DARK);
			// setIsDarkTheme(true);
		} else {
			document.documentElement.classList.remove(DARK_MODE.DARK);
			// setIsDarkTheme(false);
		}
	}, [darkModeStatus]);

	/**
	 * Aside Status
	 */
	const { width } = useDeviceScreen();
	const [asideStatus, setAsideStatus] = useLocalStorageState<boolean>(STORAGE.ASIDE_STATUS, {
		defaultValue: true
	})
	useEffect(() => {
		if (Number(theme.screens.md.replace('px', '')) > Number(width)) setAsideStatus(false);
		return () => {
			setAsideStatus(true)
		}
	}, [width])

	
	/**
	 * Messages Status
	 * */
	// @ts-ignore
	const [ messageStatus, setMessageStatus] = useLocalStorageState<boolean>(false);

	
	/**
	 * Font Size
	 */
	const [fontSize, setFontSize] = useLocalStorageState<any>(
		typeof window !== 'undefined' && Number(localStorage.getItem('fyr_fontSize'))
			? localStorage.getItem('fyr_fontSize')?.toString() as string
			: themeConfig.fontSize.toString() as string,
	);
	useEffect(() => {
		localStorage.setItem('fyr_fontSize', fontSize?.toString());

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fontSize]);
	
	/**
	 * Header Search
	 * */
	// @ts-ignore
	const [ headerSearch, setHeaderSearch] = useLocalStorageState<boolean>(false);

	// @ts-ignore
	const values: ThemeContextProps = useMemo(
		() => ({
			isDarkTheme,
			darkModeStatus,
			setDarkModeStatus,
			asideStatus,
			setAsideStatus,
			fontSize,
			setFontSize,
			language,
			setLanguage,
			dir,
			setDir,
			headerSearch,
			setHeaderSearch,
			messageStatus,
			setMessageStatus
		}),
		[isDarkTheme, darkModeStatus, asideStatus, fontSize, language, dir, headerSearch, messageStatus],
	);

	return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
	return useContext(ThemeContext)
}

export default ThemeContext