import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const isClickable = e.target.tagName === 'A' || 
                                e.target.tagName === 'BUTTON' || 
                                e.target.closest('button') || 
                                e.target.closest('a') || 
                                e.target.closest('.project-card') || 
                                e.target.closest('.bento-card') ||
                                e.target.closest('canvas'); // For 3D cloud
            setIsHovering(isClickable);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Only render on desktop to avoid issues on mobile touches
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        return null;
    }

    return (
        <>
            <motion.div
                className="cursor-dot"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1
                }}
                transition={{ type: "tween", ease: "linear", duration: 0 }}
            />
            <motion.div
                className="cursor-ring"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                    borderColor: isHovering ? 'rgba(0, 240, 255, 0.8)' : 'rgba(255, 42, 122, 0.5)'
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            />
        </>
    );
};

export default CustomCursor;
