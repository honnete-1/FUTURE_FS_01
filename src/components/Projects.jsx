import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio built with React and modern CSS.",
      tech: ["React", "CSS", "Vite"],
      liveLink: "",
      codeLink: "",
    },
    {
      title: "MyBA Companion (Concept)",
      description: "An agentic assistant concept for business analysts with workflows and templates.",
      tech: ["UI/UX", "Requirements", "Prototyping"],
      liveLink: "",
      codeLink: "",
    },
  ];

  return (
    <section className="section" id="projects">
      <h2 className="section__title">Projects</h2>
      <p className="section__subtitle">A few things I’ve built and learned from.</p>

      <div className="projects__grid">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            tech={p.tech}
            liveLink={p.liveLink}
            codeLink={p.codeLink}
          />
        ))}
      </div>
    </section>
  );
}
