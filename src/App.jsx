import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';
import AIFounderBackground from './components/AIFounderBackground';
import CursorSpotlight from './components/CursorSpotlight';
import CustomCursor from './components/CustomCursor';
import AnimatedRoutes from './AnimatedRoutes';
import Preloader from './components/Preloader';
import MatrixMode from './components/MatrixMode';
import HackerTerminal from './components/HackerTerminal';
import AIChatbot from './components/AIChatbot';

function App() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <Router>
      <MatrixMode />
      <HackerTerminal />
      
      {!isBooted && <Preloader onComplete={() => setIsBooted(true)} />}
      
      {isBooted && (
        <>
          <CustomCursor />
          <CursorSpotlight />
          <AIChatbot />
          <div className="App dark-theme fade-in-boot">
            <AIFounderBackground />
            <Layout>
              <AnimatedRoutes />
            </Layout>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
