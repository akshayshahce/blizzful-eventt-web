import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "navy" | "ivory";
  withText?: boolean;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative h-14 w-36 sm:h-16 sm:w-40 shrink-0">
        <Image
          src="/images/logo.png"
          alt="Blizzful Pink Eventt"
          fill
          sizes="160px"
          className="object-contain object-left"
          priority
        />
      </div>
    </div>
  );
}

/** @deprecated Use Logo instead */
export function LogoMark({ className }: { className?: string; variant?: "navy" | "ivory" }) {
  return (
    <div className={cn("relative h-full w-full", className)}>
      <Image
        src="/images/logo.png"
        alt="Blizzful Pink Eventt"
        fill
        sizes="64px"
        className="object-contain"
        priority
      />
    </div>
  );
}
