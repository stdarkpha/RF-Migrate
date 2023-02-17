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
            moveregister: {
               "0%": { "background-position": "0 0" },
               "100%": { "background-position": "475px 0" },
            },
            floating: {
               "0%": { transform: "translateY(0)" },
               "50%": { transform: "translateY(5rem)" },
               "100%": { transform: "translateY(0)" },
            },
            scale: {
               "0%": { transform: "scale(1)" },
               "50%": { transform: "scale(.9)" },
               "100%": { transform: "scale(1)" },
            },
            shadow: {
               "0%": { filter: "drop-shadow(-20px 20px 20px #ffa600)" },
               "50%": { filter: "drop-shadow(0px 0px 0 #ffa600)" },
               "100%": { filter: "drop-shadow(-20px 20px 20px #ffa600)" },
            },
            arrow: {
               "0%": { transform: "translateX(-2rem)", opacity: "0", fill: "white" },
               "100%": { transform: "translateX(0)", opacity: "1", fill: "none" },
               // "100%": { transform: "translateX(0)", opacity: "1", fill: "white" },
            },
            dash: {
               "0%": { "stroke-dashoffset": "0" },
               "100%": { "stroke-dashoffset": "1000" },
            },
         },

         animation: {
            cross: "cross linear .4s infinite",
            moveregister: "moveregister linear 4s infinite",
            floating: "floating ease-in-out 5s infinite",
            scale: "scale ease-in-out 1s infinite",
            shadow: "shadow ease-in-out 5s infinite",
            arrow: "arrow ease-in-out .6s infinite",
            dash: "dash ease-in-out 2s infinite",
         },
      },
   },
   plugins: [require("tailwindcss-animation-delay")],
};
