// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add any other files that contain Tailwind classes
  ],
  theme: {
    extend: {
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
        'fade-in': 'fade-in 1s ease-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}