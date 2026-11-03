"use client";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  // The stored theme is applied by the boot script in the root layout.
  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", !isDark);
    try {
      window.localStorage.setItem("theme", !isDark ? "dark" : "light");
    } catch {
      // Storage can be blocked; the theme still applies for this page view.
    }
  };

  // The bar is always on the dark field, so the icons key off <html>, not the
  // dark variant.
  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle theme"
      onClick={toggle}
    >
      <Sun className="hidden [html.dark_&]:block" />
      <Moon className="[html.dark_&]:hidden" />
    </Button>
  );
}
