import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import F1Car from './F1Car';

const Preloader = ({ onComplete }) => {
  const [lights, setLights] = useState(0); // 0-4
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timers = [];
    // Faster F1 Lighting Sequence
    timers.push(setTimeout(() => setLights(1), 300));
    timers.push(setTimeout(() => setLights(2), 600));
    timers.push(setTimeout(() => setLights(3), 900));
    timers.push(setTimeout(() => setLights(4), 1200));

    // Launch!
    timers.push(setTimeout(() => {
      setLights(5); // Go
      setHasStarted(true);
    }, 1800));

    // Wait for car to zoom out
    timers.push(setTimeout(onComplete, 3500));

    return () => timers.forEach(t => clearTimeout(t));
  }, [onComplete]);

  const SmokeParticle = ({ delay, isStarting = false }) => (
    <motion.div
      initial={{ opacity: 0.6, scale: 0.2, x: 0, y: 0 }}
      animate={{
        opacity: 0,
        scale: isStarting ? 2 : 5,
        x: isStarting ? -30 - Math.random() * 50 : -300 - Math.random() * 200,
        y: Math.random() * 30 - 15
      }}
      transition={{ duration: isStarting ? 1.5 : 2.5, delay, ease: "easeOut" }}
      className="smoke-particle"
    />
  );

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="preloader-overlay"
    >
      <div className="vignette"></div>

      <div className="top-gantry">
        <div className="gantry-structure">
          <div className="light-unit-row">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="light-unit">
                <div className={`light-bulb red ${lights >= num && lights < 5 ? 'on' : ''}`}>
                  <div className="bulb-glare"></div>
                </div>
                <div className={`light-bulb green ${lights === 5 ? 'on' : ''}`}>
                  <div className="bulb-glare"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="neon-track-zone">
        <div className="track-glow"></div>
        <div className="neon-edge-line"></div>
        <div className="center-dash-stripes"></div>
      </div>

      <motion.div
        initial={{ left: "-40%", x: "-50%", bottom: "25%" }}
        animate={hasStarted
          ? { left: "150%", transition: { duration: 1.1, ease: [0.8, 0, 0.1, 1] } }
          : { left: "50%", transition: { duration: 1.5, ease: "circOut" } }
        }
        className="f1-realistic-wrapper"
      >
        <div className="car-vfx-container">
          {!hasStarted && (
            <div className="countdown-smoke">
              {[...Array(12)].map((_, i) => <SmokeParticle key={`pre-${i}`} delay={i * 0.1} isStarting={true} />)}
            </div>
          )}

          <F1Car isMoving={hasStarted} />

          {hasStarted && (
            <div className="launch-vfx">
              <div className="engine-flame"></div>
              <div className="thick-smoke">
                {[...Array(30)].map((_, i) => <SmokeParticle key={`post-${i}`} delay={i * 0.01} />)}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {hasStarted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="f1-announcement racing-font"
          >
            LIGHTS OUT & AWAY WE GO!
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .preloader-overlay {
          position: fixed;
          inset: 0;
          background: #000;
          z-index: 10000;
          overflow: hidden;
        }
        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.8) 100%);
          z-index: 10;
        }
        .top-gantry {
          width: 100%;
          height: 160px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding-bottom: 20px;
          position: relative;
          z-index: 20;
        }
        .gantry-structure {
          background: #111;
          padding: 10px 30px;
          border-radius: 60px;
          border: 2px solid #222;
          box-shadow: 0 10px 40px rgba(0,0,0,1);
        }
        .light-unit-row { display: flex; gap: 20px; }
        .light-unit {
          width: 45px;
          height: 85px;
          background: #000;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 6px;
        }
        .light-bulb {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #050505;
          margin: 0 auto;
          position: relative;
        }
        .bulb-glare {
          position: absolute;
          top: 15%;
          left: 15%;
          width: 30%;
          height: 30%;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }
        .light-bulb.red.on {
          background: #ff0000;
          box-shadow: 0 0 35px #ff0000, inset 0 0 10px rgba(255,255,255,0.8);
        }
        .light-bulb.green.on {
          background: #00ff00;
          box-shadow: 0 0 45px #00ff00, inset 0 0 10px rgba(255,255,255,0.8);
        }
        .neon-track-zone {
          position: absolute;
          bottom: 25%;
          width: 100%;
          height: 10px;
        }
        .track-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(6, 182, 212, 0.2) 0%, transparent 80%);
          transform: scaleY(5);
        }
        .f1-realistic-wrapper {
          position: absolute;
          width: 400px;
          z-index: 100;
        }
        .car-vfx-container { position: relative; }
        .engine-flame {
          position: absolute;
          left: -40px;
          top: 75%;
          width: 100px;
          height: 25px;
          background: linear-gradient(-90deg, transparent, #ef4444, #ffaa00);
          filter: blur(8px);
          animation: firePulse 0.05s infinite;
        }
        @keyframes firePulse {
           0%, 100% { transform: scaleY(1); opacity: 0.8; }
           50% { transform: scaleY(1.3); opacity: 1; }
        }
        :global(.smoke-particle) {
          position: absolute;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          filter: blur(15px);
        }
        .f1-announcement {
          position: absolute;
          top: 50%;
          width: 100%;
          text-align: center;
          font-size: 3rem;
          color: #fff;
          z-index: 150;
          text-shadow: 0 0 40px #6366f1;
          font-weight: 900;
        }
      `}</style>
    </motion.div>
  );
};

export default Preloader;
