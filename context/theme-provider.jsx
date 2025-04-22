"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const switchRef = useRef(null);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      html.setAttribute("data-theme", savedTheme);
    }
  }, []);
  const toggleTheme = async () => {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";
    await document.startViewTransition(() => {
      flushSync(() => {
        if (isDark) {
          setTheme("light");
          html.removeAttribute("data-theme");
          localStorage.setItem("theme", "light");
        } else {
          setTheme("dark");
          html.setAttribute("data-theme", "dark");
          localStorage.setItem("theme", "dark");
        }
      });
    }).ready;
    if (switchRef.current) {
      const { top, left } = switchRef.current.getBoundingClientRect();
      const right = window.innerWidth - left;
      const bottom = window.innerHeight - top;
      const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));
      document.documentElement.animate(
        {
          clipPath: isDark
            ? [`circle(${maxRadius}px at ${left + 40}px ${top + 20}px)`, `circle(0px at ${left + 40}px ${top + 20}px)`]
            : [`circle(0px at ${left + 40}px ${top + 20}px)`, `circle(${maxRadius}px at ${left + 40}px ${top + 20}px)`]
        },
        {
          duration: isDark ? 280 : 560,
          easing: "ease-in-out",
          pseudoElement: isDark ? "::view-transition-old(root)" : "::view-transition-new(root)"
        }
      );
    }
  };

  return <ThemeContext.Provider value={{ switchRef, theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
