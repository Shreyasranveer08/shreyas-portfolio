import { useEffect } from 'react';
import Portfolio from '../components/Portfolio';
import { motion } from 'framer-motion';

const Projects = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="projects-page"
            style={{ paddingTop: '80px', minHeight: '100vh' }}
        >
            <div className="container" style={{ textAlign: 'center', padding: '4rem 0 0' }}>
                <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    All <span className="hero-accent">Projects</span>
                </h1>
                <p className="section-subtitle">
                    A comprehensive list of my digital craftsmanship.
                </p>
            </div>
            <Portfolio />
        </motion.div>
    );
};

export default Projects;
