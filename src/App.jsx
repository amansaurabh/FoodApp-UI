import Navbar from "./components/Navbar"
import { Hero, Services, LatestArticle, Footer } from "./sections"


const App = () => (
  <main className="relative">
    <Navbar />
    <section className="xl:padding-l padding-b">
      <Hero />
    </section>
    <section>
      <div className="h-[200px]"></div>
    </section>
    <section className="bg-pale-blue padding-x">
      <Services />
    </section>
    <section className="padding">
      <LatestArticle />
    </section>
    <section className="bg-pale-blue padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)


export default App
