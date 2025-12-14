import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Colores personalizados
      colors: {
        // Escalas neutras
        neutral: {
          50: "#FFFFFF",
          100: "#F7F7F7",
          200: "#F0F0F0",
          300: "#E1E1E1",
          400: "#C4C4C4",
          500: "#A3A3A3",
          600: "#8C8C8C",
          700: "#6F6F6F",
          800: "#5B5B5B",
          900: "#3E3E3E",
        },
        // Escalas primarias
        primario: {
          50: "#E6F1F7",
          100: "#C5E2ED",
          200: "#95C6DD",
          300: "#64AAD0",
          400: "#4B93C2",
          500: "#2A73AA",
          600: "#215E8A",
          700: "#1B4C71",
          800: "#163F5F",
          900: "#0E2944",
        },
        // Escalas secundarias
        secundario: {
          50: "#FDEBEA",
          100: "#F9C8C5",
          200: "#F39B96",
          300: "#ED6360",
          400: "#E1423E",
          500: "#CE2A29",
          600: "#B22524",
          700: "#9E2021",
          800: "#841C1D",
          900: "#6B181A",
        },
        // Estados (success, warning, error)
        success: {
          50: "#E0F5E8",
          100: "#C0ECD4",
          200: "#96DFB7",
          300: "#6CC49A",
          400: "#54B384",
          500: "#349D65",
          600: "#2A8853",
          700: "#237045",
          800: "#1B5938",
          900: "#14442C",
        },
        warning: {
          50: "#F8F2E9",
          100: "#F1E4D1",
          200: "#E5D1A9",
          300: "#D6BA7A",
          400: "#C9A75A",
          500: "#B98C33",
          600: "#A2762A",
          700: "#8C6323",
          800: "#75511B",
          900: "#5F4014",
        },
        error: {
          50: "#FCEAE9",
          100: "#F9CFCB",
          200: "#F3A9A2",
          300: "#ED7A70",
          400: "#E55D4E",
          500: "#D83A29",
          600: "#C42D21",
          700: "#AD241C",
          800: "#971C17",
          900: "#7F1512",
        },
        // Escalas oscuras
        "neutral-dark": {
          50: "#E0E9F4",
          100: "#C2D4EA",
          200: "#99B3DD",
          300: "#7A9AD3",
          400: "#6386C9",
          500: "#446BBF",
          600: "#3A5AAA",
          700: "#324A96",
          800: "#293B81",
          900: "#1F2B6B",
        },
        // Sombras y fondo
        shades: {
          500: "#FFFFFF", // Blanco
          900: "#000000", // Negro
        },
        background: "var(--background)", // Fondo global
        foreground: "var(--foreground)", // Color de texto global
      },

      // Sombras personalizadas
      boxShadow: {
        custom: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Sombra ligera
        "custom-dark": "0px 4px 12px rgba(0, 0, 0, 0.6)", // Sombra oscura
      },

      // Bordes redondeados
      borderRadius: {
        custom: "1rem", // Personalizado (16px)
        large: "2rem", // Más redondeado
      },

      // Filtros personalizados
      filter: {
        "custom-drop": "drop-shadow(0 15px 30px rgba(0, 0, 0, 0.6))",
      },

      // Fuentes (si deseas agregar una configuración global)
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Fuente principal
        serif: ["Merriweather", "serif"], // Fuente secundaria
      },
    },
  },
  plugins: [],
} satisfies Config;
