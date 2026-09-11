import Nav from '@/components/Nav';
import Hero from "@/components/Hero";
import Capabilities from "@/components/capabilities/Capabilities";
import CaseStudies from "@/components/work/CaseStudies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="relative bg-bg">
      <Nav />
      <Hero />
      <CaseStudies />
      <Capabilities />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
