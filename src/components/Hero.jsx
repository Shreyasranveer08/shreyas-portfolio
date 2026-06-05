import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Button from './Button';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="hero-subtitle-container">
                        <h2 className="hero-subtitle">
                            I am a{' '}
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'UI/UX Designer',
                                    2000,
                                    'AI Enthusiast',
                                    2000,
                                    'Problem Solver',
                                    2000
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                className="typewriter-text"
                            />
                        </h2>
                    </div>
                    <h1 className="hero-title">
                        UNMBR<span className="hero-accent">A</span>CORE
                    </h1>
                    <p className="hero-description">
                        Crafting digital experiences that merge shadow with light.
                        Full-stack developer specializing in modern web technologies and immersive UI.
                    </p>

                    <motion.div 
                        className="hero-actions"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Button variant="primary" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })} icon>
                            View Projects
                        </Button>
                        <Button variant="secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
