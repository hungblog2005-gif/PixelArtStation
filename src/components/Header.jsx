export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light bg-surface/95 backdrop-blur-md px-6 py-3 shadow-md">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-8">

        {/* Logo */}
        <div className="flex items-center gap-3 text-primary">
          <div className="size-8 bg-primary rounded flex items-center justify-center text-white">
            <span className="material-symbols-outlined">token</span>
          </div>
          <h2 className="text-text-main text-xl font-bold">
            AssetForge
          </h2>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a className="text-primary" href="#">Store</a>
          <a className="text-text-muted hover:text-text-main">Library</a>
          <a className="text-text-muted hover:text-text-main">Community</a>
          <a className="text-text-muted hover:text-text-main">Support</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-text-muted hover:text-text-main hover:bg-card rounded-lg">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
          <button className="p-2 text-text-muted hover:text-text-main hover:bg-card rounded-lg">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>

      </div>
    </header>
  )
}
