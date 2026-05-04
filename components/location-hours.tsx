export default function LocationHours() {
  return (
    <section id="location" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-10 md:mb-12 text-pretty">Visit Us</h2>

            <div className="space-y-12">
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500 mb-3">Address</p>
                <p className="text-lg font-light text-neutral-900">
                  847 Industrial Ave
                  <br />
                  Portland, OR 97214
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500 mb-3">Hours</p>
                <div className="space-y-2 font-light text-neutral-700">
                  <p>Monday – Friday: 7:00 AM – 6:00 PM</p>
                  <p>Saturday: 8:00 AM – 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500 mb-3">Contact</p>
                <p className="font-light text-neutral-700">
                  hello@emberroastery.com
                  <br />
                  (503) 555-0123
                </p>
              </div>

              <button className="px-6 py-3 border border-neutral-900 text-neutral-900 font-light hover:bg-stone-100 transition-colors text-sm">
                Open in Google Maps
              </button>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-stone-200 aspect-square">
            <img
              src="/coffee-roastery-warehouse-interior.jpg"
              alt="Ember Roastery location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
