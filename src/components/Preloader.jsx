import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 1200);
    const mainTimer = setTimeout(onComplete, 5000);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(mainTimer);
    };
  }, [onComplete]);

  // Smoke particle logic
  const SmokeParticle = ({ delay, type }) => (
    <motion.div
      initial={{ opacity: 0.6, scale: 0.2, x: 0, y: 0 }}
      animate={{
        opacity: 0,
        scale: type === 'tire' ? 3 : 5,
        x: -100 - Math.random() * 150,
        y: type === 'tire' ? (Math.random() * 20 - 10) : (Math.random() * 40 - 20)
      }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
      className={`particle ${type}-smoke`}
    />
  );

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="preloader-overlay"
    >
      <div className="racing-environ">
        {/* F1 Circuit Grid */}
        <div className="grid-bg"></div>

        <motion.div
          initial={{ left: "-400px" }}
          animate={{ left: "130%" }}
          transition={{
            duration: 2.2,
            ease: [0.85, 0, 0.15, 1], // Aggressive acceleration curve
          }}
          className="f1-car-wrapper"
        >
          {/* Detailed SVG F1 Car */}
          <div className="f1-car-container">
            <svg viewBox="0 0 250 80" className="f1-svg">
              {/* Back Wing */}
              <path d="M10 20 L40 20 L45 10 L5 10 Z" fill="#ef4444" />
              <rect x="15" y="20" width="5" height="30" fill="#111" />

              {/* Main Body */}
              <path d="M20 50 Q40 50 60 45 L180 45 Q210 45 230 60 L240 60 L240 65 L20 65 Z" fill="#000" stroke="#ef4444" strokeWidth="1" />
              <path d="M60 45 Q100 25 140 45" fill="#ef4444" opacity="0.8" />

              {/* Cockpit / Halo */}
              <path d="M110 45 Q120 30 135 45" fill="none" stroke="#6366f1" strokeWidth="2" />
              <circle cx="125" cy="40" r="3" fill="#6366f1" />

              {/* Sidepods */}
              <path d="M80 50 Q120 50 160 55 L160 65 L80 65 Z" fill="#111" />
              <path d="M85 52 L155 52" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="5,2" />

              {/* Wheels */}
              <g className="wheel-group">
                {/* Back Wheel */}
                <circle cx="45" cy="60" r="18" fill="#050505" stroke="#333" strokeWidth="2" />
                <circle cx="45" cy="60" r="14" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="4,4" className="spinning-rim" />
                <circle cx="45" cy="60" r="4" fill="#222" />

                {/* Front Wheel */}
                <circle cx="200" cy="62" r="16" fill="#050505" stroke="#333" strokeWidth="2" />
                <circle cx="200" cy="62" r="12" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="4,4" className="spinning-rim" />
                <circle cx="200" cy="62" r="3" fill="#222" />
              </g>

              {/* Front Wing */}
              <path d="M220 60 L250 60 L250 65 L215 65 Z" fill="#ef4444" />
              <path d="M230 55 L245 55 L245 60 L230 60 Z" fill="#111" />
            </svg>

            {/* Exhaust Fire */}
            <motion.div
              animate={{ scaleX: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 0.1, repeat: Infinity }}
              className="exhaust-fire"
            />

            {/* Particle Systems */}
            <div className="exhaust-cloud">
              {[...Array(15)].map((_, i) => <SmokeParticle key={`ex-${i}`} delay={i * 0.05} type="exhaust" />)}
            </div>
            <div className="tire-cloud">
              {[...Array(10)].map((_, i) => <SmokeParticle key={`tr-${i}`} delay={i * 0.08} type="tire" />)}
            </div>
          </div>
        </motion.div>

        {/* Text Reveal */}
        <AnimatePresence>
          {showText && (
            <div className="reveal-container">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="racing-font main-title"
              >
                Welcome to My story
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1 }}
                className="racing-line"
              />
            </div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .preloader-overlay {
          position: fixed;
          inset: 0;
          background: #000;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .racing-environ {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          perspective: 1000px;
          transform: rotateX(60deg) translateY(-100px);
          opacity: 0.5;
        }

        .f1-car-wrapper {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 250px;
          height: 80px;
        }
        .f1-car-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .f1-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 15px rgba(239, 68, 68, 0.4));
        }

        .spinning-rim {
          animation: spin 0.1s linear infinite;
          transform-origin: center;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .exhaust-fire {
          position: absolute;
          left: -5px;
          top: 55px;
          width: 40px;
          height: 10px;
          background: linear-gradient(90deg, #ef4444, transparent);
          filter: blur(4px);
          border-radius: 50%;
          transform-origin: right;
        }

        .exhaust-cloud, .tire-cloud {
          position: absolute;
          left: 20px;
          top: 60px;
        }
        :global(.particle) {
          position: absolute;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          filter: blur(12px);
        }
        :global(.tire-smoke) {
          background: rgba(255, 255, 255, 0.15);
        }

        .reveal-container {
          text-align: center;
          position: relative;
          z-index: 10;
        }
        .main-title {
          font-size: clamp(2rem, 10vw, 6rem);
          color: #fff;
          text-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
          margin-bottom: 1rem;
          font-style: italic;
          letter-spacing: -0.05em;
        }
        .racing-line {
          height: 4px;
          background: linear-gradient(90deg, transparent, #ef4444, #6366f1, transparent);
          margin: 0 auto;
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.8);
        }
      `}</style>
    </motion.div>
  );
};

export default Preloader;
