import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/sounds';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    const { title, description, image, tags, links } = project;

    return (
        <motion.div
            className="project-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
        >
            <div
                className="card-image-container"
                style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
            >
                {image ? (
                    <img src={image} alt={title} className="card-image" loading="lazy" />
                ) : (
                    <div className="card-placeholder" />
                )}
            </div>

            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>

                <div className="card-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>

                <div className="card-actions-bottom" onClick={(e) => e.stopPropagation()}>
                    {links?.github && (
                        <a href={links.github} target="_blank" rel="noopener noreferrer" className="bottom-link">
                            <Github size={16} /> Source
                        </a>
                    )}
                    {links?.live && (
                        <a href={links.live} target="_blank" rel="noopener noreferrer" className="bottom-link">
                            <ExternalLink size={16} /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
