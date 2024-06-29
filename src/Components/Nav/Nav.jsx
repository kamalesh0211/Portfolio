import { SiHomeassistant } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { PiUserSquare } from "react-icons/pi";
import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <a href="#Home">
        <SiHomeassistant />
      </a>
      <a href="#about">
        <PiUserSquare />
      </a>
      <a href="Experience">
        <MdWork />
      </a>
      <a href="#Project">
        <FaProjectDiagram />
      </a>
      <a href="#Contact">
        <MdOutlineContactPhone />
      </a>
    </nav>
  );
};

export default Nav;
