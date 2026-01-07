import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h3>Honnête<span style={{ color: 'var(--accent-color)' }}>.</span></h3>
                    <p>Building the web, one pixel at a time.</p>
                </div>

                <div className="footer-socials">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link"><FaGithub /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link"><FaLinkedin /></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link"><FaTwitter /></a>
                </div>

                <div className="footer-copy">
                    <p>&copy; {new Date().getFullYear()} Honnête. Made with <FaHeart className="heart-icon" /> and React.</p>
                </div>
            </div>
        </footer>
    );
}
