/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
		"./pages/**/*.html",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImage':'url(../assets/kirbybg.jpg)'
      },
      fontFamily: {
        mainFont: ['mainFont']
      },
      colors: {
        'whiteBg':'rgba(255, 255, 255, .8)',
        'greenBg':'rgb(120,134,107)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

