import "./Education.css";
const Education = () => {
  return (
    <section id="Edc">
      <div className="section">
        <h5 className="title">SSLC</h5>
        <div className="paragraph">
          <strong className="insitute">
            Annai Velankanni Matric.Sch Chennai
          </strong>
          <br />
          <p>07/2017</p>
        </div>
      </div>
      <div className="section">
        <h5 className="title">HSSC</h5>
        <div className="paragraph">
          <strong className="insitute">Velankanni Matric.Sch Chennai</strong>
          <br />
          <p>07/2017 - 04/2019</p>
        </div>
      </div>
      <div className="section">
        <h5 className="title">B.E (Electronic and Communication)</h5>
        <div className="paragraph">
          <strong>University College of Engineering</strong> <br />
          <p>06/2019 - 05/2023</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
