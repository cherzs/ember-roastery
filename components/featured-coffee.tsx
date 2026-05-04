export default function FeaturedCoffee() {
  const coffees = [
    {
      name: "Ethiopian Yirgacheffe",
      origin: "Sidamo Region",
      roast: "Light",
      flavor: "Floral, blackberry, tea-like clarity",
      brew: "Pour over or AeroPress for optimal brightness",
    },
    {
      name: "Colombian Huila",
      origin: "High Mountain Huila",
      roast: "Medium",
      flavor: "Chocolate, orange blossom, balanced body",
      brew: "Espresso or French press brings out sweetness",
    },
    {
      name: "Kenyan AA",
      origin: "Central Highlands",
      roast: "Medium-Light",
      flavor: "Black currant, bergamot, wine-like acidity",
      brew: "Pour over recommended for full expression",
    },
    {
      name: "Brazilian Natural",
      origin: "Minas Gerais",
      roast: "Medium-Dark",
      flavor: "Chocolate, hazelnut, full body, syrupy",
      brew: "Espresso or traditional brew method",
    },
  ]

  return (
    <section id="coffee" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-light text-neutral-900 mb-16 text-center text-pretty">Featured Coffees</h2>

        <div className="grid grid-cols-2 gap-8">
          {coffees.map((coffee, index) => (
            <div key={index} className="border border-stone-200 p-8 hover:border-stone-300 transition-colors">
              <h3 className="text-xl font-light text-neutral-900 mb-2">{coffee.name}</h3>
              <p className="text-sm text-neutral-600 font-light mb-6">
                {coffee.origin} · {coffee.roast} Roast
              </p>

              <div className="space-y-4 text-sm font-light text-neutral-700">
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500 mb-1">Flavor Profile</p>
                  <p>{coffee.flavor}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500 mb-1">Brew Recommendation</p>
                  <p>{coffee.brew}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
