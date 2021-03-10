const About = () => {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="about_text">
        <div className="education">
          <img src="/education.svg" alt="education" width="230" />
          <h3>Education</h3>
          <p>
            I am an Elementary and Junior
            <br /> High School graduate, currently studying at High School.
            <br />I aspire to continue my education at a Public University.
            Hopes to gain knowledge in several universities
          </p>
        </div>
        <div className="skill">
          <img src="/skill.svg" alt="skill" width="330" />
          <h3>Skill</h3>
          <p>
            I learned about programming since
            <br /> grade 10 high school or just about 8 months ago.
            <br />
            I master the basic Web Fundamentals such as
            <br />
            Html, Css, Js, and Php native
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
