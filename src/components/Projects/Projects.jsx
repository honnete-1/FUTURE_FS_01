import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch projects from Backend API
        fetch('/api/projects')
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then(data => {
                // Map DB keys to Component keys
                const mapped = data.map(p => ({
                    title: p.title,
                    description: p.description,
                    tech: typeof p.tech_stack === 'string' ? JSON.parse(p.tech_stack) : p.tech_stack,
                    codeLink: p.link,
                    liveLink: '#', // Default fallback
                    image: p.image_url
                }));
                setProjects(mapped);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching projects:", err);
                setLoading(false);
            });
    }, []);

    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <h2 className="section-title">Selected Work<span className="dot">.</span></h2>

                {loading ? (
                    <p>Loading projects...</p>
                ) : (
                    <div className="projects-grid">
                        {projects.length > 0 ? (
                            projects.map((p, index) => (
                                <ProjectCard key={index} project={p} />
                            ))
                        ) : (
                            <p>No projects found (Make sure backend is running).</p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
