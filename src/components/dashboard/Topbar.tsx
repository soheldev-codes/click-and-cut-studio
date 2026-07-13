"use client";

import { usePathname } from "next/navigation";
import { HiOutlineBars3, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import ThemeToggle from "@/components/shared/Navbar/ThemeToggle";
import UserMenu from "@/components/shared/Navbar/UserMenu";

type TopbarProps = {
  onMenuClick: () => void;
};

export default function Topbar({
  onMenuClick,
}: TopbarProps) {
  const pathname = usePathname();

  const title =
    pathname === "/dashboard"
      ? "Dashboard"
      : pathname
          .split("/")
          .pop()
          ?.replace("-", " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-zinc-200 bg-white/80 px-5 lg:px-8 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/80">

<button
    onClick={onMenuClick}
    className="rounded-lg p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800 lg:hidden"
  >
    <HiOutlineBars3 className="text-2xl" />
  </button>
  {/* Left */}
  <div>

   
    <h1 className="text-2xl font-bold">{title}</h1>

    <p className="text-sm text-zinc-500">
      Welcome back 👋
    </p>
  </div>

  {/* Right */}
  <div className="flex items-center gap-3">
    <div className="hidden items-center rounded-xl border border-zinc-200 bg-white px-3 lg:flex dark:border-zinc-700 dark:bg-zinc-900">
      <HiOutlineMagnifyingGlass className="text-zinc-400" />

      <input
        type="text"
        placeholder="Search..."
        className="h-11 w-56 bg-transparent px-3 text-sm outline-none"
      />
    </div>

    

    <ThemeToggle />

    <UserMenu />
  </div>

</header>
  );
}