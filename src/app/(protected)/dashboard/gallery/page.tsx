import GalleryHeader from "@/components/dashboard/gallery/GalleryHeader";
import GalleryToolbar from "@/components/dashboard/gallery/GalleryToolbar";
import GalleryGrid from "@/components/dashboard/gallery/GalleryGrid";
export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <GalleryHeader />

      <GalleryToolbar />
      <GalleryGrid />
    </div>
  );
}