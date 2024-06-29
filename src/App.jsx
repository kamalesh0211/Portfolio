import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Service from "./Components/Service/Service";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testmonial from "./Components/Testmonial/Testmonial";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <>
      <Nav />
      <Header />

      <About />
      <Experience />
      <Contact />
      <Service />
      <Portfolio />
      <Testmonial />
      <Footer />
    </>
  );
};

export default App;
