/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      colors: {
        'primary': '#cf0e3d',
        'primary-200': '#ff9ab5',
        'primary-700': '#bb122f',
        'secondary': '#fddebd',
        'secondary-700': '#fccda1',
      },
      boxShadow: {
        'custom': '0 0 4px 0 rgba(207, 14, 61, .40)',
      },
      zIndex: {
        'lg': '9999',
        'xl': '99999',
        '2xl': '999999',
      },
      screens: {
        'xs': '360px',
      },
    },
  },
  plugins: [],
}
