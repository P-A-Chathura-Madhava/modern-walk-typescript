const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'primary': {
          'normal': '#EB8120',
          'hover': '#F17502',
          'selected': '#D16400',
          'inverse-hover': '#F7CDA6',
          'inverse-hover-click': '#EBB888'
        },
        'main': 'rgb(204, 209, 218)',
        'borderColor': {
          'active': '#7C89A1',
          'inactive': '#C6CBD5'
        },
        'background': {
          'elephant-grey': '#F7F8F9',
          'elephant-contrast': '#F0F2F5',
          'white': '#FFFFFF'
        },
        'link': {
          'blue': '#6A81FD',
          'hover': '#5467CE',
          'active': '#4054C1',
          'disabled': '#A5B0E3'
        },
        'danger': {
          'red': '#E1273D',
          'glow': '#ED9AA4',
          'inactive': '#F0939E',
          'disabled': '#F9D4D8',
          'hover': '#C01227',
          'active': '#9D0215'
        },
        'normal': '#F7F8F9',
        'hover': '#F7F8F9',
        'selected': '#F7F8F9'
      },
      height: {
        'icon-h-normal': 32,
        'icon-h-big': 48,
        'btn-normal': 48,
        'table-sort': 28,
        'input-field': 48
      },
      width: {
        'icon-w-normal': 32,
        'icon-w-big': 48,
        'btn-normal': 119,
        'table-sort': 18,
        'input-field': 416
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
        'icon': 9,
        'btn': 8,
        'input-field': 8
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        poppins: ['Poppins', 'sans-serif']
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderWidth: 1,
      boxShadow: {
        '3xl': '6px 10px 21px -6px rgba(0,0,0,0.75)',
        "4xl": "15px 18px 26px 0px rgba(0,0,0,0.75)"
      },
      fontSize: {
        'icon-md': 18,
        'icon-big': 48,
        'btn': 16,
        'input-label': 14,
        'input-field-msg': 14
      },
      fontWeight: {
        'icon-md': 400,
        'btn': 700,
        'input-label': 400,
        'input-field-msg': 400
      },
      padding: {
        'icon-y': 7,
        'icon-x': 8,
        'btn-t': 14,
        'btn-b': 10,
        'btn-x': 24,
        'input-t': 18,
        'input-b': 8,
        'input-l': 12,
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}

