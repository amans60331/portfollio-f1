import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Grid', href: '#hero' },
        { name: 'Paddock', href: '#about' },
        { name: 'Telemetry', href: '#skills' },
        { name: 'The Circuit', href: '#projects' },
        { name: 'Podium', href: '#contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
        >
            <div className="nav-container">
                <div className="nav-logo racing-font">
                    AM<span className="accent">AN</span>
                    <div className="logo-badge">P1</div>
                </div>

                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-item racing-font">
                            {link.name}
                            <div className="nav-indicator"></div>
                        </a>
                    ))}
                </div>

                <div className="nav-cta">
                    <a href="#contact" className="paddock-pass-btn racing-font">
                        Paddock Pass
                    </a>
                </div>
            </div>

            <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 25px 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .navbar.scrolled {
          padding: 15px 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(99, 102, 241, 0.2);
        }
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5vw;
        }
        .nav-logo {
          font-size: 1.5rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nav-logo .accent { color: var(--accent-racing); }
        .logo-badge {
          background: var(--accent-lightning);
          color: #000;
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 900;
        }

        .nav-links {
          display: flex;
          gap: 40px;
          background: rgba(255, 255, 255, 0.03);
          padding: 10px 30px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }
        .nav-item {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.8rem;
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-item:hover {
          color: var(--accent-lightning);
        }
        .nav-indicator {
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-lightning);
          transition: width 0.3s ease;
        }
        .nav-item:hover .nav-indicator {
          width: 100%;
          box-shadow: 0 0 10px var(--accent-lightning);
        }

        .paddock-pass-btn {
          background: transparent;
          color: #fff;
          border: 1px solid var(--accent-racing);
          padding: 8px 20px;
          border-radius: 4px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .paddock-pass-btn:hover {
          background: var(--accent-racing);
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
          transform: skewX(-10deg);
        }

        @media (max-width: 1024px) {
          .nav-links { display: none; }
        }
      `}</style>
        </motion.nav>
    );
};

export default Navbar;
