/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        // Headings 
        bebas: ['Bebas Neue', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        //  Handwriting
        dancing: ['Dancing Script', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        greatvibes: ['Great Vibes', 'cursive']
      },
    },
  },
  plugins: [],
}