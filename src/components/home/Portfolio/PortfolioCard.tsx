import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

type PortfolioCardProps = {
  title: string;
  category: string;
  image: string;
};

export default function PortfolioCard({
  title,
  category,
  image,
}: PortfolioCardProps) {
  return (
    <div className="group relative h-[420px] overflow-hidden rounded-3xl">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
        <div className="text-white">
          <span className="mb-2 inline-block rounded-full bg-violet-600 px-3 py-1 text-xs">
            {category}
          </span>

          <h3 className="text-2xl font-bold">{title}</h3>
        </div>

        <button
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full bg-white text-xl text-black
            transition
            group-hover:bg-violet-600
            group-hover:text-white
          "
        >
          <HiArrowUpRight />
        </button>
      </div>
    </div>
  );
}