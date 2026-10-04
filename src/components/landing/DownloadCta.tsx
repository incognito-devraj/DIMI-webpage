import { Download, Github, Sparkle } from "lucide-react";
import appIcon from "@/assets/dimi-app-icon.png";

export function DownloadCta() {
  return (
    <section id="download" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-16 sm:px-6">
      <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-accent via-secondary to-background p-8 ring-1 ring-border sm:p-14">
        <Sparkle className="absolute right-10 top-8 h-6 w-6 text-gold" fill="currentColor" />
        <Sparkle className="absolute bottom-10 right-1/3 h-4 w-4 text-primary" fill="currentColor" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr_auto]">
          <img
            src={appIcon}
            alt="DIMI app icon"
            loading="lazy"
            className="h-28 w-28 rounded-[2rem] shadow-xl shadow-primary/20 sm:h-36 sm:w-36"
            width={144}
            height={144}
          />
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary ring-1 ring-border">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Free · Android
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Ready to make
              <br />
              every day count?
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Download DIMI and bring your plans, tasks, reminders and finances
              together.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/incognito-devraj/DIMI/releases/latest/download/DIMI.apk"
              download
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary py-2.5 pl-3 pr-6 text-primary-foreground shadow-[0_14px_30px_-10px] shadow-primary/70 transition hover:-translate-y-0.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15">
                <Download className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold">Download DIMI</span>
                <span className="block text-[11px] opacity-75">
                  Free · Android v1.0.3
                </span>
              </span>
            </a>
            <a
              href="https://github.com/incognito-devraj/DIMI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-card px-6 py-3.5 text-sm font-bold ring-1 ring-border transition hover:bg-accent"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
