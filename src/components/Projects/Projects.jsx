import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch projects from Backend API
        let apiBase = import.meta.env.VITE_API_BASE_URL || '';
        // Remove trailing slash if present to avoid double slashes
        if (apiBase.endsWith('/')) {
            apiBase = apiBase.slice(0, -1);
        }

        fetch(`${apiBase}/api/projects`)
            .then(res => {
                if (!res.ok) throw new Error(`Fetch failed: ${res.statusText} (${res.status})`);
                const contentType = res.headers.get("content-type");
                if (contentType && contentType.includes("text/html")) {
                    throw new Error("Received HTML instead of JSON. This means the API URL is wrong (likely pointing to Frontend instead of Backend). Check VITE_API_BASE_URL.");
                }
                return res.json();
            })
            .then(data => {
                // ... mapping code ...
                const mapped = data.map(p => ({
                    title: p.title,
                    description: p.description,
                    tech: typeof p.tech_stack === 'string' ? JSON.parse(p.tech_stack) : p.tech_stack,
                    codeLink: p.link,
                    liveLink: '#',
                    image: p.image_url
                }));
                setProjects(mapped);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching projects:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <h2 className="section-title">Selected Work<span className="dot">.</span></h2>

                {error && (
                    <div style={{ color: 'red', background: '#ffe6e6', padding: '10px', margin: '20px 0', borderRadius: '5px' }}>
                        <strong>Error loading projects:</strong> {error}
                        <br />
                        <small>Check console for details.</small>
                    </div>
                )}

                {loading ? (
                    <p>Loading projects...</p>
                ) : (
                    <div className="projects-grid">
                        {projects.length > 0 ? (
                            projects.map((p, index) => (
                                <ProjectCard key={index} project={p} />
                            ))
                        ) : (
                            !error && <p>No projects found (Database returned empty list).</p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
