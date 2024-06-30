import { SiHomeassistant } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { PiUserSquare } from "react-icons/pi";
import { useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [activeNav, defActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => defActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <SiHomeassistant />
      </a>
      <a
        href="#About"
        onClick={() => defActiveNav("#About")}
        className={activeNav === "#About" ? "active" : ""}
      >
        <PiUserSquare />
      </a>
      <a
        href="#Experience"
        onClick={() => defActiveNav("#Experience")}
        className={activeNav === "#Experience" ? "active" : ""}
      >
        <MdWork />
      </a>
      <a
        href="#Project"
        onClick={() => defActiveNav("#Project")}
        className={activeNav === "#Project" ? "active" : ""}
      >
        <FaProjectDiagram />
      </a>
      <a
        href="#Contact"
        onClick={() => defActiveNav("#Contact")}
        className={activeNav === "#Contact" ? "active" : ""}
      >
        <MdOutlineContactPhone />
      </a>
    </nav>
  );
};

export default Nav;
