/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
          container:"1263px"
      },
      // backgroundImage: {
      //   'bannar': "url('/')"
      // }
    },
  },
  plugins: [],
}

