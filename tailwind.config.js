/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      backgroundColor: {
        'primary': '#00B086'
      },
      textColor: {
        'primary': '#00B086',
        'secondary': '#8C8C8C',
        'danger': '#E70000'
      },
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
