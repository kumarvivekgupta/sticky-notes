module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        translate: {
          '10p': '10%', // Custom translate-y utility
        },
        spacing: {
          '110': '110px', // Custom padding-top utility
        },
        keyframes: {
          pin: {
            '0%': { transform: 'scale(0) rotate(0deg)' },
            '100%': { transform: 'scale(1) rotate(-45deg)' },
          },
          unpin: {
            '0%': { transform: 'scale(1) rotate(-45deg)' },
            '100%': { transform: 'scale(0) rotate(0deg)' },
          },
          blob: {
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
            },
            "33%": {
              transform: "translate(30px, -50px) scale(1.1)",
            },
            "66%": {
              transform: "translate(-20px, 20px) scale(0.9)",
            },
            "100%": {
              transform: "tranlate(0px, 0px) scale(1)",
            },
          },
        },
        animation: {
          pin: 'pin 0.5s forwards',
          unpin: 'unpin 0.5s forwards',
          blob: "blob 7s infinite",
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography')
    ],
  }