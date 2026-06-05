import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HackerTerminal.css';

const HackerTerminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState(() => {
        const saved = localStorage.getItem('unmbracore-terminal');
        if (saved) {
            try { return JSON.parse(saved); } catch(e) {}
        }
        return ['UNMBRACORE TERMINAL v2.0.0', 'Type "help" for a list of commands.'];
    });
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    const endRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === '`' || e.key === '~') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
        if (endRef.current) {
            endRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isOpen, history]);

    // Save history to local storage
    useEffect(() => {
        localStorage.setItem('unmbracore-terminal', JSON.stringify(history));
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, `> ${input}`];
            
            if (cmd === 'clear') {
                setHistory([]);
            } else if (cmd === 'help') {
                newHistory.push('Available commands:');
                newHistory.push('  whoami    - Display user identity');
                newHistory.push('  projects  - List active missions');
                newHistory.push('  matrix    - Enter the matrix');
                newHistory.push('  theme     - Change theme (cyberpunk/matrix)');
                newHistory.push('  clear     - Clear terminal history');
                newHistory.push('  exit      - Close terminal');
                setHistory(newHistory);
            } else if (cmd === 'whoami') {
                newHistory.push('Shreyas Ranveer - AI Engineer & Full Stack Developer.');
            } else if (cmd === 'projects') {
                newHistory.push('Check the Selected Works section below for the latest intel.');
            } else if (cmd === 'matrix') {
                document.body.classList.toggle('matrix-theme');
                newHistory.push('Matrix mode toggled. Follow the white rabbit.');
            } else if (cmd.startsWith('theme ')) {
                const theme = cmd.split(' ')[1];
                if (theme === 'matrix') {
                    document.body.className = 'matrix-theme';
                    newHistory.push('Theme set to: matrix');
                } else if (theme === 'cyberpunk') {
                    document.body.className = '';
                    newHistory.push('Theme set to: cyberpunk (default)');
                } else {
                    newHistory.push(`Unknown theme: ${theme}. Available: cyberpunk, matrix`);
                }
                setHistory(newHistory);
            } else if (cmd === 'exit') {
                setIsOpen(false);
                setHistory(newHistory);
            } else if (cmd !== '') {
                newHistory.push(`Command not found: ${cmd}`);
                setHistory(newHistory);
            } else {
                setHistory(newHistory);
            }
            
            setInput('');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="hacker-terminal"
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                    <div className="terminal-header">
                        <span>root@unmbracore:~</span>
                        <button onClick={() => setIsOpen(false)}>_ x</button>
                    </div>
                    <div className="terminal-body">
                        {history.map((line, i) => (
                            <div key={i} className="terminal-line">{line}</div>
                        ))}
                        <div className="terminal-input-line">
                            <span className="terminal-prompt">{'>'}</span>
                            <input 
                                ref={inputRef}
                                type="text" 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                className="terminal-input"
                                autoFocus
                            />
                        </div>
                        <div ref={endRef} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HackerTerminal;
