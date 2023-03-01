import React, { lazy, Suspense } from "react";
import Loader from "./components/UI/Loader";
const Header = lazy(() => import("./components/Header"));
const Banner = lazy(() => import("./components/Banner"));
const Nav = lazy(() => import("./components/Nav"));
const Work = lazy(() => import("./components/work/Work"));
const Skills = lazy(() => import("./components/skills/Skills"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Suspense fallback={<Loader />}>
        <Header />
        <Banner />
        <Skills />
        <Work />
        <About />
        <Contact />
        <Footer />
        <Nav />
      </Suspense>
    </div>
  );
}

export default App;
