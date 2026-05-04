export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Ember's attention to detail is remarkable. Every bag has personality and clarity that you simply don't find elsewhere.",
      author: "—James Chen, Coffee Enthusiast",
    },
    {
      quote:
        "We've served their coffee at our café for two years. Our customers notice the difference immediately. It's become our signature.",
      author: "—Sarah Martinez, Café Owner",
    },
    {
      quote:
        "The sourcing story, the roasting philosophy, the final cup—it all comes together. This is coffee with integrity.",
      author: "—Michael Thompson, Specialty Importer",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-light text-neutral-900 mb-16 text-center text-pretty">What People Say</h2>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-b border-stone-200 pb-12">
              <p className="text-lg font-light text-neutral-700 leading-relaxed mb-4 italic">"{testimonial.quote}"</p>
              <p className="text-sm font-light text-neutral-600">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
