import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import profileImg from '../assets/image1.jpg';

const About = () => {
  const [eduExpanded, setEduExpanded] = React.useState(false);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-image-container"
          >
            <div className="profile-frame">
              <img
                src={profileImg}
                alt="Aman Sharma - Performance Engineer"
                className="profile-img"
                loading="lazy"
                decoding="async"
              />
              <div className="frame-neon-border"></div>
            </div>
            <div className="driver-stats">
              <div className="stat-card">
                <span className="stat-label">STATUS</span>
                <span className="stat-value">P1 DEVELOPER</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">EXP</span>
                <span className="stat-value">3+ YEARS</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <h2 className="section-title">Driver Profile</h2>
            <div className="bio-card">
              <p className="highlight-text">
                {resumeData.summary}
              </p>
              <div className="driver-details">
                <div className="detail-row">
                  <span className="tag">📍 BASE</span>
                  <span>{resumeData.location}</span>
                </div>
                <div className="detail-row academy-row" onClick={() => setEduExpanded(!eduExpanded)} style={{ cursor: 'pointer' }}>
                  <span className="tag">🎓 ACADEMY</span>
                  <div className="edu-info">
                    <span className="edu-main">{resumeData.education[0].institution}</span>
                    <button className="see-more-btn racing-font">
                      {eduExpanded ? '[-] HIDE SPECS' : '[+] VIEW SPECS'}
                    </button>
                  </div>
                </div>

                {eduExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="edu-details-expanded"
                  >
                    <p className="degree">{resumeData.education[0].degree}</p>
                    <p className="score">📊 {resumeData.education[0].score} | 📅 {resumeData.education[0].period}</p>

                    <div className="edu-specs">
                      <div className="spec-group">
                        <span className="spec-label">TECH HIGHLIGHTS:</span>
                        <ul>
                          {resumeData.education[0].highlights.map((h, i) => <li key={i}>{h}</li>)}
                        </ul>
                      </div>
                      <div className="spec-group">
                        <span className="spec-label">CORE CIRCUITS (COURSES):</span>
                        <div className="course-tags">
                          {resumeData.education[0].courses.map((c, i) => <span key={i} className="course-tag">{c}</span>)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 100px 0;
          color: #fff;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }
        .about-image-container {
          position: relative;
        }
        .profile-frame {
          position: relative;
          width: 100%;
          max-width: 400px;
          border-radius: 20px;
          overflow: hidden;
          background: #111;
          box-shadow: 0 0 50px rgba(0,0,0,0.5);
        }
        .profile-img {
          width: 100%;
          height: auto;
          display: block;
          filter: contrast(1.1) brightness(1.1);
        }
        .frame-neon-border {
          position: absolute;
          inset: 0;
          border: 2px solid var(--accent-lightning);
          border-radius: 20px;
          pointer-events: none;
          box-shadow: inset 0 0 20px var(--accent-lightning);
          opacity: 0.5;
        }
        .driver-stats {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }
        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 15px 25px;
          border-left: 4px solid var(--accent-racing);
          flex: 1;
        }
        .stat-label {
          display: block;
          font-size: 0.7rem;
          color: var(--accent-lightning);
          letter-spacing: 2px;
          margin-bottom: 5px;
        }
        .stat-value {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 1.2rem;
        }
        .bio-card {
          background: rgba(15, 23, 42, 0.6);
          padding: 40px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        .highlight-text {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.9);
        }
        .driver-details {
          display: grid;
          gap: 15px;
        }
        .detail-row {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 0.9rem;
        }
        .tag {
          color: var(--accent-racing);
          font-weight: 700;
          min-width: 100px;
        }
        .edu-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex: 1;
        }
        .see-more-btn {
          background: transparent;
          border: none;
          color: var(--accent-lightning);
          font-size: 0.7rem;
          cursor: pointer;
          letter-spacing: 1px;
          padding: 5px 10px;
          border: 1px solid rgba(99, 102, 241, 0.3);
          transition: all 0.3s ease;
        }
        .see-more-btn:hover {
          background: var(--accent-lightning);
          color: #000;
        }
        .edu-details-expanded {
          margin-top: 10px;
          padding: 20px;
          background: rgba(0, 0, 0, 0.3);
          border-left: 2px solid var(--accent-racing);
          border-radius: 0 10px 10px 0;
        }
        .degree {
          font-weight: 700;
          color: #fff;
          margin-bottom: 5px;
        }
        .score {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 20px;
          display: flex;
          gap: 15px;
          align-items: center;
        }
        .edu-specs {
          display: grid;
          gap: 20px;
        }
        .spec-label {
          display: block;
          font-size: 0.7rem;
          color: var(--accent-lightning);
          font-weight: 800;
          margin-bottom: 8px;
        }
        .spec-group ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .spec-group li {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 5px;
          padding-left: 15px;
          position: relative;
        }
        .spec-group li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent-racing);
        }
        .course-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .course-tag {
          font-size: 0.7rem;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-stop {
            justify-content: center;
          }
          .edu-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
