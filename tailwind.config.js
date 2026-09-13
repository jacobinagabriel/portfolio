/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        // "Odysseus — Greek Mythology" palette
        // https://www.color-hex.com/color-palette/1084191
        odysseus: {
          taupe: '#574848',
          steel: '#477298',
          brick: '#7d2626',
          maroon: '#660000',
          navy: '#073763',
        },

        // Backgrounds, darkest to lightest
        abyss: '#020f1d',
        deep: '#05203a',
        surface: '#073763',
        raised: '#0e4a7f',

        // Interactive accent, lightened from the palette's steel blue so it
        // stays readable on the navy backgrounds
        accent: {
          DEFAULT: '#8fb6d6',
          bright: '#bdd7ec',
          muted: '#477298',
        },

        // Warm counterpoint, drawn from the palette's brick red
        ember: {
          DEFAULT: '#7d2626',
          light: '#e0a9a9',
        },

        // Body copy, tinted with the palette's taupe
        parchment: {
          DEFAULT: '#c9bcbc',
          dim: '#a89898',
          faint: '#7e6e6e',
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
