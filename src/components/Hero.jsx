export default function Hero() {
  return (
    <section className="hero">
      <p className="hero__tag">Software Engineering Student • Frontend Intern</p>

      <h1 className="hero__title">Hello 👋, I’m Honnête</h1>

      <p className="hero__subtitle">
        I’m building my professional portfolio using React. I love creating clean,
        user-friendly web experiences and documenting systems professionally.
      </p>

      <div className="hero__actions">
        <a className="btn btn--primary" href="#projects">View Projects</a>
        <a className="btn" href="/resume.pdf" download>Download Resume</a>
      </div>
    </section>
  );
}
