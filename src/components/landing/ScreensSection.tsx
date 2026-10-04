import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { PhoneFrame } from "./phone/PhoneFrame";
import {
  FinanceScreen,
  HomeScreen,
  PlannerScreen,
  PlaylistTrackerScreen,
  RemindersScreen,
  TodoScreen,
} from "./phone/screens";
import { cn } from "@/lib/utils";

const screens: { label: string; node: ReactNode }[] = [
  { label: "Planner",          node: <PlannerScreen />         },
  { label: "Finance",          node: <FinanceScreen />         },
  { label: "Home",             node: <HomeScreen />            },
  { label: "To-Do's",          node: <TodoScreen />            },
  { label: "Reminders",        node: <RemindersScreen />       },
  { label: "Playlist Tracker", node: <PlaylistTrackerScreen /> },
];

export function ScreensSection() {
  const [active, setActive] = useState(2);
  const prev = () => setActive((a) => (a + screens.length - 1) % screens.length);
  const next = () => setActive((a) => (a + 1) % screens.length);

  return (
    <section id="screens" className="scroll-mt-16 pb-4 pt-8 sm:pb-6 sm:pt-10">

      {/* Header */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Meet <span className="text-primary">DIMI</span>
          </h2>
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={prev} aria-label="Previous screen"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-card ring-1 ring-border transition hover:bg-accent">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-sm font-bold tabular-nums">{active + 1} / {screens.length}</span>
            <button onClick={next} aria-label="Next screen"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-card ring-1 ring-border transition hover:bg-accent">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile / Tablet: compact fan carousel ── */}
      <div className="lg:hidden">
        <div className="relative mt-10 h-[420px] sm:h-[500px]" style={{ overflow: "visible" }}>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px]
                          -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl
                          sm:h-[380px] sm:w-[380px]" />
          <div className="relative h-full">
            {screens.map((s, i) => {
              let d = i - active;
              if (d > 2) d -= screens.length;
              if (d < -2) d += screens.length;
              const centered = d === 0;
              // hide phones beyond ±2 slots (only 5 visible at a time)
              const hidden = Math.abs(d) > 2;
              return (
                <div
                  key={s.label}
                  onClick={() => !hidden && setActive(i)}
                  className={cn(
                    "absolute left-1/2 flex flex-col items-center transition-all duration-500 ease-out",
                    !centered && !hidden && "cursor-pointer",
                    hidden && "pointer-events-none",
                  )}
                  style={{
                    top: 10,
                    width: "140px",
                    opacity: hidden ? 0 : 1,
                    transform: `translate(-50%, 0)
                      translateX(calc(${d} * clamp(4.5rem, 10vw, 8rem)))
                      translateY(${Math.abs(d) * 12}px)
                      rotate(${d * 7}deg)
                      scale(${centered ? 1.15 : 0.9})`,
                    zIndex: hidden ? 0 : 20 - Math.abs(d),
                  }}
                >
                  <PhoneFrame className="w-full">{s.node}</PhoneFrame>
                  <span className={cn(
                    "mt-3 rounded-full px-3 py-0.5 text-[10px] font-bold text-background shadow-lg transition-colors",
                    centered ? "bg-ink" : "bg-ink/80",
                  )}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Desktop: full fan carousel ── */}
      <div className="relative mt-10 hidden h-[600px] lg:block" style={{ overflow: "visible" }}>
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[880px]
                        -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative h-full">
          {screens.map((s, i) => {
            let d = i - active;
            if (d > 2) d -= screens.length;
            if (d < -2) d += screens.length;
            const centered = d === 0;
            // hide phones beyond ±2 slots (only 5 visible at a time)
            const hidden = Math.abs(d) > 2;
            return (
              <div
                key={s.label}
                onClick={() => !hidden && setActive(i)}
                className={cn(
                  "absolute left-1/2 flex w-[190px] flex-col items-center transition-all duration-500 ease-out",
                  !centered && !hidden && "cursor-pointer",
                  hidden && "pointer-events-none",
                )}
                style={{
                  top: 30,
                  opacity: hidden ? 0 : 1,
                  transform: `translate(-50%, 0)
                    translateX(calc(${d} * clamp(6rem, 13vw, 12rem)))
                    translateY(${Math.abs(d) * 14}px)
                    rotate(${d * 7}deg)
                    scale(${centered ? 1.18 : 0.96})`,
                  zIndex: hidden ? 0 : 20 - Math.abs(d),
                }}
              >
                <PhoneFrame className="w-full">{s.node}</PhoneFrame>
                <span className={cn(
                  "mt-4 rounded-full px-3.5 py-1 text-xs font-bold text-background shadow-lg transition-colors",
                  centered ? "bg-ink" : "bg-ink/85",
                )}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
