import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div className="w-screen min-h-screen bg-[#1A1A1A] overflow-y-auto">
        <Navbar />
        <section className="min-h-screen">
          <Hero />
        </section>
        <section className="min-h-screen">
          <About />
        </section>
        <section className="min-h-screen">
          <Projects />
        </section>
        <section className="">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
