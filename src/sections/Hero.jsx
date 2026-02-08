import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import PitStopMan from '../components/PitStopMan';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
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
            aerodynamic user experiences. 3+ years of full-throttle development.
          </p>

          <div className="hero-social-row">
            <div className="social-links-v2">
              <a href={resumeData.contact.github} target="https://github.com/amans60331" rel="noopener noreferrer" className="hero-social-icon" title="GitHub">
                <Github size={24} />
              </a>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-icon" title="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href={resumeData.contact.leetcode} target="_blank" rel="noopener noreferrer" className="hero-social-icon" title="LeetCode">
                <Code2 size={24} />
              </a>
              <a href={`mailto:${resumeData.contact.email}`} className="hero-social-icon" title="Gmail">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="hero-pit-crew-fixed">
          <PitStopMan quote="Lights out! Kickstarting the engine." side="right" />
        </div>
      </div>

      <style jsx>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
                      linear-gradient(to right, rgba(0,0,0,1) 40%, transparent);
          position: relative;
          overflow: hidden;
        }
        .hero-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
        .hero-content {
            z-index: 2;
        }
        .starting-lights {
          display: flex;
          gap: 12px;
          margin-bottom: 2.5rem;
        }
        .light {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #1a1a1a;
          border: 2px solid #333;
        }
        .light.red { background: #ef4444; box-shadow: 0 0 15px rgba(239, 68, 68, 0.5); border-color: #ff6b6b; }
        .light.green { background: #10b981; box-shadow: 0 0 25px rgba(16, 185, 129, 0.6); border-color: #34d399; }
        .pulse { animation: blink 1s infinite; }
        
        @keyframes blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.95); }
        }

        .name {
          font-size: clamp(3.5rem, 10vw, 7rem);
          line-height: 0.85;
          background: linear-gradient(135deg, #fff 30%, var(--accent-lightning) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 0 30px rgba(99, 102, 241, 0.2));
        }
        .tagline {
          font-size: clamp(1.2rem, 3vw, 2.8rem);
          color: var(--accent-racing);
          margin-bottom: 2.5rem;
          letter-spacing: 4px;
        }
        .description {
          max-width: 550px;
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 4rem;
          font-weight: 300;
        }

        .hero-social-row {
            display: flex;
            align-items: center;
            gap: 30px;
        }
        .social-links-v2 {
            display: flex;
            gap: 25px;
        }
        .hero-social-icon {
            color: #fff;
            background: rgba(255, 255, 255, 0.03);
            width: 55px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            backdrop-filter: blur(10px);
        }
        .hero-social-icon:hover {
            background: var(--accent-racing);
            border-color: var(--accent-racing);
            transform: translateY(-8px) scale(1.1);
            box-shadow: 0 15px 30px rgba(239, 68, 68, 0.3);
            color: #000;
        }

        .hero-pit-crew-fixed {
            position: relative;
            z-index: 1;
            margin-right: -50px;
        }

        @media (max-width: 1024px) {
            .hero-container {
                flex-direction: column;
                justify-content: center;
                text-align: left;
            }
            .hero-pit-crew-fixed {
                margin-top: 50px;
                margin-right: 0;
                align-self: flex-end;
            }
        }

        @media (max-width: 768px) {
            .hero {
                text-align: center;
                background: linear-gradient(to bottom, rgba(0,0,0,1) 60%, transparent);
            }
            .hero-container {
                align-items: center;
            }
            .starting-lights { 
                justify-content: center; 
            }
            .social-links-v2 {
                justify-content: center;
            }
            .description {
                margin-left: auto;
                margin-right: auto;
            }
        }
      `}</style>
    </section>
  );
};

export default Hero;
