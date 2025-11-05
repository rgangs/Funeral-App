import React from "react";
import clsx from "clsx";

export const Card = ({ className, ...props }) => (
  <div
    className={clsx(
      "rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a]/60 backdrop-blur-lg shadow-lg shadow-black/20",
      className
    )}
    {...props}
  />
);

export const CardHeader = ({ className, ...props }) => (
  <div className={clsx("px-6 py-4 border-b border-[#2a2a2a]/60", className)} {...props} />
);

export const CardTitle = ({ className, ...props }) => (
  <h3 className={clsx("text-lg font-light text-[#f5f5f5]", className)} {...props} />
);

export const CardContent = ({ className, ...props }) => (
  <div className={clsx("px-6 py-6 text-[#e5e5e5]", className)} {...props} />
);

export default Card;
