import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import PitStopMan from '../components/PitStopMan';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header-row">
          <h2 className="section-title">About Me</h2>
          <div className="about-pit-crew">
            <PitStopMan quote="Box Box! Reviewing the driver profile telemetry." side="right" inline={true} />
          </div>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Hello! I'm Aman, a Software Engineer based in Pune, Maharashtra.
              I enjoy creating things that live on the internet, whether that be websites,
              applications, or anything in between.
            </p>
            <p>
              My journey in web development started back in 2019 when I joined PICT.
              Fast-forward to today, I've had the privilege of working at a
              <span className="accent"> digital advertising technology company</span> as a Frontend Specialist.
            </p>
            <p>
              I'm passionate about building high-quality, performant, and accessible
              digital experiences. I've also solved over <span className="accent">400 problems</span> on various
              coding platforms, keeping my problem-solving skills sharp.
            </p>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="backdrop"></div>
              <div className="image-placeholder">
                <span className="icon">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-header-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 3rem;
        }
        .about-grid {
            display: grid;
            grid-template-columns: 3fr 2fr;
            gap: 50px;
            align-items: center;
        }
        .accent {
            color: var(--accent-lightning);
            font-weight: bold;
        }
        @media (max-width: 768px) {
            .about-grid { grid-template-columns: 1fr; }
            .about-header-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
};

export default About;
