import Nav from '../components/Nav';
import Banner from "../components/Banner";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Image from 'next/image';
import siteImg from "@/public/site-bg.webp";
export default async function page() {

  return (
    <div className="relative">
      <Image
        src={siteImg}
        alt='Background image'
        fill
        className='object-cover z-[-2]'
        placeholder='blur'
        priority={true}
        sizes='100vw' />
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

