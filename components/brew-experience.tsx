export default function BrewExperience() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-8 text-pretty">From Roastery to Cup.</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-light text-neutral-900 mb-3">Manual Brew</h3>
                <p className="text-base font-light text-neutral-700 leading-relaxed">
                  Experience the precision and ritual of manual brewing. Pour overs, AeroPress, and French press
                  highlight the nuances we roast for.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-light text-neutral-900 mb-3">Espresso</h3>
                <p className="text-base font-light text-neutral-700 leading-relaxed">
                  Our espresso blends are crafted to shine under pressure. Balanced, clean, and complex—we optimize each
                  roast for espresso expression.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-light text-neutral-900 mb-3">Wholesale & Subscriptions</h3>
                <p className="text-base font-light text-neutral-700 leading-relaxed">
                  Partner with us for your café or office. Monthly subscriptions deliver fresh-roasted coffee on your
                  schedule.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="bg-stone-100 aspect-square">
            <img
              src="/barista-pouring-espresso-coffee.jpg"
              alt="Barista preparing coffee"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
