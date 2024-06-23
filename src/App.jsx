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
      <Background />
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
const Background = () => {
  return (
    <>
      <div className="BoxContainer">
        <div className="BoxOne"></div>
        <div className="BoxTwo"></div>
        <div className="BoxThree"></div>
        <div className="BoxFour"></div>
        <div className="BoxFive"></div>
        <div className="BoxSix"></div>
        <div className="BoxSeven"></div>
        <div className="BoxEight"></div>
        <div className="BoxNine"></div>
        <div className="BoxTen"></div>
        <div className="BoxEleven"></div>
        <div className="BoxTwelve"></div>
        <div className="BoxThree"></div>
        <div className="BoxFourteen"></div>
        <div className="BoxFifteen"></div>
      </div>
    </>
  );
};

export default App;
