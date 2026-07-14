import GalleryForm from "@/components/dashboard/gallery/create/GalleryForm";
import { getDb } from "@/lib/db";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditGalleryPage({
  params,
}: PageProps) {
  const { id } = await params;

  const db = await getDb();

  const gallery = await db.collection("galleries").findOne({
    _id: new ObjectId(id),
  });

  if (!gallery) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Edit Gallery
        </h1>

        <p className="text-zinc-500">
          Update gallery information.
        </p>
      </div>

      <GalleryForm
        mode="edit"
        galleryId={id}
        initialData={{
          title: gallery.title,
          clientName: gallery.clientName,
          clientEmail: gallery.clientEmail,
          eventType: gallery.eventType,
          eventDate: gallery.eventDate,
          visibility: gallery.visibility,
          description: gallery.description,
          coverImage: gallery.coverImage,
          galleryImages: gallery.galleryImages,
        }}
      />
    </div>
  );
}