import homescreenImg      from "@/assets/mobileScreens/home.png";
import plannerImg         from "@/assets/mobileScreens/planner.png";
import financeImg         from "@/assets/mobileScreens/finance.png";
import todosImg           from "@/assets/mobileScreens/to-Dos.png";
import remindersImg       from "@/assets/mobileScreens/reminders.png";
import playlistTrackerImg from "@/assets/mobileScreens/playlist-tracker.jpeg";

function ScreenImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover object-top"
      draggable={false}
    />
  );
}

export function HomeScreen() {
  return <ScreenImage src={homescreenImg} alt="DIMI Home screen" />;
}

export function PlannerScreen() {
  return <ScreenImage src={plannerImg} alt="DIMI Planner screen" />;
}

export function FinanceScreen() {
  return <ScreenImage src={financeImg} alt="DIMI Finance screen" />;
}

export function TodoScreen() {
  return <ScreenImage src={todosImg} alt="DIMI To-Do's screen" />;
}

export function RemindersScreen() {
  return <ScreenImage src={remindersImg} alt="DIMI Reminders screen" />;
}

export function PlaylistTrackerScreen() {
  return <ScreenImage src={playlistTrackerImg} alt="DIMI Playlist Tracker screen" />;
}
