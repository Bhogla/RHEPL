/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary surface colours — white mode (RATPL layout, inverted)
        rhbg: '#FFFFFF',         // hero & primary sections (= RATPL's bg-warm equivalent)
        rhsurface: '#F5F4F0',    // alternating off-white sections (= RATPL's bg-warm)
        rhborder: '#E6E4DE',     // card and section borders (= RATPL's border color)
        rhdark: '#0E0E10',       // headings, primary text (= RATPL's ink)
        rhgrey: '#5B5B60',       // secondary text
        rhorange: '#E87722',     // brand orange CTA
        rhorangeHover: '#C9640F',
        rhorangeLight: '#FEF3E8',
        rhwhite: '#FFFFFF',
        rhsuccess: '#2E7D5B',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Fluid display steps — matching RATPL's aggressive condensed scale
        'display-xl': ['clamp(3rem, 6vw + 0.75rem, 5.25rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw + 0.5rem, 4rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3vw + 0.5rem, 2.75rem)', { lineHeight: '1.0', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.375rem, 2vw + 0.5rem, 1.875rem)', { lineHeight: '1.05' }],
      },
      maxWidth: {
        prose: '68ch',
        content: '1200px',
      },
      letterSpacing: {
        chip: '0.14em',
        label: '0.18em',
        wide: '0.22em',  // for mono labels like [ FIG. 01 :: ]
      },
      zIndex: {
        base: '0',
        raised: '10',
        sticky: '100',
        header: '200',
        backdrop: '300',
        modal: '400',
        toast: '500',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        // 30s linear infinite — adjust duration to taste
        marquee: 'marquee 30s linear infinite',
      },
      boxShadow: {
        lift: '0 18px 40px -24px rgba(14, 14, 16, 0.30)',
        'lift-warm': '0 8px 24px -8px rgba(14, 14, 16, 0.12)',
        card: '0 1px 3px rgba(14,14,16,0.06), 0 4px 12px rgba(14,14,16,0.08)',
      },
      backgroundImage: {
        // Hero veil for photo sections — darkens bottom where text sits
        'hero-veil':
          'linear-gradient(105deg, rgba(14,14,16,0.92) 0%, rgba(14,14,16,0.78) 32%, rgba(14,14,16,0.40) 64%, rgba(14,14,16,0.15) 100%)',
        'hero-veil-b':
          'linear-gradient(to top, rgba(14,14,16,0.95) 0%, rgba(14,14,16,0.55) 38%, rgba(14,14,16,0.18) 70%, rgba(14,14,16,0.28) 100%)',
        // Light section divider gradient
        'section-fade':
          'linear-gradient(to bottom, #FFFFFF 0%, #F5F4F0 100%)',
      },
    },
  },
  plugins: [],
}
