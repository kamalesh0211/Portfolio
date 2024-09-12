import "./About.css";
import Skill from "../Skill/Skill";
import Education from "../Education/Education";
const About = () => {
  return (
    <section id="About">
      <h2>Education & Skill</h2>
      <Education />
      <Skill />
    </section>
  );
};

export default About;
