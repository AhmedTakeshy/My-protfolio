"use client"
import { useEffect,useState } from 'react';
import Nav from '../components/Nav'
import Header from "../components/Header";
import Banner from "../components/Banner";
import Loading from "./loading";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";





export default function page() {
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        if (typeof window === 'undefined') {
          setIsLoading(true);
        } else {
          setIsLoading(false);
        }
      }, []);

      return (
        <div className="overflow-hidden bg-no-repeat bg-cover bg-site">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Header />
              <Banner />
              <Skills />
              <Work />
              <About />
              <Contact />
              <Footer />
              <Nav />
            </>
          )}
        </div>
      );
  }

