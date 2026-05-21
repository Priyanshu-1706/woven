export default function HeroSection() {
  return (
    <section className="section-wrap min-h-screen pt-32 pb-16 sm:pt-36 lg:pb-24">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <p className="section-kicker" data-animate="hero">
            Luxury carpets and rugs
          </p>
          <div className="space-y-5">
            <h1
              className="font-display text-5xl leading-[0.9] text-dark-amethyst sm:text-7xl lg:text-[6.6rem]"
              data-animate="hero"
            >
              Woven texture for rooms that deserve a softer centre.
            </h1>
            <p className="body-copy max-w-xl" data-animate="hero">
              WovenWeave brings showroom-led calm to floors with crafted pile,
              generous proportion, and tactile finishes designed to settle
              interiors rather than simply decorate them.
            </p>
          </div>
          <div className="flex flex-wrap gap-4" data-animate="hero">
            <a href="#collections" className="primary-button">
              Explore collections
            </a>
            <a href="#consultation" className="secondary-button">
              Plan a consultation
            </a>
          </div>
          <div
            className="grid max-w-2xl gap-4 sm:grid-cols-3"
            data-animate="hero"
          >
            {[
              ["38+", "curated woven compositions"],
              ["12 weeks", "from consultation to finishing"],
              ["3 cities", "showroom access and styling guidance"],
            ].map(([value, label]) => (
              <div key={label} className="premium-card px-5 py-5">
                <div className="font-display text-3xl">{value}</div>
                <div className="mt-2 text-sm leading-6 text-dark-amethyst/70">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[28rem] lg:min-h-[42rem]">
          <div
            className="premium-card absolute inset-x-0 top-6 h-[58%] overflow-hidden"
            data-animate="panel"
          >
            <img
              src="/images/hero-main.jpg"
              alt="Luxury living room anchored by a textured woven rug."
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,19,90,0.04),rgba(43,19,90,0.24))]" />
          </div>
          <div
            className="absolute bottom-10 left-0 w-[56%] overflow-hidden rounded-6xl bg-dark-amethyst text-ivory shadow-card"
            data-animate="panel"
          >
            <img
              src="/images/room-feature.jpg"
              alt="Refined interior with sculptural seating and a modern rug."
              className="h-full min-h-[18rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,19,90,0.08),rgba(43,19,90,0.7))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="font-heading text-xs uppercase tracking-[0.2em] text-banana-cream">
                Editorial placement
              </p>
              <p className="mt-3 font-display text-3xl leading-tight">
                Dense pile, curved rooms, warm light.
              </p>
              <p className="mt-3 text-sm leading-6 text-ivory/72">
                A composition language inspired by layered textile studies and
                collected interiors.
              </p>
            </div>
          </div>
          <div
            className="premium-card absolute bottom-0 right-0 flex w-[52%] flex-col gap-4 rounded-6xl bg-white/75 p-5"
            data-animate="panel"
          >
            <img
              src="/images/collection-villa.jpg"
              alt="Close-up of woven rug texture."
              className="h-28 rounded-4xl object-cover"
            />
            <img
              src="/images/collection-modern.jpg"
              alt="Detailed view of a modern carpet weave."
              className="h-24 rounded-4xl object-cover"
            />
            <div className="rounded-4xl bg-dark-amethyst/6 px-4 py-4">
              <p className="font-heading text-xs uppercase tracking-[0.18em] text-dark-amethyst/55">
                Material note
              </p>
              <p className="mt-2 text-sm leading-6 text-dark-amethyst/72">
                Wool, silk blend, and hand-finished edgework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
