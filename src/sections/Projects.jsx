import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import PitStopMan from '../components/PitStopMan';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-layout">
          <div className="projects-pit-crew">
            <PitStopMan quote="Entering the high-speed project circuit." side="left" inline={true} />
          </div>

          <div className="projects-content">
            <h2 className="section-title racing-font">The Grand Prix Circuit</h2>

            <div className="circuit-grid">
              {resumeData.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="paddock-card"
                >
                  <div className="card-header">
                    <span className="lap-counter racing-font">LAP 0{index + 1}</span>
                    <div className="status-light green"></div>
                  </div>

                  <div className="card-content">
                    <h3 className="project-name racing-font">{project.title}</h3>
                    <p className="project-details">{project.description}</p>

                    <div className="telemetry-box">
                      <div className="stat">
                        <span className="label">PERFORMANCE</span>
                        <div className="bar"><div className="fill" style={{ width: '95%' }}></div></div>
                      </div>
                      <div className="stat">
                        <span className="label">AERODYNAMICS</span>
                        <div className="bar"><div className="fill" style={{ width: '88%' }}></div></div>
                      </div>
                    </div>

                    {project.tech && (
                      <div className="pit-crew-tech">
                        {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                      </div>
                    )}
                  </div>

                  <div className="card-footer">
                    <div className="racing-stripes"></div>
                    <a href="#" className="view-link racing-font">VIEW ENTRY ⏵</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects {
          padding: 100px 0;
          background: #000;
          position: relative;
        }
        .projects-layout {
            display: grid;
            grid-template-columns: 250px 1fr;
            gap: 50px;
        }
        .circuit-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }
        .paddock-card {
          background: #0a0a0a;
          border: 1px solid #222;
          border-left: 4px solid var(--accent-racing);
          padding: 25px;
          position: relative;
          transition: all 0.3s ease;
        }
        .paddock-card:hover {
          border-color: var(--accent-lightning);
          transform: translateY(-5px) skewX(-2deg);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .lap-counter {
          color: var(--accent-racing);
          font-size: 0.8rem;
        }
        .status-light {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 10px #22c55e;
        }
        .project-name {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #fff;
        }
        .project-details {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 25px;
        }
        .telemetry-box {
          background: #111;
          padding: 15px;
          border-radius: 4px;
          margin-bottom: 25px;
        }
        .stat {
          margin-bottom: 10px;
        }
        .stat .label {
          font-size: 0.6rem;
          color: var(--text-muted);
          display: block;
          margin-bottom: 4px;
        }
        .stat .bar {
          height: 3px;
          background: #222;
          border-radius: 2px;
        }
        .stat .fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-lightning), var(--accent-racing));
        }
        .pit-crew-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .tech-badge {
          font-family: monospace;
          font-size: 0.7rem;
          padding: 4px 10px;
          background: #1a1a1a;
          color: var(--accent-lightning);
          border: 1px solid #333;
        }
        .card-footer {
          margin-top: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .view-link {
          font-size: 0.8rem;
          color: #fff;
          text-decoration: none;
        }
        .view-link:hover {
          color: var(--accent-racing);
        }
        .racing-stripes {
          height: 4px;
          width: 60px;
          background: repeating-linear-gradient(
            90deg,
            var(--accent-racing) 0,
            var(--accent-racing) 10px,
            transparent 10px,
            transparent 20px
          );
        }
        @media (max-width: 900px) {
          .projects-layout { grid-template-columns: 1fr; }
          .projects-pit-crew { order: 2; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
