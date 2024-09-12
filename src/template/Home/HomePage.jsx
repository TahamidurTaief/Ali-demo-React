import React from 'react';
import Hero from './Hero';
import HeroCard from './HeroCard';
import AgenceSection from './AgenceSection';
import ApprocheSection from './ApprocheSection';
import Comment from './Comment';
import RaisonsSection from './RaisonsSection';
import Accordion from './Accordion';
import LogoSection from './LogoSection';
import BlogSection from './BlogSection';


function HomePage() {
    return ( 

        <>
        <Hero />
        <HeroCard />
        <AgenceSection />
        <ApprocheSection />
        <Comment />
        <RaisonsSection />
        <Accordion />
        <LogoSection />
        <BlogSection />
        </>
        
     );
}

export default HomePage;