import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import './GithubGraph.css';

const GithubGraph = () => {
    return (
        <section className="github-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="github-content"
                >
                    <h2 className="section-title">Code <span className="hero-accent">Consistency</span></h2>
                    <p className="section-subtitle">
                        My contributions to the open-source world and private projects.
                    </p>

                    <div className="calendar-wrapper">
                        <GitHubCalendar
                            username="Shreyasranveer08"
                            colorScheme="dark"
                            blockSize={12}
                            blockMargin={5}
                            fontSize={14}
                            theme={{
                                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GithubGraph;
