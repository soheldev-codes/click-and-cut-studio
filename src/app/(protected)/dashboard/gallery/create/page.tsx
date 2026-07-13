import GalleryForm from "@/components/dashboard/gallery/create/GalleryForm";



export default function CreateGalleryPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Create Gallery
        </h1>

        <p className="mt-2 text-zinc-500">
          Create a new client gallery and upload memories.
        </p>
      </div>

      <GalleryForm/>
    </div>
  );
}