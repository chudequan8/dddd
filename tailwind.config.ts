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
        // primary: 'var(--color-primary)',
        primary: 'var(--color-bg-primary)',
				yellow: "var(--color-yellow)",
				standard: "var(--color-standard)",
				shadow: "var(--color-shadow)",
				'sub-text': "var(--color-sub-text)",
				title: "var(--color-title)",
				text: "var(--color-text)",
        '15xysm6': 'var(--15xysm6)',
        '1q81als': 'var(--1q81als)',
        '1h443ei': 'var(--1h443ei)',
        'whdmoy': 'var(--whdmoy)',
        'mk9uba': 'var(--mk9uba)',
        'bv38jy': 'var(--bv38jy)',
        '5l1a8f': 'var(--5l1a8f)',
        '1by3zu8': 'var(--1by3zu8)',
        '1nfs066': 'var(--1nfs066)',
        '12v585s': 'var(--12v585s)',
        'a56fau': 'var(--a56fau)',
        '6596nj': 'var(--6596nj)',
        '16j75bq': 'var(--16j75bq)',
      },

      fontFamily: {
        sans: ['var(--font-saira)', 'var(--font-roboto)', 'PingFangSC-Regular', 'Noto Sans SC', 'Microsoft YaHei', 'sans-serif'],
      },
      textColor: {
        primary: 'var(--color-primary)',
      },
      borderColor: {
        primary: 'var(--color-primary)',
      }
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
