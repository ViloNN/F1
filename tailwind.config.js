/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  modules: ['@nuxtjs/color-mode'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],

fontFamily: {
  'body': [
'Inter', 
'ui-sans-serif', 
'system-ui', 
'-apple-system', 
'system-ui', 
'Segoe UI', 
'Roboto', 
'Helvetica Neue', 
'Arial', 
'Noto Sans', 
'sans-serif', 
'Apple Color Emoji', 
'Segoe UI Emoji', 
'Segoe UI Symbol', 
'Noto Color Emoji'
],
  'sans': [
'Inter', 
'ui-sans-serif', 
'system-ui', 
'-apple-system', 
'system-ui', 
'Segoe UI', 
'Roboto', 
'Helvetica Neue', 
'Arial', 
'Noto Sans', 
'sans-serif', 
'Apple Color Emoji', 
'Segoe UI Emoji', 
'Segoe UI Symbol', 
'Noto Color Emoji'
]

}
}