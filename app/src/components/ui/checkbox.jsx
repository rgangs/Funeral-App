import React from "react";
import clsx from "clsx";

export const Checkbox = React.forwardRef(({ className, checked, onChange, ...props }, ref) => (
  <input
    ref={ref}
    type="checkbox"
    className={clsx(
      "h-4 w-4 rounded border border-[#2a2a2a] bg-[#0a0a0a] text-[#d4a5a5] focus:ring-[#d4a5a5] focus:ring-offset-0",
      className
    )}
    checked={checked}
    onChange={(event) => onChange?.(event.target.checked, event)}
    {...props}
  />
));

Checkbox.displayName = "Checkbox";

export default Checkbox;
