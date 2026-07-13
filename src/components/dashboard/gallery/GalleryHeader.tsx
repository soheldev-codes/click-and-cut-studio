import Button from "@/components/ui/button";
import Link from "next/link";
import { HiOutlineCloudArrowUp } from "react-icons/hi2";

export default function GalleryHeader() {
    return (
        <div className="flex flex-col gap-5 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:flex-row md:items-center md:justify-between">
            <div>
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
                    Gallery Management
                </h1>

                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                    Manage all your client galleries from one place.
                </p>
            </div>





            <Link href="/dashboard/gallery/create">
                <Button className="gap-2">
                    <HiOutlineCloudArrowUp className="text-xl" />
                    Upload Gallery
                </Button>
            </Link>
        </div>
    );
}