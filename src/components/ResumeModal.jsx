import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="resume-modal-overlay"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="resume-modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="resume-header">
                        <h2>Resume Preview</h2>
                        <div className="resume-actions">
                            <a href="/resume.pdf" download className="resume-download-btn">
                                <Download size={20} /> Download
                            </a>
                            <button className="resume-close-btn" onClick={onClose}>
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="resume-body">
                        {/* Try to embed PDF */}
                        <object data="/resume.pdf" type="application/pdf" width="100%" height="100%">
                            <div className="resume-fallback">
                                <p>Resume file not found or browser doesn't support PDF preview.</p>
                                <a href="/resume.pdf" download className="fallback-link">Download PDF instead</a>
                            </div>
                        </object>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ResumeModal;
