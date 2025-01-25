/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(-10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' }
          }
        },
        animation: {
          fadeIn: 'fadeIn 0.5s ease-out'
        }
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: [{
        dark: {
          "primary": "#1d4ed8",
          "primary-focus": "#1e40af",
          "primary-content": "#ffffff",
          "base-100": "#1f2937",
          "base-200": "#111827",
          "base-300": "#374151",
          "base-content": "#f3f4f6",
        },
      }],
      darkTheme: "dark",
    },
  };