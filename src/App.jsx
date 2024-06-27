import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Service from "./Components/Service/Service";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testmonial from "./Components/Testmonial/Testmonial";
import Footer from "./Components/Footer/Footer";
// import About from "./Components/About/About.jsx";
// import { SiHomeassistant } from "react-icons/si";
// import { FaProjectDiagram } from "react-icons/fa";
// import { MdGroupWork } from src/Components/About/About.jsx"react-icons/md";
// import { MdOutlineContactPhone } from "react-icons/md";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testmonial />
      <Footer />
    </>
  );
};

export default App;
