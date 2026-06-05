import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { playClickSound } from '../utils/sounds';
import './AIChatbot.css';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "System initialized. How can I assist you with Shreyas's profile?", sender: 'ai' }
    ]);
    const [input, setInput] = useState('');
    const endRef = useRef(null);

    useEffect(() => {
        if (endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!input.trim()) return;
        
        playClickSound();
        const userMsg = input.trim();
        setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
        setInput('');

        // Simulate AI thinking
        setTimeout(() => {
            let aiResponse = "I'm a simulated AI. To contact Shreyas directly, please use his email or LinkedIn.";
            
            const lowerMsg = userMsg.toLowerCase();
            
            if (lowerMsg.match(/(project|work|portfolio|build|made|create)/)) {
                aiResponse = "Shreyas has built incredible AI/Full-stack projects. Check out the 'Selected Works' section below to see his digital artifacts!";
            } else if (lowerMsg.match(/(tech|skill|know|language|stack|framework)/)) {
                aiResponse = "He specializes in React, Node.js, Next.js, Firebase, and integrating advanced AI/LLM models. You can interact with his 3D skill globe in the About section.";
            } else if (lowerMsg.match(/(hello|hi|hey|greetings)/)) {
                aiResponse = "Hello! I am the UNMBRACORE assistant. How can I help you navigate Shreyas's profile today?";
            } else if (lowerMsg.match(/(matrix)/)) {
                aiResponse = "Try typing 'matrix' directly on your keyboard. Follow the white rabbit.";
            } else if (lowerMsg.match(/(contact|email|reach|hire|message)/)) {
                aiResponse = "You can reach Shreyas at his professional email or via LinkedIn. Check the bottom of the page for direct links.";
            } else if (lowerMsg.match(/(who are you|what are you|bot|ai)/)) {
                aiResponse = "I am UNMBRACORE AI, a highly advanced (but offline) virtual assistant created by Shreyas to guide you through his portfolio.";
            } else if (lowerMsg.match(/(joke|funny|laugh)/)) {
                aiResponse = "Why do programmers prefer dark mode? Because light attracts bugs.";
            } else if (lowerMsg.match(/(resume|cv|download)/)) {
                aiResponse = "You can view Shreyas's resume by clicking the 'View Resume' button in the About section.";
            } else if (lowerMsg.match(/(education|college|study|degree)/)) {
                aiResponse = "Shreyas has a strong foundation in Computer Science and Engineering, constantly learning and pushing the boundaries of web tech.";
            }

            setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
        }, 800);
    };

    return (
        <div className="chatbot-wrapper">
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="chatbot-window glass-panel"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        <div className="chatbot-header">
                            <div className="chatbot-title">
                                <span className="status-dot"></span>
                                UNMBRACORE AI
                            </div>
                            <button onClick={() => setIsOpen(false)} className="close-btn"><X size={18} /></button>
                        </div>
                        
                        <div className="chatbot-messages">
                            {messages.map((msg, i) => (
                                <div key={i} className={`chat-bubble ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            ))}
                            <div ref={endRef} />
                        </div>

                        <div className="chatbot-input-area">
                            <input 
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask me anything..."
                            />
                            <button onClick={handleSend}><Send size={18} /></button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button 
                className="chatbot-toggle"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>
        </div>
    );
};

export default AIChatbot;
