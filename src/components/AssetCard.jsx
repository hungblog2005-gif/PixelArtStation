export default function AssetCard({ title, price, img }) {
  return (
    <div className="bg-card border border-border-light rounded-xl overflow-hidden hover:-translate-y-1 transition-all">
      <img src={img} className="aspect-video object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="font-bold">{title}</h3>
        <span className="font-bold text-primary">{price}</span>
      </div>
    </div>
  )
}
