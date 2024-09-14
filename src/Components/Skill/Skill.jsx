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
          <div className="inner-circle">
            <div className="outer-circle">
              <FaJsSquare />
            </div>
          </div>
        </li>
        <li className="known-skill">
          <div className="inner-circle">
            <div className="outer-circle">
              <SiCsharp />
            </div>
          </div>
        </li>
        <li className="known-skill">
          <div className="inner-circle">
            <div className="outer-circle">
              <SiVite />
            </div>
          </div>
        </li>
        <li className="known-skill">
          <div className="inner-circle">
            <div className="outer-circle">
              <FaLinux />
            </div>
          </div>
        </li>
        <li className="known-skill">
          <div className="inner-circle">
            <div className="outer-circle">
              <IoLogoPython />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Skill;
