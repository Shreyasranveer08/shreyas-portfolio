import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const bootSequence = [
    "INITIALIZING UNMBRACORE OS v2.0...",
    "ESTABLISHING SECURE CONNECTION...",
    "LOADING NEURAL NETWORKS...",
    "BYPASSING SECURITY PROTOCOLS...",
    "ACCESS GRANTED."
];

const Preloader = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [glitchOut, setGlitchOut] = useState(false);

    useEffect(() => {
        let currentLine = 0;
        
        const interval = setInterval(() => {
            if (currentLine < bootSequence.length) {
                setLines(prev => [...prev, bootSequence[currentLine]]);
                currentLine++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setGlitchOut(true);
                    setTimeout(onComplete, 600); // Wait for glitch out animation
                }, 800);
            }
        }, 400); // Speed of each line appearing

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!glitchOut && (
                <motion.div 
                    className="preloader-container"
                    exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className="preloader-terminal">
                        {lines.map((line, index) => (
                            <motion.div 
                                key={index} 
                                className={`preloader-line ${index === bootSequence.length - 1 ? 'granted' : ''}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.1 }}
                            >
                                <span className="preloader-cursor">{'>'}</span> {line}
                            </motion.div>
                        ))}
                        {lines.length < bootSequence.length && (
                            <motion.div 
                                className="preloader-typing"
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                            >
                                █
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
