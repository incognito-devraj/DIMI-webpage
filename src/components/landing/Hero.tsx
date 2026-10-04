import {
  Bell,
  CalendarDays,
  CheckCircle2,
  CirclePlay,
  Download,
  Wallet,
} from "lucide-react";
import greetingsBg from "@/assets/GreetingsBG.png";
import { PhoneFrame } from "./phone/PhoneFrame";
import { HomeScreen } from "./phone/screens";
import { cn } from "@/lib/utils";

const chips = [
  { label: "Plan",      icon: CalendarDays, cls: "text-rose" },
  { label: "To-Do's",   icon: CheckCircle2, cls: "text-leaf" },
  { label: "Reminders", icon: Bell,         cls: "text-gold" },
  { label: "Finance",   icon: Wallet,       cls: "text-sky"  },
  { label: "Learn",     icon: CirclePlay,   cls: "text-rose" },
];

const avatars = [12, 32, 47, 5, 26].map(
  (n) => `https://i.pravatar.cc/64?img=${n}`,
);

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* GreetingsBG — mobile: pinned to bottom of section, slides under phone */}
      <img
        src={greetingsBg}
        alt=""
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] object-contain sm:hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 65%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 65%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          opacity: 0.85,
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* ── Mobile / Tablet: single column ── */}
        {/* ── Desktop: two columns ── */}
        <div className="flex flex-col items-center gap-6 py-8 text-center
                        md:py-10
                        lg:flex-row lg:items-center lg:gap-12 lg:py-12 lg:text-left">

          {/* ── LEFT: copy ── */}
          <div className="flex w-full flex-col items-center gap-4 lg:flex-1 lg:items-start">

            <h1 className="text-3xl font-extrabold leading-[1.08] tracking-tight
                           sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              Your life.
              <br />
              <span className="text-primary">One place.</span>
              <br />
              Better every day.
            </h1>

            <p className="max-w-xs text-sm font-medium leading-relaxed text-muted-foreground sm:max-w-sm sm:text-base">
              Plan, track, manage and grow — all from a simple personal dashboard.
            </p>

            {/* chips — scrollable on very small phones */}
            <div className="flex items-center gap-3 sm:gap-5">
              {chips.map((c) => (
                <div key={c.label} className="flex flex-col items-center gap-1.5">
                  <span className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-sm ring-1 ring-border sm:h-11 sm:w-11",
                    c.cls,
                  )}>
                    <c.icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                  </span>
                  <span className="text-[9px] font-semibold sm:text-[10px]">{c.label}</span>
                </div>
              ))}
            </div>

            {/* download button */}
            <a
              href="https://github.com/incognito-devraj/DIMI/releases/latest/download/DIMI.apk"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary py-2 pl-2 pr-5
                         text-primary-foreground shadow-[0_14px_30px_-10px] shadow-primary/70
                         transition hover:-translate-y-0.5 sm:py-2.5 sm:pl-2.5 sm:pr-6"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15 sm:h-9 sm:w-9">
                <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold">Download DIMI</span>
                <span className="block text-[10px] opacity-75">Free · Android</span>
              </span>
            </a>

            {/* social proof */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img key={i} src={src} alt="" loading="lazy"
                    className="h-7 w-7 rounded-full border-2 border-background object-cover sm:h-8 sm:w-8"
                    width={32} height={32} />
                ))}
              </div>
              <p className="max-w-[190px] text-[10px] font-medium leading-snug text-muted-foreground sm:text-[11px]">
                Made for students, professionals and everyday improvers.
              </p>
            </div>
          </div>

          {/* ── RIGHT: phone + landscape ── */}
          <div className="relative flex w-full items-center justify-center lg:flex-1">

            {/* Landscape — tablet & desktop only, behind phone */}
            <img
              src={greetingsBg}
              alt=""
              aria-hidden
              className="absolute hidden w-[90%] max-w-none object-contain sm:block lg:w-[120%]"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 85%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 85%, transparent 100%)",
                WebkitMaskComposite: "source-in",
                opacity: 0.88,
              }}
            />

            {/* Phone */}
            <PhoneFrame className="relative z-10 w-[180px] rotate-[4deg] sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[280px]">
              <HomeScreen />
            </PhoneFrame>
          </div>

        </div>
      </div>
    </section>
  );
}
