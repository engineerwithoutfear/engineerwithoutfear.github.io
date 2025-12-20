/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9f180e',
          dark: '#8d0606',
          light: '#9b1509',
        },
        accent: '#212121',
        surface: '#ffffff',
        'surface-variant': '#f5f5f5',
        'on-surface': '#212121',
        'on-surface-variant': '#757575',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
}

