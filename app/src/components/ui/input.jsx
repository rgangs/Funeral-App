import React from "react";
import clsx from "clsx";

export const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={clsx(
      "w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a]/70 px-4 py-2 text-sm text-[#f5f5f5] placeholder:text-[#6b6b6b] focus:border-[#d4a5a5] focus:outline-none focus:ring-2 focus:ring-[#d4a5a5]/40",
      className
    )}
    {...props}
  />
));

Input.displayName = "Input";

export default Input;
