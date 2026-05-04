export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="bg-stone-100 aspect-square">
            <img
              src="/coffee-beans-roasting-heat.jpg"
              alt="Coffee roasting process"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-4xl font-light text-neutral-900 mb-8 text-pretty">Built Around the Roast.</h2>
            <p className="text-base font-light text-neutral-700 leading-relaxed mb-6">
              Every bean tells a story. We source directly from farmers who share our commitment to quality and
              sustainability. Our roasting is both art and science—carefully profiled to bring out the unique
              characteristics of each origin.
            </p>
            <p className="text-base font-light text-neutral-700 leading-relaxed">
              Small batches ensure consistency and allow us to respond quickly to seasonal variations. This approach
              demands attention and expertise, but delivers coffee worth the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
