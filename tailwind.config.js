/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // 🌟 Scaler Branding Palette
        'scaler-blue': '#2C42FF',         // Primary brand blue
        'scaler-lightBlue': '#647CFF',    // Lighter blue (buttons, hover, etc.)
        'scaler-dark': '#1E1E2F',         // For dark text or dark backgrounds
        'scaler-bg': '#F3F4F6',           // Light grayish background
        'scaler-accent': '#FF7F50',       // Accent color (optional)
        'scaler-muted': '#6B7280',        // Muted text

        // You can tweak or extend as needed
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Optional: clean modern font
      },
    },
  },
  plugins: [],
}
