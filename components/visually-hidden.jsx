import { forwardRef } from "react";
import { cn } from "@/utils/lib";

const VisuallyHidden = forwardRef(({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => {
  return (
    <Component
      className={cn("visually-hidden-hidden", className)}
      data-hidden={!visible && !showOnFocus}
      data-show-on-focus={showOnFocus}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});

export default VisuallyHidden;
