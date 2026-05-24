import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
};

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        size === "default" && "max-w-[100rem]",
        size === "wide" && "max-w-[120rem] px-4 sm:px-6 lg:px-8",
        size === "narrow" && "max-w-[72rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}
