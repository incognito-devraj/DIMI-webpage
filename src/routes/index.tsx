import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ScreensSection } from "@/components/landing/ScreensSection";
import { DaySection } from "@/components/landing/DaySection";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DIMI — Your life. One place. Better every day." },
      {
        name: "description",
        content:
          "DIMI is a free Android app to plan your day, manage tasks and reminders, track your money and keep learning — all from one simple personal dashboard.",
      },
      {
        property: "og:title",
        content: "DIMI — Your life. One place. Better every day.",
      },
      {
        property: "og:description",
        content:
          "Plan, track, manage and grow — all from a simple personal dashboard. Free on Android.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat:wght@600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Navbar />
      {/* Spacer so fixed navbar doesn't overlap content */}
      <div className="h-16" />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <ScreensSection />
        <DaySection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
