import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import F1Car from './F1Car';

const ScrollTrack = () => {
    const { scrollYProgress } = useScroll();

    // Smoother spring for weightier F1 feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 35,
        damping: 20,
        restDelta: 0.001
    });

    // The Golden Path Strategy: Consistent with your lightning theme
    const pathData = "M 10 0 Q 100 150 50 300 Q 0 450 50 600 Q 100 750 50 900 Q 0 1000 50 1100";

    // MATHEMATICALLY ACCURATE MAPPING
    // Syncing X percentages perfectly with the Bezier apexes
    // Start(10) -> Apex1(65) -> Mid(50) -> Apex2(25) -> Mid(50) -> Apex3(75) -> Mid(50) -> Apex4(25) -> End(50)
    const xPos = useTransform(smoothProgress,
        [0, 0.12, 0.27, 0.41, 0.54, 0.68, 0.81, 0.91, 1],
        ['10%', '65%', '50%', '25%', '50%', '75%', '50%', '25%', '50%']
    );

    // Dynamic Y mapping to stay within the fixed viewport track
    const yPos = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

    // Direction calculation: Face right (1) when moving right, left (-1) when moving back
    const carDirection = useTransform(smoothProgress,
        [0, 0.12, 0.27, 0.41, 0.54, 0.68, 0.81, 0.91, 1],
        [1, 1, -1, -1, 1, 1, -1, -1, 1]
    );

    // Drift Tilt: Lean into the corner (nose down/up slightly based on curve)
    const tiltRotate = useTransform(smoothProgress,
        [0, 0.12, 0.27, 0.41, 0.54, 0.68, 0.81, 0.91, 1],
        [20, -30, 20, -30, 20, -30, 20, -30, 0]
    );

    return (
        <div className="track-container">
            <svg
                className="track-svg"
                viewBox="0 0 100 1100"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="activeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                </defs>

                {/* Track Surface Glow */}
                <path
                    d={pathData}
                    fill="none"
                    stroke="rgba(99, 102, 241, 0.08)"
                    strokeWidth="30"
                    strokeLinecap="round"
                    style={{ filter: 'blur(8px)' }}
                />

                {/* The Tarmac */}
                <path
                    d={pathData}
                    fill="none"
                    stroke="#050505"
                    strokeWidth="22"
                    strokeLinecap="round"
                />

                {/* Glowing Race Line */}
                <motion.path
                    d={pathData}
                    fill="none"
                    stroke="url(#activeGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{
                        pathLength: smoothProgress,
                        filter: 'drop-shadow(0 0 12px #6366f1)'
                    }}
                />

                {/* Speed Lines */}
                <path
                    d={pathData}
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    strokeDasharray="40, 400"
                />
            </svg>

            {/* F1 CAR - Mathematically Locked to Track */}
            <motion.div
                className="f1-scroller-car"
                style={{
                    left: xPos,
                    top: yPos,
                    rotate: tiltRotate,
                    transition: { type: 'spring', stiffness: 50, damping: 20 }
                }}
            >
                <div className="car-wrapper-inner">
                    <div style={{ width: '160px', transition: 'transform 0.4s ease' }}>
                        <F1Car
                            isMoving={true}
                            direction={carDirection}
                        />
                    </div>
                    {/* Persistent Ground Glow */}
                    <div className="ground-glow"></div>
                </div>
            </motion.div>

            <style jsx>{`
        .track-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1;
          pointer-events: none;
        }
        .track-svg {
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        .f1-scroller-car {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 50;
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.8));
          will-change: left, top, rotate;
        }
        .car-wrapper-inner {
            position: relative;
        }
        .ground-glow {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 40px;
            background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
            z-index: -1;
        }
      `}</style>
        </div>
    );
};

export default ScrollTrack;
