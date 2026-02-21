import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
