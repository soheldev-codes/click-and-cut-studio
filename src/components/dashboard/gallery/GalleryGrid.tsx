"use client";

import { useEffect, useState } from "react";

import GalleryCard from "./GalleryCard";
import { getGalleries } from "@/services/gallery.service";

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
  createdAt: string;
};

export default function GalleryGrid() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGalleries() {
      try {
        const data = await getGalleries();
        setGalleries(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadGalleries();
  }, []);

  function handleDelete(id: string) {
    setGalleries((prev) =>
      prev.filter((gallery) => gallery._id !== id)
    );
  }

  if (loading) {
    return (
      <div className="rounded-2xl border border-zinc-200 p-16 text-center">
        Loading galleries...
      </div>
    );
  }

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
          key={gallery._id}
          id={gallery._id}
          title={gallery.title}
          clientName={gallery.clientName}
          category={gallery.eventType}
          totalImages={gallery.galleryImages.length}
          coverImage={gallery.coverImage}
          eventDate={gallery.eventDate}
          status={gallery.visibility}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}