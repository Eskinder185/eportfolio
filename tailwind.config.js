/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "softNeon": {
          "0%, 100%": {
            textShadow: "0 0 8px rgba(34, 211, 238, 0.35), 0 0 16px rgba(34, 211, 238, 0.15)"
          },
          "50%": {
            textShadow: "0 0 16px rgba(34, 211, 238, 0.55), 0 0 28px rgba(59, 130, 246, 0.25)"
          }
        },
        "pulseGlow": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 0 rgba(34, 211, 238, 0))"
          },
          "50%": {
            filter: "drop-shadow(0 0 16px rgba(34, 211, 238, 0.35))"
          }
        },
        "shimmer": {
          "0%": {
            transform: "translateX(-120%) rotate(8deg)"
          },
          "100%": {
            transform: "translateX(120%) rotate(8deg)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "softNeon": "softNeon 8s ease-in-out infinite",
        "pulseGlow": "pulseGlow 3.5s ease-in-out infinite",
        "shimmer": "shimmer 0.9s ease"
      },
    },
  },
  plugins: [],
}
