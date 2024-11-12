import About from "./About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./Contact";



export default function Home() {

  return (
    <div>

      <Hero />

      <div id="about-section">
        <About />
      </div>


      <div id="services-section">
        <Services />
      </div>


      <div id="portfolio-section">
        <Portfolio />
      </div>


      <div id="contact-section">
        <Contact />

      </div>


    </div>
  );
}