import { useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";

export function useScrollToHash() {
  const scrollTimeout = useRef();
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.startsWith("#") ? hash.slice(1) : hash;
      const targetElement = document.getElementById(id);

      if (!targetElement) return;

      targetElement.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
      });

      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);

        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll);

          if (window.location.pathname === router.pathname) {
            onDone?.();
            // Update URL hash without scrolling again
            router.replace(`${router.pathname}#${id}`, undefined, {
              scroll: false,
            });
          }
        }, 50);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [router, reduceMotion]
  );

  return scrollToHash;
}
