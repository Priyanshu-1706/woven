export default function HeroSection() {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-dark-amethyst">
      <video
        src="/video/clideo_editor_1f83a220ee544e8c86259a575d0355de.mp4"
        poster="/images/hero-main.jpg"
        preload="auto"
        autoPlay
        muted
        playsInline
        className="block h-full w-full object-cover object-center"
        aria-label="Showcase video of a luxury woven carpet."
      />
    </section>
  );
}
