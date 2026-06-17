/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Source Serif Pro', 'Lora', 'Merriweather', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        'text-primary': '#000000',
        'text-secondary': '#4A4A4A',
        'text-muted': '#7A7A7A',
        'border-default': '#D9D9D9',
        'bg-muted': '#F8F8F8',
        'bg-card': '#FAFAFA',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      fontSize: {
        'display': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'headline': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'subheading': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        'editorial': '0.15em',
        'tight-serif': '-0.03em',
      },
      maxWidth: {
        'editorial': '72rem',
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
