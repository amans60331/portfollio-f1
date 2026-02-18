import React, { Suspense, lazy, useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import './styles/index.css';

// Components
import Preloader from './components/Preloader';
import ScrollTrack from './components/ScrollTrack';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loading sections
import Hero from './sections/Hero';
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <ScrollTrack />

          <div className="main-content">
            <Suspense fallback={<div className="loading">Pit Stop...</div>}>

              <div className="section-wrapper hero-stop">
                <Hero />
              </div>

              <div className="circuit-gap"></div>

              <div className="section-wrapper about-stop">
                <About />
              </div>

              <div className="circuit-gap"></div>

              <div className="section-wrapper experience-stop">
                <Experience />
              </div>

              <div className="circuit-gap"></div>

              <div className="section-wrapper skills-stop">
                <Skills />
              </div>

              <div className="circuit-gap"></div>

              <div className="section-wrapper projects-stop">
                <Projects />
              </div>

              <div className="circuit-gap"></div>

              <div className="section-wrapper contact-stop">
                <Contact />
              </div>

              <Footer />
            </Suspense>
          </div>
        </>
      )}

      <style jsx>{`
        .main-content {
          position: relative;
          z-index: 2;
          width: 100%;
          overflow: hidden;
        }
        .section-wrapper {
          position: relative;
          padding: 5vh 0;
          min-height: 80vh;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .circuit-gap {
          height: 30vh;
        }

        .hero-stop { justify-content: flex-start; padding-left: 10%; }
        .about-stop { justify-content: flex-end; padding-right: 10%; }
        .experience-stop { justify-content: flex-start; padding-left: 10%; }
        .skills-stop { justify-content: flex-end; padding-right: 10%; }
        .projects-stop { justify-content: flex-start; padding-left: 10%; }
        .contact-stop { justify-content: flex-end; padding-right: 10%; }

        @media (max-width: 1024px) {
           .section-wrapper { 
             padding: 5vh 5vw; 
             justify-content: center !important; 
             text-align: center;
           }
        }
      `}</style>
    </div>
  );
}

export default App;
