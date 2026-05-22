import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border text-sm font-medium tracking-[0.22em] uppercase transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-[rgba(255,244,230,0.18)] bg-[linear-gradient(135deg,rgba(243,229,205,0.92),rgba(196,142,102,0.95))] px-6 py-3 text-[#17110d] shadow-[0_18px_70px_rgba(121,84,55,0.28)] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_100px_rgba(121,84,55,0.4)]",
        secondary:
          "border-[color:rgba(79,58,41,0.18)] bg-[rgba(255,249,242,0.6)] px-6 py-3 text-[var(--foreground)] backdrop-blur-sm hover:-translate-y-0.5 hover:border-[var(--accent-strong)] hover:bg-[rgba(255,255,255,0.88)]",
        ghost:
          "border-[color:rgba(255,255,255,0.18)] bg-white/8 px-5 py-3 text-white hover:-translate-y-0.5 hover:bg-white/14",
      },
      size: {
        default: "",
        lg: "px-8 py-4 text-[0.78rem]",
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
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export { Button, buttonVariants };
