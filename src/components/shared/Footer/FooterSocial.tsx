import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants/footer";

export default function FooterSocial() {
  return (
    <div className="mt-6 flex gap-3">
      {SOCIAL_LINKS.map(({ icon: Icon, href }, index) => (
        <Link
          key={index}
          href={href}
          className="
          flex h-11 w-11 items-center justify-center
          rounded-full
          border
          border-zinc-700
          transition

          hover:border-violet-500
          hover:bg-violet-600
          hover:text-white
        "
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
}