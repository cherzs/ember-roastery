export default function Hero() {
  return (
    <section className="grid grid-cols-2 min-h-screen">
      {/* Left: Content */}
      <div className="flex flex-col justify-center px-12 py-16 bg-white">
        <h2 className="text-6xl font-light leading-tight text-neutral-900 mb-6 text-pretty">
          Roasted with Precision. Brewed with Purpose.
        </h2>
        <p className="text-lg font-light text-neutral-600 mb-12 leading-relaxed max-w-md">
          Specialty coffee roasted in small batches for clarity and character.
        </p>
        <div className="flex gap-6">
          <button className="px-8 py-3 bg-amber-900 text-white font-light hover:bg-amber-950 transition-colors">
            Explore Coffee
          </button>
          <button className="px-8 py-3 border border-neutral-900 text-neutral-900 font-light hover:bg-stone-50 transition-colors">
            Visit Roastery
          </button>
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative overflow-hidden bg-stone-100">
        <img
          src="/specialty-coffee-roasting-process.jpg"
          alt="Coffee roasting in progress"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
