import GalleryCard from "./GalleryCard";
import { galleries } from "@/constants/gallery";

export default function GalleryGrid() {
  if (galleries.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 p-16 text-center">
        No galleries found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {galleries.map((gallery) => (
        <GalleryCard
          key={gallery.id}
          {...gallery}
        />
      ))}
    </div>
  );
}