import './App.css'
import { Footer } from './Components/Footer'
import { Navbar } from './Components/Navbar'
import About from './Sections/About'
import Brands from './Sections/Brands'
import Contact from './Sections/Contact'
import Hero from './Sections/Hero'

function App() {

  return (
    <>

      <header className="sticky top-0 z-50 w-full">
        <Navbar />
      </header>

      <main>
        <Hero />
        <Brands />
        <About/>
        <Contact/>
      </main>

      <footer>  
        <Footer />
      </footer>
    </>
  )
}

export default App
