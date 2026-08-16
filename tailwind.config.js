/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A101E',   // page background
          surface: '#111A2C',   // card background
          raised: '#16223A',    // hover/raised surface
          border: '#22304A',    // hairline borders
        },
        paper: {
          DEFAULT: '#E9EDF6',   // primary text
          muted: '#8C9AB8',     // secondary text
          faint: '#5A6785',     // tertiary / disabled text
        },
        signal: {
          teal: '#33D6C0',      // primary accent — "data pulse"
          amber: '#F2B84B',     // secondary accent — used sparingly
          rose: '#E8637A',      // error / delay states only
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(51,214,192,0.25), 0 0 24px rgba(51,214,192,0.08)',
      },
    },
  },
  plugins: [],
}
