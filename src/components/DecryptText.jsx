import React, { useState, useEffect } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

const DecryptText = ({ text, delay = 0, className = "" }) => {
    const [displayText, setDisplayText] = useState(text.replace(/./g, '█'));
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (hasAnimated) return;

        let iteration = 0;
        let timeout;

        // Delay before starting animation
        const startTimeout = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayText(text.split('').map((letter, index) => {
                    if (index < iteration) {
                        return text[index];
                    }
                    if (text[index] === ' ') return ' ';
                    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                }).join(''));

                if (iteration >= text.length) {
                    clearInterval(interval);
                    setHasAnimated(true);
                }

                iteration += 1 / 2; // Speed of decryption
            }, 30);

            timeout = interval;
        }, delay);

        return () => {
            clearTimeout(startTimeout);
            clearInterval(timeout);
        };
    }, [text, delay, hasAnimated]);

    return (
        <span className={className}>
            {displayText}
        </span>
    );
};

export default DecryptText;
