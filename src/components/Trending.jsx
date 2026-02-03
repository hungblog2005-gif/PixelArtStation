import AssetCard from "./AssetCard"

export default function Trending() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Trending Now 🔥</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AssetCard
          title="Stylized Character Kit"
          price="$49.99"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuC2FsJSuJFrBRi1UV6x6Z3J0TXEH9tWG01Erot695ZX6PU79e2piTRMkNqpyCDYgE_UCfFLtyVam5lu_DJjlXYVNgj9uptLAx9qCoe-1GOYBAbSKCtG6PzI6sA3G220jRvbhbj0OaRuN69HvURfdOcoxscY4UENbwZaGUqXvIEQKAK5bfP24a8OeBbgIRZ69bOpwoDg2TH6woldOmhAM2bvm7L28SjmPi7404zfrz9qb1BOoi6tVvhbP2HRqIQ3qGjnfm_GHSjc-CDW"
        />
      </div>
    </section>
  )
}
