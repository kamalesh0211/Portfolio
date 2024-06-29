import CTA from "./CTA";
import "./Header.css";
import HeaderSocial from "./HeaderSocial";
import { RiScrollToBottomLine } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I{"'"}m </h5>
        <h1>Kamaleshwaran</h1>
        <h5>Frontend Developer</h5>
        <CTA />
        <HeaderSocial />
        <a href="#Contact" className="scroll_down">
          <RiScrollToBottomLine />
        </a>
      </div>
    </header>
  );
};

export default Header;
