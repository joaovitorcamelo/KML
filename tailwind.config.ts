import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        commonBorder: '#B6B6B6',
        subText: '#8A8A8A',
        subTextHover: '#6E6868',
        brandMain: '#A01A52',
        brandText: '#671337',
        brandHover: '#EFB6CE',
      },
    },
  },
  plugins: [],
};
export default config;
