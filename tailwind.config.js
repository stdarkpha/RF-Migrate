/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*.{html,js}"],
   theme: {
      extend: {
         colors: {
            theme: "#fefe00",
       },
        
         keyframes: {
            cross: {
               "0%": { "background-position": "0 0" },
               "100%": { "background-position": "61px 0" },
            },
            floating: {
               "0%": { "transform": "translateY(0)" },
               "50%": { "transform": "translateY(5rem)" },
               "100%": { "transform": "translateY(0)" },
            },
         },

         animation: {
            cross: "cross linear .4s infinite",
            floating: "floating ease-in-out 5s infinite",
         },
      },
   },
   plugins: [],
};
