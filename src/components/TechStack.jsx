import React from 'react';
import { Cloud } from 'react-icon-cloud';
import './TechStack.css';

const technologies = [
    'React', 'Node.js', 'JavaScript', 'TypeScript', 'Firebase', 
    'MongoDB', 'Python', 'Framer Motion', 'Git', 'Vite', 'Tailwind CSS', 
    'Next.js', 'Docker', 'AWS', 'GraphQL', 'Supabase', 'C++', 'Java',
    'OpenAI', 'LangChain', 'TensorFlow', 'PostgreSQL'
];

const colors = [
    'var(--color-accent-cyan)', 
    'var(--color-accent-red)', 
    '#ffffff'
];

const TechStack = () => {
    return (
        <div className="tech-stack-container">
            <h3 className="tech-stack-title">Core Competencies</h3>
            <div className="cloud-wrapper">
                <div className="cloud-glow-bg"></div>
                <Cloud
                    options={{
                        clickToFront: 500,
                        depth: 1,
                        imageScale: 2.5,
                        initial: [0.1, -0.1],
                        outlineColour: '#0000',
                        reverse: true,
                        tooltip: 'native',
                        tooltipDelay: 0,
                        wheelZoom: false,
                        shape: 'sphere'
                    }}
                >
                    {technologies.map((tech, i) => (
                        <a key={i} href="#" onClick={(e) => e.preventDefault()} style={{
                            color: colors[i % colors.length],
                            fontSize: '2rem',
                            fontWeight: '900',
                            fontFamily: 'var(--font-family-mono)',
                            textShadow: `0 0 15px ${colors[i % colors.length]}`
                        }}>
                            {tech}
                        </a>
                    ))}
                </Cloud>
            </div>
        </div>
    );
};

export default TechStack;
