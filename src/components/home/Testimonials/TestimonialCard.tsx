import Image from "next/image";
import { FaStar } from "react-icons/fa";

type Props = {
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
};

export default function TestimonialCard({
  name,
  role,
  image,
  review,
  rating,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-6 flex">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar
            key={i}
            className="text-yellow-400"
          />
        ))}
      </div>

      <p className="mb-8 leading-8 text-zinc-600 dark:text-zinc-400">
        "{review}"
      </p>

      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full"
        />

        <div>
          <h4 className="font-semibold text-zinc-900 dark:text-white">
            {name}
          </h4>

          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}