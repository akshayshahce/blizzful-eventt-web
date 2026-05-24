import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full border text-[0.7rem] font-medium uppercase tracking-[0.32em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-[var(--navy)] bg-[var(--navy)] px-7 py-4 text-[var(--ivory)] hover:bg-[var(--navy-deep)]",
        outline:
          "border-[var(--navy)]/30 bg-transparent px-7 py-4 text-[var(--navy)] hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-[var(--ivory)]",
        ghost:
          "border-[var(--ivory)]/30 bg-transparent px-7 py-4 text-[var(--ivory)] hover:border-[var(--sky)] hover:text-[var(--sky)]",
        wisteria:
          "border-[var(--wisteria-deep)] bg-[var(--wisteria-deep)] px-7 py-4 text-[var(--ivory)] hover:bg-[var(--navy)]",
      },
      size: {
        default: "",
        sm: "px-5 py-3 text-[0.64rem]",
        lg: "px-9 py-5 text-[0.74rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </button>
  ),
);

Button.displayName = "Button";

export { Button, buttonVariants };
