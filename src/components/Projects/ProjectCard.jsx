import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
    return (
        <motion.div
            className="project-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <div className="project-image-placeholder">
                <span>{project.title}</span>
            </div>

            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                    {project.tech.map((t, i) => (
                        <span key={i} className="tech-tag">{t}</span>
                    ))}
                </div>

                <div className="project-actions">
                    <a href={project.codeLink} className="action-link" target="_blank" rel="noreferrer">
                        <FaGithub /> Code
                    </a>
                    <a href={project.liveLink} className="action-link" target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt /> Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
