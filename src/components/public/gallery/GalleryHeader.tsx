import { HiOutlinePhoto } from "react-icons/hi2";

export default function GalleryHeader() {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-violet-700 via-fuchsia-600 to-purple-700 px-8 py-20 text-center text-white shadow-xl">
      {/* Background Blur */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur">
          <HiOutlinePhoto className="text-3xl" />
        </div>

        <h1 className="text-5xl font-bold">
          Our Gallery Collection
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
          Every photograph tells a story. Explore our weddings,
          birthdays, corporate events and unforgettable memories.
        </p>
      </div>
    </section>
  );
}