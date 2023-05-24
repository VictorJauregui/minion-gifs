/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'BlueMain': '#00A3FF',
        'btnColor': '#7C8BBF',
        'detailsGray': '#A1A1A1',
      },
      backgroundImage: {
        'bgUpload': "url('/src/assets/bg-modal.gif')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontSize:{
        title: '2rem',
      },
    },
  },
  plugins: [],
}