import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="rounded-[2.5rem] bg-ink shadow-2xl shadow-ink/40">
        <div className="rounded-[2.35rem] bg-ink px-[7px] py-[9px]">
          <div className="relative aspect-[9/18.5] overflow-hidden rounded-[1.9rem] bg-background">
            <div className="absolute left-1/2 top-2 z-20 h-[13px] w-[60px] -translate-x-1/2 rounded-full bg-ink" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
