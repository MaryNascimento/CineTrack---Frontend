/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azulfundo: '#041218',
        azulprimario: '#2839AB',
        azulsecundario: '#9CA7E5',
        azultres: '#162585',
        white: '#EFEFEF',
      },
      fontSize: {
        '3xl': '1.75rem',
      },
      backgroundImage: {
        'bg-banner': "url('')",
      },
    },
  },
  plugins: [],
}
