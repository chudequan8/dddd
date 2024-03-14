import DARK_MODE from "../constants/darkMode.constant";

type TThemeConfigs = typeof themeConfig

const themeConfig = {
  projectTitle: "Fyr",
  projectName: "React TypeScript Tailwind Admin & AI Chat Template",
  language: "en" as LangType.Lang,
  theme: DARK_MODE.LIGHT,
  transition: 'transition-all duration-300 ease-in-out',
};

export default themeConfig;
