import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
        <Process />
        <Pricing />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
