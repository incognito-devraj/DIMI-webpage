import {
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Wallet,
} from "lucide-react";
import desk from "@/assets/desk-scene.jpg";

const steps = [
  { icon: CalendarDays, title: "Plan your day",    sub: "See what's next"       },
  { icon: CheckCircle2, title: "Get things done",  sub: "Keep your focus"       },
  { icon: Wallet,       title: "Track your money", sub: "Know where it goes"    },
  { icon: GraduationCap,title: "Keep learning",    sub: "Make progress, everyday"},
];

export function DaySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="relative overflow-hidden rounded-3xl bg-ink text-background">

        {/* Background image */}
        <img
          src={desk}
          alt="A phone running DIMI on a desk"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30 lg:opacity-100
                     lg:inset-y-0 lg:right-0 lg:left-auto lg:w-[60%]
                     lg:[mask-image:linear-gradient(to_left,black_55%,transparent_100%)]"
          width={1200} height={960}
        />
        <div className="absolute inset-0 bg-ink/60 lg:bg-ink/0" />

        {/* Content */}
        <div className="relative grid gap-8 p-6
                        sm:gap-10 sm:p-10
                        lg:grid-cols-2 lg:gap-6 lg:p-14">

          {/* Left: heading */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
              From plans
              <br />
              to <span className="text-gold">progress.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-background/70 sm:mt-4">
              Your day, organized — from morning plans to nighttime wins.
            </p>
          </div>

          {/* Right: steps */}
          <ol className="relative grid grid-cols-2 gap-4 sm:grid-cols-2 lg:block lg:space-y-5 lg:pl-10">
            <div className="absolute bottom-8 left-3 top-8 hidden w-px border-l-2 border-dashed border-background/25 lg:block" />
            {steps.map((s) => (
              <li key={s.title} className="relative flex items-center gap-3 lg:gap-4">
                <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-gold ring-1 ring-primary/50 lg:h-11 lg:w-11">
                  <s.icon className="h-4 w-4 lg:h-5 lg:w-5" strokeWidth={1.9} />
                </span>
                <div>
                  <p className="text-sm font-bold lg:text-base">{s.title}</p>
                  <p className="text-xs text-background/70 lg:text-sm">{s.sub}</p>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
}
