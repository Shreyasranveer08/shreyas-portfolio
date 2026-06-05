import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Button from './Button';
import TechStack from './TechStack';
import GithubGraph from './GithubGraph';
import ResumeModal from './ResumeModal';
import DecryptText from './DecryptText';
import './About.css';

const tiltProps = {
    tiltMaxAngleX: 5,
    tiltMaxAngleY: 5,
    glareEnable: true,
    glareMaxOpacity: 0.15,
    glareColor: "lightblue",
    glarePosition: "all",
    scale: 1.02,
    transitionSpeed: 2000,
};

const About = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title text-gradient">
                        <DecryptText text="About Me" delay={200} />
                    </h2>
                    <p className="section-subtitle">Architecting digital experiences.</p>
                </motion.div>

                <div className="bento-grid">
                    {/* Main Intro Card */}
                    <motion.div
                        className="bento-item col-span-2 row-span-2 intro-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Tilt {...tiltProps} className="bento-card glass-panel tilt-wrapper">
                            <h3>Shreyas Ranveer</h3>
                            <p className="about-text">
                                I am the mind behind <strong>Unmbracore</strong>. I thrive at the intersection of AI, design, and engineering.
                                My passion lies in building intelligent applications that not only function flawlessly but provide an immersive, state-of-the-art user experience.
                            </p>
                            <p className="about-text">
                                With a deep background in full-stack architecture, I tackle complex challenges by merging sophisticated backends with premium glassmorphic interfaces.
                            </p>
                            <Button variant="primary" onClick={() => setIsResumeOpen(true)} className="mt-4">
                                View Resume
                            </Button>
                        </Tilt>
                    </motion.div>

                    {/* Tech Stack Marquee Card */}
                    <motion.div
                        className="bento-item col-span-1 row-span-1 tech-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <Tilt {...tiltProps} className="bento-card glass-panel tilt-wrapper">
                            <TechStack />
                        </Tilt>
                    </motion.div>

                    {/* Image / Portrait Card */}
                    <motion.div
                        className="bento-item col-span-1 row-span-2 image-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Tilt {...tiltProps} className="bento-card glass-panel tilt-wrapper p-0">
                            <div className="image-wrapper">
                                <img src="/shreyas-portrait.JPG" alt="Shreyas" className="about-image" />
                                <div className="image-overlay"></div>
                            </div>
                        </Tilt>
                    </motion.div>

                    {/* Github Graph Card */}
                    <motion.div
                        className="bento-item col-span-2 row-span-1 github-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Tilt {...tiltProps} className="bento-card glass-panel tilt-wrapper">
                            <GithubGraph />
                        </Tilt>
                    </motion.div>
                </div>
            </div>

            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </section>
    );
};

export default About;

