/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'SBsemibold': ['SBSansDisplaySemiBold', 'semibold'],
      'SBregular': ['SBSansDisplayRegular', 'regular'],
      'SBsemiboldInt': ['SBSansInterface-Semibold', 'semibold'],
      'SBregulardInt': ['SBSansInterface-Regular', 'regular'],
    },
    extend: {},
  },
  plugins: [],
}

