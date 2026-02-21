import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const ContactPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="contact-page"
            style={{ paddingTop: '80px', minHeight: '100vh' }}
        >
            <div className="container" style={{ textAlign: 'center', padding: '4rem 0 0' }}>
                <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    Contact <span className="hero-accent">Me</span>
                </h1>
            </div>
            <Contact />
        </motion.div>
    );
};

export default ContactPage;
