import GalleryGrid from "@/components/public/gallery/GalleryGrid";
import GalleryHeader from "@/components/public/gallery/GalleryHeader";
import GalleryToolbar from "@/components/public/gallery/GalleryToolbar";

export default function PublicGalleryPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
      <GalleryHeader />

      

      <GalleryGrid />
    </main>
  );
}