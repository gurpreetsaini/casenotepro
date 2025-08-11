/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#2B7A78', // Calm Teal from app
          600: '#1e5a57',
          700: '#164e4b',
          900: '#134e4a',
        },
        secondary: {
          500: '#355C7D', // Indigo from app
          600: '#2a4a66',
          700: '#1e3a52',
        },
        accent: {
          500: '#F6A85B', // Orange accent from app
          600: '#e89547',
          700: '#d48233',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
