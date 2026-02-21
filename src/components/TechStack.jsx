import React from 'react';
import './TechStack.css';

const technologies = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#339933' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Firebase', color: '#FFCA28' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Framer Motion', color: '#0055FF' },
    { name: 'Git', color: '#F05032' },
    { name: 'Vite', color: '#646CFF' },
    { name: 'Tailwind', color: '#38B2AC' },
    { name: 'Next.js', color: '#000000' }
];

const TechStack = () => {
    return (
        <div className="tech-stack-container">
            <h3 className="tech-stack-title">Technologies I Work With</h3>
            <div className="marquee">
                <div className="marquee-content">
                    {technologies.map((tech, index) => (
                        <div key={index} className="tech-item" style={{ borderColor: tech.color }}>
                            <span className="tech-name" style={{ color: tech.color }}>{tech.name}</span>
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {technologies.map((tech, index) => (
                        <div key={`dup-${index}`} className="tech-item" style={{ borderColor: tech.color }}>
                            <span className="tech-name" style={{ color: tech.color }}>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
