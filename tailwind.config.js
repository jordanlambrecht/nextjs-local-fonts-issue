/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      gilroy: ['var(--font-gilroy)', 'sans-serif'],
    },

    extend: {
      fontFamily: {
        gilroy: ['var(--font-gilroy)', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      stroke: ['hover', 'focus'],
      fill: ['hover', 'focus'],
      skew: ['group-hover', 'active'],
      scale: ['group-hover', 'active'],
      backgroundColor: ['active'],
      height: {
        'screen-3/4': '75vh',
        'screen-2/3': '66vh',
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
        'screen-1/4': '25vh',
      },
      maxHeight: {
        'screen-3/4': '75vh',
        'screen-2/3': '66vh',
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
        'screen-1/4': '25vh',
      },
    },
  },
  plugins: [],
}
