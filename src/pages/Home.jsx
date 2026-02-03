import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Hero from "../components/Hero"
import Trending from "../components/Trending"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Header />

      <div className="flex max-w-[1600px] mx-auto">
        <Sidebar />

        <main className="flex-1 px-4 lg:px-10 py-8">
          <Hero />
          <Trending />
        </main>
      </div>

      <Footer />
    </>
  )
}
