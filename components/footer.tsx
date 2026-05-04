export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-12">
          <div>
            <h3 className="text-lg font-light mb-4">EMBER ROASTERY</h3>
            <p className="text-sm font-light text-neutral-400 leading-relaxed">
              Specialty coffee roasted with precision and care for the discerning palate.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-400 mb-4">Contact</p>
            <div className="space-y-2 text-sm font-light text-neutral-300">
              <a href="mailto:flowcreativconsultant@gmail.com" className="block hover:text-white transition-colors">
                flowcreativconsultant@gmail.com
              </a>
              <a href="https://wa.me/6285161917939" target="_blank" className="block hover:text-white transition-colors">
                +62 851-6191-7939
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-400 mb-4">Follow</p>
            <div className="space-y-2 text-sm font-light text-neutral-300">
              <p>
                <a href="https://www.instagram.com/flowcreativconsultant/" target="_blank" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </p>
              <p>
                <a href="mailto:flowcreativconsultant@gmail.com" className="hover:text-white transition-colors">
                  Email Newsletter
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/zhafranghaly/" target="_blank" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 space-y-3">
          <p className="text-xs font-light text-neutral-500 text-center">© 2026 Ember Roastery. All rights reserved.</p>
          <p className="text-xs font-light text-neutral-500 text-center">
            Dibuat oleh{" "}
            <a
              href="https://flowreativ.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              Flow Creativ
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
