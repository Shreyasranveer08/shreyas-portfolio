import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    const { title, description, image, tags, links } = project;

    return (
        <motion.div
            className="project-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
        >
            <div
                className="card-image-container"
                onClick={(e) => {
                    if (e.target.closest('.card-links')) return;
                    if (links?.live) window.open(links.live, '_blank');
                }}
                style={{ cursor: links?.live ? 'pointer' : 'default' }}
            >
                {image ? (
                    <img src={image} alt={title} className="card-image" loading="lazy" />
                ) : (
                    <div className="card-placeholder" />
                )}
                <div className="card-overlay">
                    <div className="card-links">
                        {links.github && (
                            <a href={links.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                                <Github size={24} />
                            </a>
                        )}
                        {links.live && (
                            <a href={links.live} target="_blank" rel="noopener noreferrer" className="icon-link">
                                <ExternalLink size={24} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>

                <div className="card-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
