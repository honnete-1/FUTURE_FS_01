import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
    const projects = [
        {
            title: "Submission Reminder App",
            description: "A tool to track and remind users of submission deadlines.",
            tech: ["Shell Scripting", "Automation"],
            liveLink: "#", // No live link provided, preventing broken link
            codeLink: "https://github.com/honnete-1/submission_reminder_app_honnete-1",
        },
        {
            title: "Personal Expense Tracker",
            description: "A Python application to manage and track personal finances.",
            tech: ["Python", "Data Management"],
            liveLink: "#",
            codeLink: "https://github.com/honnete-1/Lab3-Personal-Expense-Tracker_honnete-1",
        },
        {
            title: "Professional Portfolio",
            description: "This responsive, accessible portfolio website built with React.",
            tech: ["React", "CSS Variables", "Framer Motion"],
            liveLink: "#",
            codeLink: "#", // Current repo
        },
        {
            title: "Mini Shop",
            description: "Upcoming full stack development project.",
            tech: ["In Development"],
            liveLink: "#",
            codeLink: "https://github.com/honnete-1/FUTURE_FS_02",
        },
        {
            title: "Rebranded Website",
            description: "Upcoming software solution.",
            tech: ["In Development"],
            liveLink: "#",
            codeLink: "https://github.com/honnete-1/FUTURE_FS_03",
        },
    ];

    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <h2 className="section-title">Selected Work<span className="dot">.</span></h2>

                <div className="projects-grid">
                    {projects.map((p, index) => (
                        <ProjectCard key={index} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
