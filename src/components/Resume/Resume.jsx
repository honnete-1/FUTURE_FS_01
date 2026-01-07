import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './Resume.css';
import { FaDownload, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Resume() {
    return (
        <section className="section resume-section">
            <Helmet>
                <title>Resume - Honnete Nishimwe</title>
                <meta name="description" content="Resume of Honnete Nishimwe - Aspiring Robotics and Intelligent Systems Engineer." />
            </Helmet>

            <div className="container resume-container">
                <div className="resume-header">
                    <h1 className="resume-name">HONNETE NISHIMWE</h1>
                    <p className="resume-contact">
                        Rwandan | KG 784 St, Gisozi, Kigali City | +250791712576<br />
                        h.nishimwe@alustudent.com | www.linkedin.com/in/honnete-1
                    </p>
                    <a href="/assets/resume.pdf" download="Resume-Honnete_Nishimwe.pdf" className="btn btn-sm btn-download">
                        Download PDF <FaDownload />
                    </a>
                </div>

                <div className="resume-content">
                    {/* Summary */}
                    <div className="resume-block">
                        <h3 className="resume-heading">SUMMARY</h3>
                        <p className="resume-text">
                            Ambitious tech enthusiast. Aspiring Robotics and Intelligent Systems Engineer, passionate about harnessing technology to drive sustainable development across Africa. Possess excellent communication and leadership skills and aim to be an inspiration to women to pursue what is perceived to be hard as long as they love it. Currently pursuing an honors degree in Software Engineering.
                        </p>
                    </div>

                    {/* Educational Background */}
                    <div className="resume-block">
                        <h3 className="resume-heading">EDUCATIONAL BACKGROUND</h3>
                        <div className="resume-item">
                            <div className="resume-item-header">
                                <strong>African Leadership University – Kigali city, Rwanda</strong>
                                <span>May 2025 – May 2028</span>
                            </div>
                            <p>BA. Software Engineering</p>
                            <p className="resume-sub">Relevant Coursework: Frontend web development; programming languages; Machine learning.</p>
                        </div>
                    </div>

                    {/* Professional Work Experience */}
                    <div className="resume-block">
                        <h3 className="resume-heading">PROFESSIONAL WORK EXPERIENCE</h3>

                        <div className="resume-item">
                            <div className="resume-item-header">
                                <strong>Full Stack Web Developer Intern</strong>
                                <span>December 2025 – January 2026</span>
                            </div>
                            <p><strong>Future Intern - Bangalore, Karnataka (Remote)</strong></p>
                            <ul className="resume-list">
                                <li>Developed personal professional portfolio website.</li>
                                <li>Built a Mini-Ecommerce Forefront.</li>
                                <li>Rebranded a famous website with interesting features.</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <div className="resume-item-header">
                                <strong>Digital Marketing Intern</strong>
                                <span>December 2023 – February 2024</span>
                            </div>
                            <p><strong>Marriott International – Kigali, Rwanda</strong></p>
                            <ul className="resume-list">
                                <li>Collaborated with a team of 7 people to draft and edit content for social media platforms that disseminate organization’s primary services.</li>
                                <li>Developed chatbots to handle customer queries and provide customized support in real time to enhance company’s image and reputation.</li>
                                <li>Assisted with the development and implementation of digital marketing campaigns across various channels like email and social media platforms.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Extracurricular Activities */}
                    <div className="resume-block">
                        <h3 className="resume-heading">EXTRACURRICULAR ACTIVITIES</h3>

                        <div className="resume-item">
                            <div className="resume-item-header">
                                <strong>Alumni, Ellen Mac Arthur Foundation</strong>
                                <span>March 2019 – March 2021</span>
                            </div>
                            <p>Developed projects focused on the circular economy. Immersed in how waste and pollution can be eliminated through design and regeneration.</p>
                        </div>

                        <div className="resume-item">
                            <div className="resume-item-header">
                                <strong>Ambassador, UNLEASH Rwanda</strong>
                                <span>December 2023 – January 2024</span>
                            </div>
                            <p>Contested in the Innovation Lab for Sustainable Development Goals. Participated among 1000 changemakers to co-create around 200 solutions for most pressing challenges Africa is facing.</p>
                        </div>

                        <div className="resume-item">
                            <div className="resume-item-header">
                                <strong>Participant, Irena Youth Forum</strong>
                                <span>January 2020 – July 2020</span>
                            </div>
                            <p>Actively worked with around 50 peers to initiate concrete contributions to the global energy discourse. Explored topics like Innovation and renewables and engaged in hands-on experiences to create solutions.</p>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="resume-block">
                        <h3 className="resume-heading">SKILLS</h3>
                        <div className="skills-columns">
                            <ul>
                                <li>Graphic Design</li>
                                <li>Frontend Web development</li>
                                <li>Video editing</li>
                            </ul>
                            <ul>
                                <li>Content creation</li>
                                <li>Problem-solving</li>
                                <li>Effective communication</li>
                            </ul>
                            <ul>
                                <li>Teamwork</li>
                                <li>Decision making</li>
                                <li>Hospitality</li>
                            </ul>
                        </div>
                    </div>

                    {/* Interests */}
                    <div className="resume-block">
                        <h3 className="resume-heading">INTERESTS</h3>
                        <div className="skills-columns">
                            <ul>
                                <li>Reading and storytelling</li>
                            </ul>
                            <ul>
                                <li>Youth Empowerment</li>
                            </ul>
                            <ul>
                                <li>Technology for Social Good</li>
                            </ul>
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="resume-block">
                        <h3 className="resume-heading">LANGUAGES</h3>
                        <div className="skills-columns">
                            <ul>
                                <li>Kinyarwanda – Native</li>
                                <li>English – Fluent</li>
                            </ul>
                            <ul>
                                <li>Kiswahili – Conversational</li>
                                <li>French – Beginner</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
