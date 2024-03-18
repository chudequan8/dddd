import DARK_MODE from "../constants/darkMode.constant";
import { LangType } from "@/types/lang.type";

type TThemeConfigs = typeof themeConfig

const themeConfig = {
  projectTitle: "Fyr",
  projectName: "React TypeScript Tailwind Admin & AI Chat Template",
  language: "en" as LangType.Lang,
  theme: DARK_MODE.DARK,
  transition: 'transition-all duration-300 ease-in-out',
	borderWidth: 'border-2',
	fontSize: 13,
	themeColor: '',
	themeColorShade: '500',
	rounded: 'rounded-lg',
};

export default themeConfig;
