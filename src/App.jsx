import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';
import MatrixBackground from './components/MatrixBackground';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <Router>
      <MatrixBackground />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
