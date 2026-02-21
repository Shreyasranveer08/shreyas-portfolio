import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Button from './Button';
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceID = 'service_duk2iuf';
        const templateID = 'template_1bxchz9';
        const publicKey = 'bvbPT6ltqT1fddklw';

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        console.log('Using Service:', serviceID);
        console.log('Using Template:', templateID);
        console.log('Using Public Key:', publicKey);

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.log('FAILED...', error);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="contact-content"
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Have a project in mind? Let's build something extraordinary together.
                    </p>

                    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="form-input form-textarea"
                            ></textarea>
                        </div>

                        <div className="form-actions">
                            <Button
                                variant="primary"
                                className="submit-btn"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </Button>
                        </div>

                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="status-message success"
                                >
                                    Message sent successfully!
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="status-message error"
                                >
                                    Failed to send message. Please try again.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
