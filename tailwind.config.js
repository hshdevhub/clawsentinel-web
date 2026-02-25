/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d0d0d',
        surface: '#141414',
        border: '#1f1f1f',
        red: {
          DEFAULT: '#ff3b3b',
          dim: '#1a0808',
        },
        blue: {
          DEFAULT: '#3b82f6',
          dim: '#0f1f3d',
        },
        text: {
          DEFAULT: '#f1f1f1',
          muted: '#6b7280',
        },
        green: {
          DEFAULT: '#22c55e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
