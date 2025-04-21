import { Intro } from "./_components/intro";
import ThemeToggle from "./_components/ThemeToggle";

export default function Home() {
  return (
    <div className="">
      <Intro />
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-4 rounded">Hello Dark Mode</div>
      <ThemeToggle />
    </div>
  );
}
