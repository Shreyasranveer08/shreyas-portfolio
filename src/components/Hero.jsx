import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import './Hero.css';

const roles = ["Full Stack Developer", "UI/UX Designer", "AI Enthusiast", "Problem Solver"];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typeSpeed = isDeleting ? 50 : 150;

        if (!isDeleting && text === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        }

        if (isDeleting && text === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setText(currentRole.substring(0, isDeleting ? text.length - 1 : text.length + 1));
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="hero-subtitle">I am a <span className="typewriter-text">{text}</span><span className="cursor">|</span></h2>
                    <h1 className="hero-title">
                        UNMBR<span className="hero-accent">A</span>CORE
                    </h1>
                    <p className="hero-description">
                        Crafting digital experiences that merge shadow with light.
                        Full-stack developer specializing in modern web technologies and immersive UI.
                    </p>

                    <div className="hero-actions">
                        <Button variant="primary" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })} icon>
                            View Projects
                        </Button>
                        <Button variant="secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </Button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
