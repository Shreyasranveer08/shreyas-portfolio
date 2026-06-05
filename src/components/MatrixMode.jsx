import React, { useEffect, useState } from 'react';
import './MatrixMode.css';

const MatrixMode = () => {
    const [inputBuffer, setInputBuffer] = useState('');
    const secretCode = 'matrix';

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ignore if typing in an input or textarea
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (!/^[a-zA-Z]$/.test(e.key)) return;

            setInputBuffer(prev => {
                const newBuffer = (prev + e.key.toLowerCase()).slice(-secretCode.length);
                if (newBuffer === secretCode) {
                    document.body.classList.toggle('matrix-theme');
                    return ''; // Reset
                }
                return newBuffer;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return null;
};

export default MatrixMode;
