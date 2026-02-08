import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import PitStopMan from '../components/PitStopMan';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-content"
        >
          <div className="starting-lights">
            <div className="light red"></div>
            <div className="light red"></div>
            <div className="light green pulse"></div>
          </div>

          <h1 className="name racing-font">
            {resumeData.name}
          </h1>
          <h2 className="tagline racing-font">
            The Performance Engineer
          </h2>

          <p className="description">
            Specializing in high-speed frontend architecture and
            aerodynamic user experiences. 2+ years of full-throttle development.
          </p>

          <div className="hero-footer-row">
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary racing-font">
                Enter The Circuit
              </a>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline racing-font">
                Join The Crew
              </a>
            </div>
            <div className="hero-pit-crew">
              <PitStopMan quote="Lights out! Kickstarting the engine." side="right" inline={true} />
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(to right, rgba(0,0,0,1) 40%, transparent);
          position: relative;
        }
        .hero-footer-row {
          display: flex;
          align-items: flex-end;
          gap: 50px;
        }
        .starting-lights {
          display: flex;
          gap: 10px;
          margin-bottom: 2rem;
        }
        .light {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #333;
        }
        .light.red { background: #ef4444; box-shadow: 0 0 10px #ef4444; }
        .light.green { background: #22c55e; box-shadow: 0 0 20px #22c55e; }
        .pulse { animation: blink 1s infinite; }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .name {
          font-size: clamp(3rem, 10vw, 6rem);
          line-height: 0.9;
          background: linear-gradient(180deg, #fff 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }
        .tagline {
          font-size: clamp(1.2rem, 3vw, 2.5rem);
          color: var(--accent-racing);
          margin-bottom: 2rem;
        }
        .description {
          max-width: 500px;
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 3rem;
        }
        .hero-actions {
          display: flex;
          gap: 20px;
        }
        @media (max-width: 768px) {
           .hero-footer-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
