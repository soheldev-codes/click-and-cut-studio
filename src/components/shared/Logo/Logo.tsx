import Link from "next/link";
import { HiOutlineCamera } from "react-icons/hi2";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-md">
        <HiOutlineCamera className="text-2xl" />
      </div>

      <div className="leading-tight">
        <h1 className="font-heading text-xl font-bold">
          Click & Cut
        </h1>

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
          Studio
        </p>
      </div>
    </Link>
  );
}