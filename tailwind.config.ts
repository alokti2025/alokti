import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Tech Mahindra uses clean sans-serif
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'], // Keep for headings
      },
      colors: {
        // Tech Mahindra Brand Colors (Rising Red primary)
        primary: {
          DEFAULT: "hsl(var(--primary))", // #E31837
          foreground: "hsl(var(--primary-foreground))", // white
          dark: "#B5122B", // darker red variant
        },
        // Core brand colors mapped to shadcn tokens
        border: "hsl(var(--border))", // #E6E7E8 (Light Grey)
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // #F5F6F8 (Light surface)
        foreground: "hsl(var(--foreground))", // #231F20 (Ink Black)
        // Text hierarchy
        text: {
          main: "#231F20", // Ink Black - main headings
          muted: "#6D6C71", // Dark Silver - body/subtext
        },
        surface: {
          DEFAULT: "#FFFFFF", // White cards
          alt: "#F5F6F8", // Light grey backgrounds
        },
        // Secondary colors from Tech Mahindra palette
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Steel Grey
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
          DEFAULT: "hsl(var(--card))", // White with subtle shadow
          foreground: "hsl(var(--card-foreground))",
        },
        // Sidebar (keep existing)
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "24px", // Tech Mahindra-style large rounded corners
      },
      boxShadow: {
        // Tech Mahindra card shadows
        "tm-card": "0 4px 20px rgba(15, 23, 42, 0.08)",
        "tm-card-hover": "0 12px 40px rgba(15, 23, 42, 0.12)",
        "tm-hero": "0 30px 80px rgba(15, 23, 42, 0.18)",
      },
      // Tech Mahindra spacing scale
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
