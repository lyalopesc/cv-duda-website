import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        title: ['DM Serif Display', 'serif'],
      },
    },
  },
} satisfies Config