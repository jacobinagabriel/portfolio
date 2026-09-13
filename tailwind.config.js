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
        // "Patroclus — Greek Mythology" palette, the source for the whole site
        // https://www.color-hex.com/color-palette/1084194
        patroclus: {
          taupe: '#4b4339',
          bark: '#452518',
          ochre: '#7f3100',
          sage: '#4f5c48',
          pine: '#0d2302',
        },

        // Backgrounds, darkest to lightest. `deep` is patroclus.pine as it
        // ships; `abyss` sinks it toward black and the two above it lift it
        // toward patroclus.sage. The luminance steps match the navy ramp this
        // replaces, so every depth relationship on the page is preserved.
        abyss: '#061001',
        deep: '#0d2302',
        surface: '#293b1f',
        raised: '#3d4c34',

        // Interactive accent, lightened from patroclus.ochre so it can carry
        // dark type as a fill and still read as a border against the greens
        accent: '#d08544',

        // Type scale. Every entry is one Patroclus hue lightened until it
        // clears WCAG AA on the backgrounds above — the palette itself is
        // near-black, so its raw values are unreadable as text. `inverse` is
        // the exception: it sits on the accent fill, so it keeps the raw hex.
        ink: {
          bright: '#f0e7d9',  // headings         <- patroclus.taupe
          DEFAULT: '#cfc4b4', // body copy        <- patroclus.taupe
          muted: '#b8c4ae',   // secondary copy   <- patroclus.sage
          faint: '#8d9a83',   // legal, meta      <- patroclus.pine
          link: '#eda468',    // links, nav       <- patroclus.ochre
          warm: '#e0b49c',    // tag chips        <- patroclus.bark
          inverse: '#0d2302', // type on the accent fill, unmodified
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
