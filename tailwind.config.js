/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'slider': '0 10px 40px 0 rgba(0, 0, 0, 0.1)'
      },
      opacity: {
        '4': '0.04',
      },
      width: {
        495: '495px'
      },
      height: {
        380: '380px',
        351: "351px",
        158: "158px",
        495: '495px',
        600: '600px',
        'inventory-img': 'calc(100vh - 8rem - 104px)',
      },
      zIndex: {
        '999': 999,
        '1001': 1001,
        '1009': 1009
      },
    },
  },
  plugins: [],
}

