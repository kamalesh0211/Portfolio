import { SiCsharp } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { FaLinux } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";

import "./Skill.css";
const Skill = () => {
  return (
    <div className="skillList">
      <ul className="list">
        <li className="known-skill">
          <FaJsSquare />
        </li>
        <li className="known-skill">
          <SiCsharp />
        </li>
        <li className="known-skill">
          <FaLinux />
        </li>
        <li className="known-skill">
          <SiVite />
        </li>
        <li className="known-skill">
          <IoLogoPython />
        </li>
      </ul>
    </div>
  );
};

export default Skill;
