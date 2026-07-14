"use client";

import { HiOutlineArrowDownTray } from "react-icons/hi2";

type DownloadButtonProps = {
  image: string;
  fileName?: string;
};

export default function DownloadButton({
  image,
  fileName = "photo",
}: DownloadButtonProps) {
  async function handleDownload() {
    try {
      const response = await fetch(image);

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Download failed.");
    }
  }

  return (
    <button
      onClick={handleDownload}
      className="absolute right-3 top-3 rounded-xl bg-black/60 p-2 text-white opacity-0 transition group-hover:opacity-100"
    >
      <HiOutlineArrowDownTray className="text-xl" />
    </button>
  );
}