/**** Tailwind Config ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      colors: {
        bg: {
          DEFAULT: '#0b0d10',
          soft: '#0f131a'
        },
        accent: {
          DEFAULT: '#7c3aed',
          2: '#06b6d4'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
}
