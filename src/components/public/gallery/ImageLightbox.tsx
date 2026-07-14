"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineXMark,
} from "react-icons/hi2";

type ImageLightboxProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: ImageLightboxProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
      >
        <HiOutlineXMark className="text-3xl" />
      </button>

      {/* Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
      >
        <HiOutlineChevronLeft className="text-4xl" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
      >
        <HiOutlineChevronRight className="text-4xl" />
      </button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[90vh] w-full max-w-6xl"
      >
        <Image
          src={images[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          fill
          className="object-contain"
        />
      </div>

      {/* Counter */}
      <div className="absolute bottom-8 rounded-full bg-black/60 px-5 py-2 text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}