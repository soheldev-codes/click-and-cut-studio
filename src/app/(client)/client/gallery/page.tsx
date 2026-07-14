"use client";

import { useEffect, useState } from "react";
import { getClientGalleries } from "@/services/gallery.service";
import ClientGalleryCard from "@/components/client/gallery/ClientGalleryCard";


type Gallery = {
  _id: string;
  title: string;
  clientName: string;
  clientEmail: string;
  eventType: string;
  eventDate: string;
  visibility: "private" | "public";
  description: string;
  coverImage: string;
  galleryImages: string[];
};

export default function ClientGalleryPage() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);

console.log(galleries)

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getClientGalleries();
        setGalleries(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="p-20 text-center">
        Loading...
      </div>
    );
  }

  if (galleries.length === 0) {
    return (
      <div className="p-20 text-center">
        No Gallery Found
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          My Galleries
        </h1>

        <p className="text-zinc-500">
          Welcome back. Here are your galleries.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleries.map((gallery) => (
          <ClientGalleryCard
            key={gallery._id}
            id={gallery._id}
            title={gallery.title}
            clientName={gallery.clientName}
            category={gallery.eventType}
            totalImages={gallery.galleryImages.length}
            coverImage={gallery.coverImage}
            eventDate={gallery.eventDate}
            status={gallery.visibility}
          />
        ))}
      </div>
    </div>
  );
}