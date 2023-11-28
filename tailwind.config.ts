import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-color': 'var(--main-background-color)',
        'second-color': 'var(--second-background-color)',
      },
      colors: {
        'main-color': 'var(--text-color)',
        'selected-color': 'var(--selected-text-color)'
      }
    },
  },
  plugins: [],
}
export default config
