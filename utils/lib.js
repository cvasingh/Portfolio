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

export function cssProps(props, style = {}) {
  let result = {};

  const keys = Object.keys(props);

  for (const key of keys) {
    let value = props[key];

    if (typeof value === "number" && key === "delay") {
      value = numToMs(value);
    }

    if (typeof value === "number" && key !== "opacity") {
      value = numToPx(value);
    }

    if (typeof value === "number" && key === "opacity") {
      value = `${value * 100}%`;
    }

    result[`--${key}`] = value;
  }

  return { ...result, ...style };
}
