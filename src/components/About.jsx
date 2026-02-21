import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import './About.css';
import ResumeModal from './ResumeModal';

const skills = [
    "JavaScript (ES6+)", "React.js", "Node.js", "TypeScript",
    "HTML5 & CSS3", "Framer Motion", "Git", "UI/UX Design"
];

const About = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="about-content"
                    >
                        <h2 className="section-title">Behind the Code</h2>
                        <p className="about-text">
                            I am <strong>Shreyas Ranveer</strong>, the mind behind <strong>Unmbracore</strong>. I thrive at the intersection of design and engineering.
                            My passion lies in building applications that not only function flawlessly but also provide
                            an immersive user experience.
                        </p>
                        <p className="about-text">
                            With a background in full-stack development, I tackle problems from both the user's perspective
                            and the system's architecture. I believe in clean code, pixel-perfect designs, and the power of
                            web technologies to tell stories.
                        </p>

                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <span key={index} className="skill-chip">{skill}</span>
                            ))}
                        </div>

                        <Button variant="primary" onClick={() => setIsResumeOpen(true)}>
                            View Resume
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="about-visual"
                    >
                        <div className="image-wrapper">
                            <img src="/shreyas-portrait.JPG" alt="Shreyas Ranveer" className="about-image" />
                            <div className="image-overlay"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </section>
    );
};

export default About;

