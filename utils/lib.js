import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400
};

export function throttle(func, timeFrame) {
  let lastTime = 0;

  return function (...args) {
    const now = new Date();

    if (now - lastTime >= timeFrame) {
      func(...args);
      lastTime = now;
    }
  };
}
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
