import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import Button from './Button';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [project]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div 
                className="modal-backdrop"
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                transition={{ duration: 0.4 }}
                onClick={onClose}
            >
                <motion.div 
                    className="modal-content glass-panel"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="modal-close" onClick={onClose}>
                        <X size={28} />
                    </button>
                    
                    <div className="modal-grid">
                        <div className="modal-image-wrapper">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="modal-image" />
                            ) : (
                                <div className="modal-placeholder" />
                            )}
                            <div className="modal-image-overlay"></div>
                        </div>

                        <div className="modal-info">
                            <h2 className="modal-title text-gradient">{project.title}</h2>
                            <p className="modal-description">{project.description}</p>
                            
                            <div className="modal-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="modal-tag">{tag}</span>
                                ))}
                            </div>

                            <div className="modal-actions">
                                {project.links?.live && (
                                    <Button 
                                        variant="primary" 
                                        onClick={() => window.open(project.links.live, '_blank')}
                                        icon
                                    >
                                        Launch Project
                                    </Button>
                                )}
                                {project.links?.github && (
                                    <Button 
                                        variant="secondary" 
                                        onClick={() => window.open(project.links.github, '_blank')}
                                        className="github-btn"
                                    >
                                        <Github size={20} style={{ marginRight: '8px' }} />
                                        Source Code
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
