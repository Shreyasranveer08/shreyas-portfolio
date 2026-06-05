import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import DecryptText from './DecryptText';
import { projects } from '../data/projects';
import './Portfolio.css';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title text-gradient">
                        <DecryptText text="Selected Works" delay={200} />
                    </h2>
                    <p className="section-subtitle">A collection of digital artifacts.</p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ height: '100%' }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <Tilt 
                                tiltMaxAngleX={8} 
                                tiltMaxAngleY={8} 
                                glareEnable={true} 
                                glareMaxOpacity={0.2} 
                                glareColor="#00f0ff" 
                                glarePosition="all" 
                                scale={1.03}
                                transitionSpeed={1500}
                                style={{ height: '100%' }}
                            >
                                <ProjectCard project={project} />
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Expansive Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal 
                        project={selectedProject} 
                        onClose={() => setSelectedProject(null)} 
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
