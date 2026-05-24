"use client";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  reverse?: boolean;
  speed?: number;
};

export function Marquee({
  items,
  className,
  itemClassName,
  reverse = false,
  speed = 42,
}: MarqueeProps) {
  const loop = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="flex w-max items-center marquee-track"
        style={{
          animationDirection: reverse ? "reverse" : "normal",
          animationDuration: `${speed}s`,
        }}
      >
        {loop.map((item, index) => (
          <div
            key={index}
            className={cn("flex items-center px-10", itemClassName)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
