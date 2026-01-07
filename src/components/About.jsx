export default function About() {
  return (
    // id="about" lets us link to this section later from the navbar
    <section className="section" id="about">
      <h2 className="section__title">About</h2>

      <p className="section__subtitle">
        I’m an enthusiastic Software Engineering student with strong communication and
        leadership skills. I’m passionate about building technology that improves
        everyday life, and I aim to inspire more women to confidently pursue fields
        that are seen as “hard” when they genuinely love them.
      </p>

      <div className="about__grid">
        <div className="about__card">
          <h3 className="about__cardTitle">Why Frontend & React</h3>
          <p className="about__text">
            I’m learning frontend development and React to build user-centered platforms
            that connect people through shared interests. One project I’m working toward
            is <strong>Reading Circle</strong>—a community space for readers to discuss
            books, share recommendations, and host reading sessions. I want to expand
            this idea to other interests like sports, music, movies, anime, and webtoons.
          </p>
        </div>

        <div className="about__card">
          <h3 className="about__cardTitle">How I Learn</h3>
          <p className="about__text">
            I prioritize deep understanding while learning at a fast pace—because
            technology evolves quickly and I want to keep up without skipping fundamentals.
          </p>

          <ul className="about__list">
            <li>Build small features, then iterate</li>
            <li>Focus on clean, readable code</li>
            <li>Practice explaining my decisions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
