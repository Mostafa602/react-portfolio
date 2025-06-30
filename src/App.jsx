import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Background from "./components/Background"
export default function App() {
  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-blue-200 selection:text-cyan-900">
      <Background/>
      <div className="container mx-auto px-4 md:px-14">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}


