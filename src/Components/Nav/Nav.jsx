import { SiHomeassistant } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { PiUserSquare } from "react-icons/pi";
import { useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#">
        <SiHomeassistant />
      </a>
      <a
        href="#About"
        onClick={() => setActiveNav("#About")}
        className={activeNav === "#About" ? "active" : ""}
      >
        <PiUserSquare />
      </a>
      <a href="#Experience">
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
