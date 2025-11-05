import React, { createContext, useContext, useMemo, useState } from "react";
import clsx from "clsx";
import { X } from "lucide-react";

const SidebarContext = createContext({ open: false, setOpen: () => {} });

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);
  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};

export const useSidebar = () => useContext(SidebarContext);

export const Sidebar = ({ className, children }) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <aside className={clsx("hidden md:flex md:w-72 md:flex-col", className)}>{children}</aside>

      <div
        className={clsx(
          "fixed inset-0 z-50 flex transform flex-col bg-[#0a0a0a]/95 backdrop-blur-xl transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full border border-[#2a2a2a] bg-[#1a1a1a]/80 p-2 text-[#f5f5f5]"
          onClick={() => setOpen(false)}
        >
          <X className="h-4 w-4" />
        </button>
        <div className={clsx("mt-12 flex-1 overflow-auto", className)}>{children}</div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export const SidebarTrigger = ({ className }) => {
  const { setOpen } = useSidebar();
  return (
    <button
      type="button"
      className={clsx(
        "inline-flex items-center justify-center rounded-lg border border-[#2a2a2a] bg-[#1a1a1a]/70 p-2 text-[#f5f5f5]",
        className
      )}
      onClick={() => setOpen((prev) => !prev)}
    >
      <span className="sr-only">Toggle menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <line x1="3" x2="21" y1="6" y2="6" />
        <line x1="3" x2="21" y1="12" y2="12" />
        <line x1="3" x2="21" y1="18" y2="18" />
      </svg>
    </button>
  );
};

export const SidebarHeader = ({ className, ...props }) => (
  <div className={clsx(className)} {...props} />
);

export const SidebarContent = ({ className, ...props }) => (
  <div className={clsx("flex-1 overflow-auto", className)} {...props} />
);

export const SidebarGroup = ({ className, ...props }) => (
  <div className={clsx("flex flex-col gap-4", className)} {...props} />
);

export const SidebarGroupContent = ({ className, ...props }) => (
  <div className={clsx("flex flex-col gap-2", className)} {...props} />
);

export const SidebarMenu = ({ className, ...props }) => (
  <nav className={clsx("flex flex-col gap-2", className)} {...props} />
);

export const SidebarMenuItem = ({ className, ...props }) => (
  <div className={clsx(className)} {...props} />
);

export const SidebarMenuButton = React.forwardRef(
  ({ asChild = false, className, children, onClick, ...props }, ref) => {
    const { setOpen } = useSidebar();
    const handleClick = (event) => {
      onClick?.(event);
      setOpen(false);
    };

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ref,
        className: clsx(
          "flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors duration-200",
          className,
          children.props.className
        ),
        onClick: (event) => {
          children.props.onClick?.(event);
          handleClick(event);
        },
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        type="button"
        className={clsx(
          "flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors duration-200",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

SidebarMenuButton.displayName = "SidebarMenuButton";
