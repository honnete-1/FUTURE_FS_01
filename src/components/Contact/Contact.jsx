import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', msg: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'info', msg: 'Sending...' });

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setStatus({ type: 'success', msg: 'Message sent successfully!' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', msg: data.message || 'Error sending message.' });
            }
        } catch (err) {
            console.error(err);
            setStatus({ type: 'error', msg: 'Server error. Please try again later.' });
        }
    };

    return (
        <section className="section contact-section" id="contact">
            <Helmet>
                <title>Contact - Honnête</title>
                <meta name="description" content="Get in touch with Honnête for internships and collaborations." />
            </Helmet>

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

                    {status.msg && (
                        <p style={{
                            marginBottom: '1rem',
                            color: status.type === 'error' ? '#ef4444' : '#22d3ee',
                            fontWeight: 'bold'
                        }}>
                            {status.msg}
                        </p>
                    )}

                    <button type="submit" className="btn btn-submit">
                        Send Message <FaPaperPlane />
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
