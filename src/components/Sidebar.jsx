export default function Sidebar() {
  return (
    <aside className="hidden xl:flex w-64 border-r border-border-light bg-surface px-4 py-8">
      <div className="space-y-6 w-full">
        <h3 className="text-xs uppercase text-text-muted font-bold tracking-widest">
          Categories
        </h3>

        {["3D Models", "2D Assets", "Audio", "VFX", "Plugins"].map(item => (
          <div
            key={item}
            className="px-3 py-2 rounded-lg text-text-muted hover:text-text-main hover:bg-card cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </aside>
  )
}
