import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const quotes = [
  { text: "Finally a planner that doesn't feel overwhelming.", name: "Student",              img: 32 },
  { text: "Finance tracking is surprisingly simple.",           name: "Early User",           img: 47 },
  { text: "The home dashboard is so clean. Love it!",          name: "Student",              img: 12 },
  { text: "Reminders actually get me to follow through.",      name: "Working professional", img: 5  },
  { text: "One app instead of five. My phone thanks me.",      name: "Student",              img: 26 },
  { text: "Learning streaks keep me coming back daily.",       name: "Freelancer",           img: 44 },
];

function ReviewCard({ q }: { q: typeof quotes[number] }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl bg-card p-5 ring-1 ring-border sm:rounded-3xl sm:p-6 lg:p-7">
      <img src={`https://i.pravatar.cc/96?img=${q.img}`} alt="" loading="lazy"
        className="h-10 w-10 rounded-full object-cover" width={40} height={40} />
      <blockquote className="text-base font-bold leading-snug sm:text-lg">"{q.text}"</blockquote>
      <figcaption className="mt-auto text-xs font-semibold text-muted-foreground">{q.name}</figcaption>
    </div>
  );
}

// ── Desktop: static 3-column grid, no carousel ──
function DesktopReviews() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-4">
      {quotes.map((q) => (
        <figure key={q.text}>
          <ReviewCard q={q} />
        </figure>
      ))}
    </div>
  );
}

// ── Mobile & Tablet: real touch-swipe carousel ──
function SwipeCarousel({ perView }: { perView: 1 | 2 }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const maxIndex = quotes.length - perView;

  const goTo = (i: number) => setIndex(Math.max(0, Math.min(maxIndex, i)));

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? index + 1 : index - 1);
  };

  const pct = 100 / perView;

  return (
    <div className="mt-8">
      <div className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-400 ease-out"
          style={{ transform: `translateX(-${index * pct}%)` }}
        >
          {quotes.map((q) => (
            <figure key={q.text}
              className="shrink-0 px-2"
              style={{ width: `${pct}%` }}>
              <ReviewCard q={q} />
            </figure>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="mt-5 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Review ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all",
              i === index ? "w-6 bg-primary" : "w-2 bg-primary/25",
            )} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="feedback" className="scroll-mt-16 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            What <span className="text-primary">people</span> say
          </h2>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {[32, 47, 12, 5].map((n) => (
                <img key={n} src={`https://i.pravatar.cc/64?img=${n}`} alt="" loading="lazy"
                  className="h-8 w-8 rounded-full border-2 border-background object-cover"
                  width={32} height={32} />
              ))}
            </div>
            <p className="text-xs font-semibold text-muted-foreground">Early users · Real feedback</p>
          </div>
        </div>

        {/* Desktop: static grid */}
        <div className="hidden lg:block">
          <DesktopReviews />
        </div>

        {/* Tablet: swipe 2 at a time */}
        <div className="hidden sm:block lg:hidden">
          <SwipeCarousel perView={2} />
        </div>

        {/* Mobile: swipe 1 at a time */}
        <div className="sm:hidden">
          <SwipeCarousel perView={1} />
        </div>

      </div>
    </section>
  );
}
