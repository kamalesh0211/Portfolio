import Iframe from "react-iframe";
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
        {/* <Iframe className="my-location"
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.071970483985!2d80.19471572507747!3d13.031088787289793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267286224f521%3A0x90419c8c9c2b3a1e!2sAnjali%20Mahal!5e0!3m2!1sen!2sin!4v1719940251428!5m2!1sen!2sin"
          width="600px"
          height="450px"
          styles={{ border: "0" }}
          allowFullScreen
          loading="lazy"
        /> */}
        <a href="#Contact" className="scroll_down">
          <RiScrollToBottomLine />
          ``
        </a>
      </div>
    </header>
  );
};

export default Header;
