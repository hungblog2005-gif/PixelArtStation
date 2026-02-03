export default function Hero() {
  return (
    <section className="mb-12">
      <div
        className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDbKIItOa0kNunWc8q_1xkh7-R64bbMfMtUobGBTVLthCWoDDKm8OJgZIQYBrpz8eHYa30JyPQrgZjTeg3Y9Db64PiuM-2LMlcggNId3ceEPsD4f0fKwT7NgL0ttBMYwi7etZPZRszmTTieGae2C89QSEakWip0eUTw96KtsyPyp7bF6BGWGZChGV3px5A9M-UtCS9AHSm2gMrhcFJvrcldNfmLJG2daASeyXTRa3sIrtQlL5bNIYvWk922GaMJL_BMCqSPZDVZN6ku)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex items-center px-12">
          <div className="max-w-xl space-y-6">
            <span className="bg-primary px-3 py-1 text-xs font-bold rounded">
              Featured Asset
            </span>
            <h2 className="text-5xl font-bold">
              Modular Cyberpunk City Pack
            </h2>
            <p className="text-white/80">
              500+ modular assets, 4K textures, dynamic lighting presets.
            </p>
            <button className="bg-primary px-8 py-3 rounded font-bold hover:bg-primary-hover">
              Buy Now — $89.99
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
