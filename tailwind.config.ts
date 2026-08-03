import type { Config } from "tailwindcss";

// Tailwind v4 loads this via the `@config` directive only. The primary
// configuration lives in `src/app/globals.css` (@theme). This file exists
// for editor tooling and any tooling that still reads tailwind.config.
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
