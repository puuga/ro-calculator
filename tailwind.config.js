/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        circle: 'circle',
        square: 'square',
      }
    },
  },
  plugins: [],
}
