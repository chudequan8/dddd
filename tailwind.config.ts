import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      transitionProperty: {
        margin: "margin",
      },

      colors: {
        "blue-light": "#EFF6FF",
        "blue-hover": "rgba(51, 144, 255, 0.2)",
        "dark-blue": "#003366",
        "dark-blue-light": "rgba(51, 144, 255, .08)",
        "dark-blue-hover": "rgba(51, 144, 255, .2)",
        primary: 'var(--color-bg-primary)',
				yellow: "var(--color-yellow)",
				standard: "var(--color-standard)",
				shadow: "var(--color-shadow)",
				subText: "var(--color-subText)",
				title: "var(--color-title)",
				text: "var(--color-text)",
        '15xysm6': 'var(--15xysm6)',
        '1q81als': 'var(--1q81als)',
      },

      fontFamily: {
        sans: ['var(--font-saira)', 'var(--font-roboto)', 'PingFangSC-Regular', 'Noto Sans SC', 'Microsoft YaHei', 'sans-serif'],
      },
    },
  },
  safelist: [
    // {
    // 	pattern: /bg-(inherit|current|transparent|black|white)$/,
    // 	variants: ['hover', 'active'],
    // },
    {
      pattern:
        // /bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)$/,
        /bg-(zinc|red|amber|lime|emerald|sky|blue|violet)-(50|100|200|300|400|500|600|700|800|900|950)$/,
      variants: ["hover", "active", "checked", "indeterminate"],
    },
    {
      pattern:
        // /bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)$/,
        /bg-(zinc|red|amber|lime|emerald|sky|blue|violet)-(50|100|200|300|400|500|600|700|800|900|950)\/(10)$/,
    },
    // {
    // 	pattern: /border-(inherit|current|transparent|black|white)$/,
    // 	variants: ['hover', 'active'],
    // },
    {
      pattern:
        // /border-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)$/,
        /border-(zinc|red|amber|lime|emerald|sky|blue|violet)-(50|100|200|300|400|500|600|700|800|900|950)$/,
      variants: ["hover", "active", "dark:hover", "peer-checked"],
    },
    {
      pattern:
        // /border-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)\/(0|5|10|20|25|30|40|50|60|70|75|80|90|95|100)$/,
        /border-(zinc|red|amber|lime|emerald|sky|blue|violet)-(50|100|200|300|400|500|600|700|800|900|950)\/(50)$/,
      variants: ["hover", "active"],
    },
    {
      pattern:
        // /text-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)\/(0|5|10|20|25|30|40|50|60|70|75|80|90|95|100)$/,
        /text-(zinc|red|amber|lime|emerald|sky|blue|violet)-(50|100|200|300|400|500|600|700|800|900|950)$/,
      variants: ["hover", "active", "dark:hover"],
    },
    // {
    // 	pattern: /hidden$/,
    // 	variants: ['sm'],
    // },
  ],
  plugins: [require("daisyui")],
  darkMode: "class",
};
export default config;
