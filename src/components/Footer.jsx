import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>Unmbracore</h3>
                    <p>Designing the shadows. Building the light.</p>
                </div>

                <div className="footer-socials">
                    <a href="https://github.com/Shreyasranveer08" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    <a href="https://x.com/ranveer_sh6559" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
                    <a href="https://www.linkedin.com/in/shreyas-ranveer-949b9b29a/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                    <a href="https://www.instagram.com/umbracore._/" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                </div>        </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Unmbracore. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
