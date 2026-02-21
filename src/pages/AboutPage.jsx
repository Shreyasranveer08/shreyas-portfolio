import React, { useEffect } from 'react';
import About from '../components/About';
import { motion } from 'framer-motion';

const AboutPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="about-page"
            style={{ paddingTop: '80px', minHeight: '100vh' }}
        >
            <div className="container" style={{ textAlign: 'center', padding: '4rem 0 0' }}>
                <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    About <span className="hero-accent">Me</span>
                </h1>
            </div>
            <About />
        </motion.div>
    );
};

export default AboutPage;
