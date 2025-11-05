import React from "react";
import clsx from "clsx";

export const Textarea = React.forwardRef(({ className, rows = 4, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={rows}
    className={clsx(
      "w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a]/70 px-4 py-3 text-sm text-[#f5f5f5] placeholder:text-[#6b6b6b] focus:border-[#d4a5a5] focus:outline-none focus:ring-2 focus:ring-[#d4a5a5]/40",
      className
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";

export default Textarea;
