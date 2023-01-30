import Header from "./components/Header";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
// import { BsFillCloudMoonFill } from "react-icons/bs";
function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Skills />
      <Work />
      <About />
      <Contact />
      <Nav />
      <div className="h-[4000px]"></div>
    </div>
  );
}

export default App;
