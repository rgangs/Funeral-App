import React from "react";
import clsx from "clsx";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variantClasses = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:
    "bg-transparent border-border text-foreground hover:border-primary hover:text-primary",
  ghost:
    "bg-transparent text-foreground hover:bg-muted/50 hover:text-foreground",
};

const sizeClasses = {
  default: "h-10",
  sm: "h-9 px-3",
  lg: "h-11 px-6 text-base",
  icon: "h-10 w-10 p-0",
};

export const Button = React.forwardRef(
  ({ asChild = false, className, variant = "default", size = "default", ...props }, ref) => {
    const Component = asChild ? "span" : "button";
    return (
      <Component
        ref={ref}
        className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
