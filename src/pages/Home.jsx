import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';

import TechStack from '../components/TechStack';

import GithubGraph from '../components/GithubGraph';
import Services from '../components/Services';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <TechStack />
            <Portfolio />
            <GithubGraph />
            <Services />
            <About />
            <Contact />
        </div>
    );
};

export default Home;
