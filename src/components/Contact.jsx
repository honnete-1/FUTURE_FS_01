export default function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="section__title">Contact</h2>
      <p className="section__subtitle">
        I’m open to internship opportunities, collaborations, and meaningful conversations.
      </p>

      <div className="contact__card">
        <p className="contact__text">
          The fastest way to reach me is by email:
        </p>

        <a className="contact__link" href="mailto:your.email@example.com">
          your.email@example.com
        </a>

        <div className="contact__links">
          <a className="link" href="https://github.com/honnete-1" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="link" href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
