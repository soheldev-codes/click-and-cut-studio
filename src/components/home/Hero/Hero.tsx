import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      className="relative flex h-[70vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <HeroContent />
    </section>
  );
}