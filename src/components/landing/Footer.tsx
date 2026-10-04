import { Github, Heart, Instagram, Linkedin, Mail } from "lucide-react";
import finalLogo from "@/assets/FINAL LOGO.png";

const textLinks = [
  { label: "Privacy Policy", href: "#"                                          },
  { label: "Terms of Use",   href: "#"                                          },
  { label: "GitHub",         href: "https://github.com/incognito-devraj", ext: true },
];

const socials = [
  { icon: Github,    href: "https://github.com/incognito-devraj",       label: "GitHub"    },
  { icon: Instagram, href: "https://instagram.com/devraj.om",           label: "Instagram" },
  { icon: Linkedin,  href: "https://www.linkedin.com/in/devrajom/",     label: "LinkedIn"  },
  { icon: Mail,      href: "mailto:devrajmukherjee.om@gmail.com",       label: "Email"     },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">

        {/* Desktop / tablet: single row */}
        {/* Mobile: logo row + links row + icons row (all centred) */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">

          {/* Brand */}
          <a href="#" className="flex shrink-0 items-center gap-2">
            <img src={finalLogo} alt="DIMI logo" loading="lazy"
              className="h-8 w-8 object-contain" width={32} height={32} />
            <span className="text-sm font-extrabold tracking-tight">DIMI</span>
          </a>

          {/* Text links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {textLinks.map((l) => (
              <a key={l.label} href={l.href}
                target={l.ext ? "_blank" : undefined}
                rel={l.ext ? "noopener noreferrer" : undefined}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex shrink-0 items-center gap-2">
            {socials.map((s) => (
              <a key={s.label} href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-border transition hover:bg-accent">
                <s.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright + made with love */}
        <div className="mt-4 border-t border-border pt-4 text-center text-xs text-muted-foreground space-y-1">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 fill-rose text-rose" /> by Devraj Mukherjee
          </p>
          <p>© 2026 DIMI. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
