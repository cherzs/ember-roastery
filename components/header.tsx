export default function Header() {
  return (
    <header className="border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-light tracking-wide text-neutral-900">EMBER ROASTERY</h1>
        <nav className="flex gap-8 text-sm font-light text-neutral-700">
          <a href="#about" className="hover:text-neutral-900 transition-colors">
            About
          </a>
          <a href="#coffee" className="hover:text-neutral-900 transition-colors">
            Coffee
          </a>
          <a href="#location" className="hover:text-neutral-900 transition-colors">
            Visit
          </a>
        </nav>
      </div>
    </header>
  )
}
