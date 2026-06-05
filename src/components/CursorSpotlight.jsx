import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CursorSpotlight.css';

const CursorSpotlight = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <motion.div
            className="cursor-spotlight"
            animate={{
                x: mousePosition.x - 200, // half of width to center
                y: mousePosition.y - 200, // half of height to center
            }}
            transition={{
                type: "tween",
                ease: "backOut",
                duration: 0.1, // Quick follow
            }}
        />
    );
};

export default CursorSpotlight;
