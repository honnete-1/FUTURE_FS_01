import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for reaching out! This is a demo form.");
    };

    return (
        <section className="section contact-section" id="contact">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="section-title">Let's Connect<span className="dot">.</span></h2>
                    <p className="contact-subtitle">
                        I’m open to internship opportunities, collaborations, and meaningful conversations.
                    </p>

                    {/* Professional Contact Card */}
                    <div className="contact-visual">
                        <div className="contact-card-content">
                            <div className="contact-item">
                                <strong>Email:</strong> nishimweh777@gmail.com
                            </div>
                            <div className="contact-item">
                                <strong>Location:</strong> Available Remote / Worldwide
                            </div>
                        </div>
                    </div>
                </div>

                <motion.form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-submit">
                        Send Message <FaPaperPlane />
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
