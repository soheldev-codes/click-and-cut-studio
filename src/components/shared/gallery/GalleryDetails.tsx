"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/public/gallery/ImageLightbox";
import { getClientGallery } from "@/services/gallery.service";

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

export default function ClientGalleryDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);

    const [gallery, setGallery] = useState<Gallery | null>(null);
    const [selectedIndex, setSelectedIndex] =
        useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadGallery() {
            try {
                const data = await getClientGallery(id);
                setGallery(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadGallery();
    }, [id]);

    if (loading) {
        return (
            <div className="mx-auto max-w-7xl p-20 text-center">
                Loading Gallery...
            </div>
        );
    }

    if (!gallery) {
        return (
            <div className="mx-auto max-w-7xl p-20 text-center">
                Gallery not found.
            </div>
        );
    }

    return (
        <section className="mx-auto max-w-7xl space-y-10 px-5 py-10">

            {/* Hero */}

            <div className="relative aspect-[16/7] overflow-hidden rounded-3xl">

                <Image
                    src={gallery.coverImage}
                    alt={gallery.title}
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-10 left-10 text-white">

                    <span className="rounded-full bg-violet-600 px-4 py-2 text-sm">
                        {gallery.eventType}
                    </span>

                    <h1 className="mt-5 text-5xl font-bold">
                        {gallery.title}
                    </h1>

                    <p className="mt-3 text-lg">
                        {gallery.clientName}
                    </p>

                </div>

            </div>

            {/* Info */}

            <div className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-8 md:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-900">

                <div>
                    <p className="text-sm text-zinc-500">
                        Client
                    </p>

                    <h3 className="mt-2 text-lg font-semibold">
                        {gallery.clientName}
                    </h3>
                </div>

                <div>
                    <p className="text-sm text-zinc-500">
                        Event Date
                    </p>

                    <h3 className="mt-2 text-lg font-semibold">
                        {gallery.eventDate}
                    </h3>
                </div>

                <div>
                    <p className="text-sm text-zinc-500">
                        Total Photos
                    </p>

                    <h3 className="mt-2 text-lg font-semibold">
                        {gallery.galleryImages.length}
                    </h3>
                </div>

            </div>

            {/* Description */}

            <div className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">

                <h2 className="mb-4 text-2xl font-bold">
                    About This Event
                </h2>

                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                    {gallery.description}
                </p>

            </div>

            {/* Photos */}

            <div>

                <h2 className="mb-8 text-3xl font-bold">
                    Gallery Photos
                </h2>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {gallery.galleryImages.map((image, index) => (

                        <div
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
                        >

                            <Image
                                src={image}
                                alt={gallery.title}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-110"
                            />

                        </div>

                    ))}

                </div>

            </div>

            {selectedIndex !== null && (
                <ImageLightbox
                    images={gallery.galleryImages}
                    currentIndex={selectedIndex}
                    onClose={() => setSelectedIndex(null)}
                    onPrev={() =>
                        setSelectedIndex((prev) =>
                            prev === 0
                                ? gallery.galleryImages.length - 1
                                : (prev as number) - 1
                        )
                    }
                    onNext={() =>
                        setSelectedIndex((prev) =>
                            prev === gallery.galleryImages.length - 1
                                ? 0
                                : (prev as number) + 1
                        )
                    }
                />
            )}

        </section>
    );
}