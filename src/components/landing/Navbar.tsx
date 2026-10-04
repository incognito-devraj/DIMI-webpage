import { Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import finalLogo from "@/assets/FINAL LOGO.png";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home",     href: "#"         },
  { label: "Features", href: "#screens"  },
  { label: "Reviews",  href: "#feedback" },
];

const CREAM = "#f5f0e8"; // --background
const INK   = "#1c1a17"; // --ink

export function Navbar() {
  const [active, setActive]       = useState("Home");
  const [pill,   setPill]         = useState({ left: 0, width: 0 });
  const navRef   = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const rafRef   = useRef<number | null>(null);

  // Always measure in a rAF so layout is complete
  const updatePill = (label: string) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const idx = links.findIndex((l) => l.label === label);
      const el  = linkRefs.current[idx];
      const nav = navRef.current;
      if (!el || !nav) return;
      const nr = nav.getBoundingClientRect();
      const er = el.getBoundingClientRect();
      setPill({ left: er.left - nr.left, width: er.width });
    });
  };

  // Init pill on mount
  useEffect(() => {
    updatePill("Home");
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll spy — sections ordered bottom to top so first match wins
  useEffect(() => {
    const sections = [
      { id: "feedback", label: "Reviews"  },
      { id: "screens",  label: "Features" },
    ];

    const handler = () => {
      const scrollY    = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight;
      const winHeight  = window.innerHeight;
      let current      = "Home";

      // If within 50px of page bottom, force Reviews active
      if (scrollY + winHeight >= docHeight - 50) {
        current = "Reviews";
      } else {
        for (const s of sections) {
          const el = document.getElementById(s.id);
          if (el && scrollY >= el.offsetTop - 150) {
            current = s.label;
            break;
          }
        }
      }

      if (current !== active) {
        setActive(current);
        updatePill(current);
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const handleClick = (label: string) => {
    setActive(label);
    updatePill(label);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <a href="#" className="flex shrink-0 flex-col items-center sm:flex-row sm:gap-2">
          <img
            src={finalLogo}
            alt="DIMI logo"
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
            width={48} height={48}
          />
          <span className="text-[10px] font-extrabold tracking-tight text-foreground sm:hidden">DIMI</span>
          <span className="hidden text-lg font-extrabold tracking-tight sm:inline">DIMI</span>
        </a>

        {/* Pill nav — centred */}
        <nav className="absolute left-1/2 -translate-x-1/2">
          <div
            ref={navRef}
            className="relative flex items-center rounded-full p-1 shadow-md ring-1 ring-border/60"
            style={{ backgroundColor: CREAM }}
          >
            {/* Sliding pill indicator */}
            <span
              aria-hidden
              className="pointer-events-none absolute top-1 rounded-full shadow-sm"
              style={{
                left:            pill.left,
                width:           pill.width,
                height:          "calc(100% - 8px)",
                backgroundColor: INK,
                transition:      "left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                ref={(el) => { linkRefs.current[i] = el; }}
                onClick={() => handleClick(l.label)}
                className={cn(
                  "relative z-10 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-150 sm:px-4 sm:py-2 sm:text-sm",
                  active === l.label ? "" : "text-muted-foreground hover:text-foreground",
                )}
                style={active === l.label ? { color: CREAM } : {}}
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Download CTA */}
        <a
          href="https://github.com/incognito-devraj/DIMI/releases/latest/download/DIMI.apk"
          download
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-3 py-2
                     text-sm font-bold text-primary-foreground shadow-[0_8px_20px_-8px]
                     shadow-primary/60 transition-all duration-200 hover:-translate-y-0.5 sm:px-4"
        >
          <Download className="h-4 w-4 shrink-0" />
          <span className="hidden sm:inline">Download DIMI</span>
        </a>

      </div>
    </header>
  );
}
