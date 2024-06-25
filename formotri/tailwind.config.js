// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          'espolBlue' : '#243165',
          'espolBlue2' : '#006EC8',
          'espolBlue3' : '#28BED1',
          'espolGreen': '#6CC427',
          'espolYellow': '#EEC427',
          'espolPink': '#FF938C',
         'espolPurple': '#CA83C0',
          'tabGray': '#DBDBDB',
        }
      }
    },
    plugins: [],
  };
  