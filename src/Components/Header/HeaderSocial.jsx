import { TfiLinkedin } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";
import { TbBrandWhatsapp } from "react-icons/tb";
const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a href="#Linkedin">
        <TfiLinkedin />
      </a>
      <a href="#Github">
        <VscGithub />
      </a>
      <a href="#Whatsapp">
        <TbBrandWhatsapp />
      </a>
    </div>
    
  );
};

export default HeaderSocial;
