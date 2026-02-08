import React from 'react';
import { Cpu } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const techStack = [
    { name: 'React 19', category: 'Chassis' },
    { name: 'Vite', category: 'Engine' },
    { name: 'Framer Motion', category: 'Aero' },
    { name: 'Lucide Icons', category: 'Sensors' },
    { name: 'Lenis Scroll', category: 'Tires' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-line"></div>

        <div className="footer-content">
          <div className="footer-left">
            <h2 className="racing-font logo-small">AM<span className="accent">AN</span></h2>
            <p className="tagline">Performance-First Engineering</p>

            <div className="tech-specs">
              <h4 className="specs-title racing-font"><Cpu size={14} /> Engine Stats</h4>
              <div className="specs-grid">
                {techStack.map((tech) => (
                  <div key={tech.name} className="spec-item">
                    <span className="spec-cat">{tech.category}:</span>
                    <span className="spec-val">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-middle">
            <div className="checkered-flag"></div>
            <p className="copyright matte-text">
              © {currentYear} Aman Sharma. All rights reserved.
            </p>
            <p className="built-with">Optimized for 300km/h Web Experience</p>
          </div>

          <div className="footer-right">
            <SocialLinks size={20} />
            <div className="lap-timer racing-font">
              LAST UPDATED: FEB 2024
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 80px 0 40px;
          background: #000;
          position: relative;
          z-index: 10;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5vw;
        }
        .footer-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-racing), transparent);
          margin-bottom: 50px;
          opacity: 0.5;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
        }
        
        .logo-small { font-size: 1.5rem; margin-bottom: 5px; }
        .logo-small .accent { color: var(--accent-racing); }
        .tagline { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 3px; margin-bottom: 25px; }

        .tech-specs {
            background: rgba(255, 255, 255, 0.03);
            padding: 15px;
            border-left: 3px solid var(--accent-racing);
            max-width: 250px;
        }
        .specs-title {
            font-size: 0.7rem;
            color: #fff;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .specs-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 5px;
        }
        .spec-item {
            display: flex;
            justify-content: space-between;
            font-size: 0.65rem;
            font-family: monospace;
        }
        .spec-cat { color: var(--text-muted); }
        .spec-val { color: var(--text-secondary); font-weight: bold; }

        .footer-middle { text-align: center; align-self: center; }
        .copyright { font-size: 0.9rem; color: #fff; margin-bottom: 5px; }
        .built-with { font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; }
        
        .checkered-flag {
          width: 50px;
          height: 20px;
          background: repeating-conic-gradient(#fff 0% 25%, #000 0% 50%) 50% / 10px 10px;
          margin: 0 auto 20px;
          border: 1px solid #333;
        }

        .footer-right { text-align: right; }
        .social-links { display: flex; gap: 20px; justify-content: flex-end; margin-bottom: 20px; }
        .social-icon {
          color: var(--text-secondary);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }
        .social-icon:hover { 
            color: #fff; 
            background: var(--accent-racing);
            transform: translateY(-5px) rotate(5deg);
        }
        .lap-timer { font-size: 0.8rem; color: var(--accent-racing); letter-spacing: 1px; }

        @media (max-width: 992px) {
            .footer-content { flex-direction: column; align-items: center; text-align: center; }
            .footer-right, .social-links { justify-content: center; text-align: center; }
            .tech-specs { margin: 0 auto; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
