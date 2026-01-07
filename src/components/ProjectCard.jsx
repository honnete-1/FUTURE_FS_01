export default function ProjectCard({ title, description, tech, liveLink, codeLink }) {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>

      <div className="project-card__tech">
        {tech.map((t) => (
          <span key={t} className="badge">{t}</span>
        ))}
      </div>

      <div className="project-card__links">
        {liveLink && (
          <a className="link" href={liveLink} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
        {codeLink && (
          <a className="link" href={codeLink} target="_blank" rel="noreferrer">
            Code
          </a>
        )}
      </div>
    </div>
  );
}
