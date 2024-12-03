/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gri':'#3f475f',
        'sari':'#ffe800',
        'gri2' : '#2f3546',
        'mavi':'#448cd6',
        'homeicon' : '#fcae1a',
        'tmavi' : '#003399',
        'tgri' : '#a1a1a1',
        'tred' :'#f32b2d',
        'loginback' : '#f8f8f8',
        'logocolor':'#b5c9ff',
        'addgri' : '#fafafa',
        'yedekparca' : '#20b9ba' , 
        'ikinciel' : '#6c73f4',
        'ismakineleri' : '#a665fb',
        'ustalar' : '#499edd',
        'özelders' : '#56b27f', 
        'isilanlari' : '#94b849' , 
        'hayvanlar' : '#2abbe6',
        'yardimci' : '#f8804c',
        'okgreen' :'#26a67c',

        
      },
      fontFamily:{
       kerem:[ 'Europa Grotesk Nr 2 SH' , 'bold'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
],
}

