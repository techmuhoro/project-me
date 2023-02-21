module.exports = {
   darkMode: 'class',
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         colors: {
            primary: '#0fcfff',
         },
         fontFamily: {
            ['mono-1']: `'Roboto Mono', monospace`,
         },
      },
   },
   plugins: [],
};
