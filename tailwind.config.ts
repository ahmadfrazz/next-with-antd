import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/Pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        Space: ['Space', 'sans-serif'],
        Geist: ['Geist', 'sans-serif'],
        'Geist-mono': ['Geist-mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
