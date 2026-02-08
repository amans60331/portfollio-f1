import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import PitStopMan from '../components/PitStopMan';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-layout">
          <div className="experience-pit-crew">
            <PitStopMan quote="Full throttle through the career sector!" side="left" inline={true} />
          </div>

          <div className="experience-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Where I've Worked
            </motion.h2>

            <div className="timeline">
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="experience-item"
                >
                  <div className="exp-header">
                    <h3 className="racing-font">{exp.role} <span className="company">@ {exp.company}</span></h3>
                    <p className="period">{exp.period}</p>
                  </div>
                  <ul className="highlights">
                    {exp.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .experience-layout {
            display: grid;
            grid-template-columns: 250px 1fr;
            gap: 50px;
            align-items: flex-start;
        }
        .experience-item {
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .company { color: var(--accent-racing); }
        .period { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem; }
        .highlights { list-style: square; padding-left: 20px; color: var(--text-secondary); }
        .highlights li { margin-bottom: 10px; }
        
        @media (max-width: 900px) {
            .experience-layout { grid-template-columns: 1fr; }
            .experience-pit-crew { order: 2; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
