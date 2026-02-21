import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import './Portfolio.css';

const Portfolio = () => {
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
                    <h2 className="section-title">Selected Works</h2>
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
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
