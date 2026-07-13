"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { getGallery } from "@/services/gallery.service";

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

export default function GalleryDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [gallery, setGallery] = useState<Gallery | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGallery() {
      try {
        const { id } = await params;
        const data = await getGallery(id);
        setGallery(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, [params]);

  if (loading) {
    return (
      <div className="rounded-2xl border p-20 text-center">
        Loading gallery...
      </div>
    );
  }

  if (!gallery) {
    return (
      <div className="rounded-2xl border p-20 text-center">
        Gallery not found.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Cover */}
      <div className="relative aspect-[16/7] overflow-hidden rounded-3xl">
        <Image
          src={gallery.coverImage}
          alt={gallery.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-3xl font-bold">
          {gallery.title}
        </h1>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-zinc-500">
              Client Name
            </p>

            <h3 className="mt-1 font-semibold">
              {gallery.clientName}
            </h3>
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Client Email
            </p>

            <h3 className="mt-1 font-semibold">
              {gallery.clientEmail}
            </h3>
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Event Type
            </p>

            <h3 className="mt-1 font-semibold">
              {gallery.eventType}
            </h3>
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Event Date
            </p>

            <h3 className="mt-1 font-semibold">
              {gallery.eventDate}
            </h3>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-zinc-500">
            Description
          </p>

          <p className="mt-2 leading-7">
            {gallery.description}
          </p>
        </div>
      </div>

      {/* Gallery Images */}
      <div>
        <h2 className="mb-6 text-2xl font-bold">
          Gallery Photos
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gallery.galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt={`Photo ${index + 1}`}
                fill
                className="object-cover transition hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}