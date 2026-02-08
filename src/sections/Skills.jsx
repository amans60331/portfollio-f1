import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import PitStopMan from '../components/PitStopMan';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header-row">
          <h2 className="section-title racing-font">The Paddock Tuning</h2>
          <div className="skills-pit-crew">
            <PitStopMan quote="Optimizing the tech fuel mix. Powering up!" side="right" inline={true} />
          </div>
        </div>

        <div className="paddock-grid">
          <div className="engine-bay">
            <h3 className="racing-font">Core Engine</h3>
            <div className="gauges">
              {resumeData.skills.languages.map(skill => (
                <div key={skill} className="gauge-item">
                  <div className="gauge-label">{skill}</div>
                  <div className="gauge-track">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="gauge-fill"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="turbo-boost">
            <h3 className="racing-font">Turbo Boosters</h3>
            <div className="booster-tags">
              {resumeData.skills.frameworks.map(skill => (
                <motion.span
                  whileHover={{ scale: 1.1, skewX: -10 }}
                  key={skill}
                  className="booster-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills {
          padding: 100px 0;
          background: linear-gradient(45deg, #000 0%, #0a0a0a 100%);
        }
        .skills-header-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 3rem;
        }
        .paddock-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }
        h3 {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 1.2rem;
        }
        .gauge-item {
          margin-bottom: 20px;
        }
        .gauge-label {
          font-family: monospace;
          margin-bottom: 5px;
          font-size: 0.9rem;
          color: var(--accent-lightning);
        }
        .gauge-track {
          height: 6px;
          background: #111;
          border-radius: 3px;
          overflow: hidden;
          border: 1px solid #222;
        }
        .gauge-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-lightning), var(--accent-racing));
          box-shadow: 0 0 10px var(--accent-lightning);
        }
        .booster-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }
        .booster-tag {
          padding: 10px 20px;
          background: #111;
          border: 1px solid #333;
          border-left: 4px solid var(--accent-racing);
          color: #fff;
          font-size: 0.9rem;
          cursor: default;
        }
        @media (max-width: 768px) {
          .paddock-grid { grid-template-columns: 1fr; }
          .skills-header-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
