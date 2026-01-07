import { motion } from 'framer-motion';
import './Skills.css';

export default function Skills() {
    const skills = [
        { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind (Concept)"] },
        { category: "Creative", items: ["Graphic Design", "Video Editing", "Content Creation", "Storytelling"] },
        { category: "Professional", items: ["Leadership", "Communication", "Problem Solving", "Teamwork"] }
    ];

    return (
        <section className="section skills-section" id="skills">
            <div className="container">
                <h2 className="section-title">My Toolbox<span className="dot">.</span></h2>

                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            className="skill-category"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="category-title">{skillGroup.category}</h3>
                            <div className="skill-tags">
                                {skillGroup.items.map((skill, i) => (
                                    <span className="skill-tag" key={i}>{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
