import Link from "next/link";

import Button from "@/components/ui/button";

import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center text-white">
      <span className="mb-4 rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-sm">
        📸 EST. 2019 • Trusted by 500+ Clients
      </span>

      <h1 className="font-heading text-4xl font-bold leading-tight md:text-6xl">
        Capture Every
        <span className="text-violet-400"> Beautiful Moment</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-zinc-300">
        Wedding, Engagement, Corporate Events, Portraits and
        Cinematic Videography with professional editing.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link href="/explore">
          <Button>Explore Portfolio</Button>
        </Link>

        <Link href="/contact">
          <Button variant="outline">
            Book a Session
          </Button>
        </Link>
      </div>

      <HeroStats />
    </div>
  );
}