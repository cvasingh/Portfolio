import { cn } from "@/utils/lib";
import { forwardRef } from "react";

const Section = forwardRef(
  ({ as: Component = "div", children, className, ...rest }, ref) => (
    <Component
      ref={ref}
      className={cn(
        // Default padding (desktop)
        "px-[var(--space5XL)]",
        // Tablet
        "tablet:px-[calc(var(--space4XL)+var(--space3XL))]",
        // Mobile
        "mobile:px-[var(--spaceL)]",
        // Outer space for mobile and mobile landscape
        "mobile:px-[var(--spaceOuter)] mobile-landscape:px-[var(--spaceOuter)]",
        // Special case: max-width 820px and max-height 420px
        "max-w-[820px]:max-h-[420px]:px-[var(--space4XL)]",
        // Override left padding for ultra-wide screens
        "min-[2080px]:pl-[var(--space5XL)]",
        // Remove default outline on focus
        "focus:outline-none",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
);

export default Section;

Section.displayName = "Section";
