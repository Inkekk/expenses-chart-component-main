/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'soft-red': 'hsl(10, 79%, 65%)',
        'red-bg': 'hsl(10, 50%, 85%)',
        'dark-brown': 'hsl(25, 47%, 15%)'
      }
    }
  },
  plugins: []
};
