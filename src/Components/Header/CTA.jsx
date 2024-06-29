/* eslint-disable react-refresh/only-export-components */
import Resume from "../../assets/Kamalesh_Resume.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download CV
      </a>
      <a href="#Contact" className="btn btn-primary">Let{"'"}s Chat</a>
    </div>
  );
};

export default CTA;
