import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // or 'media'
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-sarif'],
      },
      colors: {
        primary: {
          '50': '#ffedef',
          '100': '#ff94a0',
          '200': '#ff8290',
          '300': '#ff7080',
          '400': '#ff5e70',
          '500': '#ff4c60',
          '600': '#e64456',
          '700': '#cc3d4d',
          '800': '#b33543',
          '900': '#992e3a',
        },
        // primary: {
        //   "50": "#e8f9f1",
        //   "100": "#77d9ab",
        //   "200": "#61d29d",
        //   "300": "#4acc8f",
        //   "400": "#34c581",
        //   "500": "#1dbf73",
        //   "600": "#1aac68",
        //   "700": "#17995c",
        //   "800": "#148651",
        //   "900": "#117345",
        // },
        indigo: {
          overlay: 'rgba(99,102,241, 0.8)',
        },
      },
      typography: (theme: (arg0: string) => unknown) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
            },

            blockquote: {
              color: theme('colors.gray.800'),
              borderLeftColor: theme('colors.primary.500'),
              fontSize: theme('fontSize.xl'),
              fontStyle: 'not-italic',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
