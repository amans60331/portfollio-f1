import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-line"></div>

                <div className="footer-content">
                    <div className="footer-left">
                        <h2 className="racing-font logo-small">AM<span className="accent">AN</span></h2>
                        <p className="tagline">Performance-First Engineering</p>
                    </div>

                    <div className="footer-middle">
                        <div className="checkered-flag"></div>
                        <p className="copyright matte-text">
                            © {currentYear} Aman Sharma. All rights reserved.
                        </p>
                        <p className="built-with">Built for 300km/h with React & Framer Motion</p>
                    </div>

                    <div className="footer-right">
                        <div className="social-links">
                            <a href="#" className="social-icon">IN</a>
                            <a href="#" className="social-icon">GH</a>
                            <a href="#" className="social-icon">TW</a>
                        </div>
                        <div className="lap-timer racing-font">
                            LAP TIME: 00:26.42
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .footer {
          padding: 60px 0 30px;
          background: #000;
          position: relative;
          z-index: 10;
        }
        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5vw;
        }
        .footer-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-lightning), transparent);
          margin-bottom: 40px;
          opacity: 0.3;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }
        
        .logo-small { font-size: 1.2rem; margin-bottom: 5px; }
        .logo-small .accent { color: var(--accent-racing); }
        .tagline { font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 2px; }

        .footer-middle { text-align: center; }
        .copyright { font-size: 0.9rem; color: #fff; margin-bottom: 5px; }
        .built-with { font-size: 0.7rem; color: var(--text-muted); }
        
        .checkered-flag {
          width: 40px;
          height: 15px;
          background: repeating-conic-gradient(#fff 0% 25%, #000 0% 50%) 50% / 10px 10px;
          margin: 0 auto 15px;
          border: 1px solid #333;
        }

        .footer-right { text-align: right; }
        .social-links { display: flex; gap: 15px; justify-content: flex-end; margin-bottom: 10px; }
        .social-icon {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.7rem;
          font-weight: bold;
          transition: color 0.3s ease;
        }
        .social-icon:hover { color: var(--accent-lightning); }
        .lap-timer { font-size: 0.7rem; color: var(--accent-racing); }

        @media (max-width: 768px) {
          .footer-content { flex-direction: column; text-align: center; }
          .footer-right { text-align: center; }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
