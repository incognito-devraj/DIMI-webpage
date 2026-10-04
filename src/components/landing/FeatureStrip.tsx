import {
  Bell,
  CalendarDays,
  CheckCircle2,
  CirclePlay,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    label: "Plan",
    sub: "Organize your day",
    icon: CalendarDays,
    cls: "bg-rose/10 text-rose",
  },
  {
    label: "Focus",
    sub: "Get things done",
    icon: CheckCircle2,
    cls: "bg-leaf/10 text-leaf",
  },
  {
    label: "Remember",
    sub: "Never miss what matters",
    icon: Bell,
    cls: "bg-gold/20 text-gold",
  },
  {
    label: "Money",
    sub: "Know where it goes",
    icon: Wallet,
    cls: "bg-sky/10 text-sky",
  },
  {
    label: "Learn",
    sub: "Track your progress",
    icon: CirclePlay,
    cls: "bg-rose/10 text-rose",
  },
];

export function FeatureStrip() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <div className="rounded-4xl bg-card px-6 py-8 shadow-sm ring-1 ring-border sm:p-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((i) => (
            <div key={i.label} className="flex flex-col items-center gap-2 text-center">
              <span
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-full",
                  i.cls,
                )}
              >
                <i.icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <p className="text-sm font-bold">{i.label}</p>
              <p className="text-xs leading-snug text-muted-foreground">
                {i.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
