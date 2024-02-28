/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        modal: 'calc(100% - 20px)'
      },
      height: {
        modal: 'calc(100% - 80px)'
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(150deg)' },
          '100%': { transform: 'rotate(150deg)' },
        }
      },
      
      backgroundImage: {
        'dashboard-project': "url('https://media.istockphoto.com/id/1428470293/vector/business-reporting-dashboard-concept-illustration.jpg?s=612x612&w=0&k=20&c=5kq8vvEkXEfxjWZLVCMIbCf-x3XSvXYQsE-BkWpeH0U=')"
      }
    },
  },
  plugins: [
  ],
}

