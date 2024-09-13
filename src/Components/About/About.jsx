import "./About.css";
import Skill from "../Skill/Skill";
import Education from "../Education/Education";

// option 2

const About = () => {
  return (
    <section id="About">
      <h2>SKILL</h2>
      <Education />
      <Skill />
    </section>
  );
  // window.addEventListener("scroll", function () {
  //   const section = document.querySelector(".fade-section");
  //   let scrollPosition = window.scrollY;
  //   let opacityValue = 1 - scrollPosition / 500; // 500 can be adjusted
  //   section.style.opacity = opacityValue > 0 ? opacityValue : 0;
  // });
  
};

export default About;
