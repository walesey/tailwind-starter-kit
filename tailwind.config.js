
const colors = require('tailwindcss/colors')

module.exports = {
  
  // Scans src files for tailwind class names to decide which classes to include in the final build.
  purge: [
    './*.html'
  ],

  // faster dev builds, only compiles required classes
  mode: 'jit',

  theme: {
    // defines custom theme values
    screens: { 
      // custom breakpoints
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      // custom colors + tailwind colors
      blue: '#33F',
      green:  '#3F3',
      red: colors.red,
      orange: colors.orange,
      gray: colors.gray,
      white: colors.white,
      indigo: colors.indigo,
    },

    // extend: overrides the default theme value, preserving unspecified values.
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }
  },

  variants: {
    extend: {
      divideColor: ['group-hover'],
    }
  },

  plugins: [],

  darkMode: false,
}
