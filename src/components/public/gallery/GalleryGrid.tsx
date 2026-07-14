"use client";

import { useEffect, useState } from "react";

import GalleryCard from "./GalleryCard";
import { getPublicGalleries } from "@/services/gallery.service";
import GalleryToolbar from "./GalleryToolbar";

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

  const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");

  useEffect(() => {
    async function loadGalleries() {
      try {
        const data = await getPublicGalleries();
        setGalleries(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadGalleries();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border p-16 text-center">
        Loading galleries...
      </div>
    );
  }

  if (galleries.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed p-16 text-center">
        No public galleries found.
      </div>
    );
  }


  const filteredGalleries = galleries.filter((gallery) => {
  const matchesSearch =
    gallery.title
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    gallery.clientName
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchesCategory =
    category === "All" ||
    gallery.eventType === category;

  return matchesSearch && matchesCategory;
});




  return (
    <> 
     <GalleryToolbar
      search={search}
      category={category}
      onSearchChange={setSearch}
      onCategoryChange={setCategory}
    />
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {filteredGalleries.map((gallery) => (
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
        />
      ))}
    </div>
    </>
  );
}