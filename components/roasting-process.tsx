export default function RoastingProcess() {
  const steps = [
    {
      title: "Sourcing",
      description:
        "We partner directly with farmers who practice sustainable agriculture and produce exceptional green coffee.",
    },
    {
      title: "Profiling",
      description:
        "Every origin is profiled through test roasts, analyzing color, aroma, and development to unlock optimal flavor.",
    },
    {
      title: "Roasting",
      description:
        "Small batches are roasted by hand, carefully monitoring temperature curves and listening to the coffee.",
    },
    {
      title: "Quality Control",
      description:
        "Each batch is cupped and evaluated for consistency, flavor clarity, and adherence to our standards.",
    },
  ]

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-light text-neutral-900 mb-16 text-center text-pretty">The Roasting Process</h2>

        <div className="grid grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-6">
                <p className="text-sm font-light text-neutral-500 uppercase tracking-wide mb-2">Step {index + 1}</p>
                <h3 className="text-2xl font-light text-neutral-900">{step.title}</h3>
              </div>
              <p className="text-sm font-light text-neutral-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
