export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section__title">Skills</h2>
      <p className="section__subtitle">
        A snapshot of my technical abilities, creative skills, and professional strengths.
      </p>

      <div className="skills__grid">
        {/* Frontend */}
        <div className="skills__card">
          <h3 className="skills__cardTitle">Frontend Development</h3>
          <ul className="skills__list">
            <li>HTML5</li>
            <li>CSS3 (responsive layout)</li>
            <li>JavaScript (ES6+)</li>
            <li>React (learning — components, props, lists)</li>
          </ul>
        </div>

        {/* Creative */}
        <div className="skills__card">
          <h3 className="skills__cardTitle">Creative & Digital Skills</h3>
          <ul className="skills__list">
            <li>Graphic Design</li>
            <li>Video Editing</li>
            <li>Content Creation</li>
            <li>Visual storytelling & presentation</li>
          </ul>
        </div>

        {/* Strengths */}
        <div className="skills__card">
          <h3 className="skills__cardTitle">Professional Strengths</h3>
          <ul className="skills__list">
            <li>Effective communication</li>
            <li>Teamwork & collaboration</li>
            <li>Problem-solving & decision making</li>
            <li>Leadership & accountability</li>
            <li>Hospitality & people-centered mindset</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
