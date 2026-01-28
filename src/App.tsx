import "./App.css";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import About from "./Sections/About";
import Banner from "./Sections/Banner";
import Brands from "./Sections/Brands";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";

function App() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full ">
        <Navbar />
      </header>

      <main>
        <Hero />
        <Brands />
        <Banner />
        <About />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
