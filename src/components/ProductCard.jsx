export default function ProductCard({ title, author, price, image }) {
  return (
    <div className="bg-card border border-border-light rounded-xl overflow-hidden hover:-translate-y-1 transition-all cursor-pointer">
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-text-muted">By {author}</p>

        <div className="font-bold">{price}</div>
      </div>
    </div>
  )
}
