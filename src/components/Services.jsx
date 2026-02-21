import { motion } from 'framer-motion';
import { Code, Layout, BrainCircuit } from 'lucide-react';
import './Services.css';

const services = [
    {
        title: "Full-Stack Development",
        description: "Building scalable web and mobile applications from scratch using modern tech stacks like MERN and Next.js.",
        icon: <Code size={40} />
    },
    {
        title: "UI/UX Design",
        description: "Crafting intuitive and visually stunning interfaces that prioritize user experience and brand identity.",
        icon: <Layout size={40} />
    },
    {
        title: "AI Integration",
        description: "Empowering applications with intelligent features using LLMs, computer vision, and predictive analytics.",
        icon: <BrainCircuit size={40} />
    }
];

const Services = () => {
    return (
        <section className="services-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="services-header"
                >
                    <h2 className="section-title">What I <span className="hero-accent">Do</span></h2>
                    <p className="section-subtitle">Combining creativity with technical expertise to deliver results.</p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="service-card"
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
