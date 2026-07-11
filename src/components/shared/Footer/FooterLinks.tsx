import Link from "next/link";

type Props = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export default function FooterLinks({
  title,
  links,
}: Props) {
  return (
    <div>
      <h3 className="mb-6 font-heading text-xl font-semibold">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-zinc-400 transition hover:text-violet-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}