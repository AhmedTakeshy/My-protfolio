import Header from "./components/Header";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden ">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <Services />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
}

export default App;
