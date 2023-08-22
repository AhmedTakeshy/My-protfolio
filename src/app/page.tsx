"use client"
import Header from "../components/Header";
import Banner from "../components/Banner";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


export default function page() {
  return (
    <div className="overflow-hidden bg-no-repeat bg-cover bg-site">
        <Header />
        <Banner />
        <Skills />
        <Work />
        <About />
        <Contact />
        <Footer />
        <Nav />
    </div>
  );
}

