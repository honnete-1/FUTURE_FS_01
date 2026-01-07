import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../../assets/profile.jpg'; // Import the user's image
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Abbreviated Name Layout */}
                    <div className="hero-name-wrapper">
                        <h1 className="hero-abbr">NH</h1>
                        <h2 className="hero-fullname">Nishimwe Honnete</h2>
                    </div>

                    {/* Headline */}
                    <h3 className="hero-headline">
                        I harness technology to <span className="highlight">drive solutions.</span>
                    </h3>

                    {/* Bio */}
                    <p className="hero-bio">
                        Hi, I am Honnete, a passionate software engineer.
                        I specialize in building responsive web applications, python development, and shell scripting.
                    </p>

                    <div className="hero-actions">
                        <Link to="/contact" className="btn btn-primary">Let's Talk</Link>
                        <div className="social-links">
                            <a href="https://github.com/honnete-1" target="_blank" rel="noreferrer"><FaGithub /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Design Layout for the picture (Card style as requested) */}
                    <div className="hero-image-card">
                        <div className="image-wrapper">
                            <img src={profileImg} alt="Nishimwe Honnete" className="profile-img" />
                        </div>
                        <div className="card-decoration"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
