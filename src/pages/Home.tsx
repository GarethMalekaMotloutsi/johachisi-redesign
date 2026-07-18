import MainLayout from "../components/layout/MainLayout";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </MainLayout>
  );
}

export default Home;