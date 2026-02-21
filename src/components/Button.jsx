import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    icon = false,
    onClick,
    className = ''
}) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`btn btn-${variant} ${className}`}
            onClick={onClick}
        >
            {children}
            {icon && <ArrowRight size={18} style={{ marginLeft: '8px' }} />}
        </motion.button>
    );
};

export default Button;
