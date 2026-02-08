import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollTrack = () => {
    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 30,
        damping: 20,
        restDelta: 0.001
    });

    // Full-width track path with exaggerated curves
    const pathData = "M 10 0 Q 100 150 50 300 Q 0 450 50 600 Q 100 750 50 900 Q 0 1000 50 1100";

    // Mapping x/y correctly to follow the curves precisely
    const xPos = useTransform(smoothProgress,
        [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        ['10%', '65%', '50%', '35%', '15%', '35%', '50%', '65%', '85%', '50%', '10%']
    );

    const yPos = useTransform(smoothProgress, [0, 1], ['0%', '105%']);

    // Dynamic drift rotation
    const rotate = useTransform(smoothProgress,
        [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
        [45, -45, 45, -45, 45, -45, 0]
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

                {/* Back Track Surface (Lightning Shadow) */}
                <path
                    d={pathData}
                    fill="none"
                    stroke="rgba(99, 102, 241, 0.05)"
                    strokeWidth="25"
                    strokeLinecap="round"
                />

                {/* Main Road */}
                <path
                    d={pathData}
                    fill="none"
                    stroke="#050505"
                    strokeWidth="20"
                    strokeLinecap="round"
                />

                {/* Neon Active Track */}
                <motion.path
                    d={pathData}
                    fill="none"
                    stroke="url(#activeGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{
                        pathLength: smoothProgress,
                        filter: 'drop-shadow(0 0 15px #6366f1)'
                    }}
                />

                {/* Lightning Pulses */}
                <path
                    d={pathData}
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                    strokeDasharray="100, 1000"
                    opacity="0.3"
                />
            </svg>

            {/* DETAILED PRELOADER-STYLE F1 CAR */}
            <motion.div
                className="f1-scroller-car"
                style={{
                    left: xPos,
                    top: yPos,
                    rotate: rotate
                }}
            >
                <div className="f1-car-body">
                    <svg viewBox="0 0 250 100" width="180">
                        {/* Back Wing */}
                        <path d="M10 30 L50 30 L55 20 L5 20 Z" fill="#ef4444" />
                        <rect x="15" y="20" width="5" height="30" fill="#111" />

                        {/* Main Carbon Body */}
                        <path d="M20 70 Q50 70 70 65 L220 65 Q250 65 270 80 L20 80 Z" fill="#000" stroke="#ef4444" strokeWidth="2" />
                        <path d="M60 65 Q110 40 160 65" fill="#ef4444" opacity="0.9" />

                        {/* Cockpit with Glow */}
                        <path d="M110 65 Q130 40 150 65" fill="none" stroke="#6366f1" strokeWidth="5" />
                        <circle cx="130" cy="55" r="4" fill="#6366f1" />

                        {/* Spinning Detailed Wheels */}
                        <g className="wheel-set">
                            <circle cx="50" cy="80" r="22" fill="#050505" stroke="#333" strokeWidth="4" />
                            <circle cx="50" cy="80" r="16" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,8" className="spin-fast" />

                            <circle cx="210" cy="82" r="20" fill="#050505" stroke="#333" strokeWidth="4" />
                            <circle cx="210" cy="82" r="14" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,8" className="spin-fast" />
                        </g>

                        {/* Front Aerodynamics */}
                        <path d="M230 75 L280 75 L280 85 L225 85 Z" fill="#ef4444" />
                    </svg>
                    <div className="exhaust-afterburn"></div>
                    <div className="track-friction-smoke"></div>
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
        }
        .f1-scroller-car {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 50;
          filter: drop-shadow(0 0 30px rgba(99, 102, 241, 0.6));
          transition: transform 0.1s linear;
        }
        .spin-fast {
          animation: spin 0.1s linear infinite;
          transform-origin: center;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .exhaust-afterburn {
          position: absolute;
          left: -15px;
          top: 75%;
          width: 50px;
          height: 12px;
          background: linear-gradient(90deg, #ef4444, transparent);
          filter: blur(6px);
          animation: flicker 0.1s infinite;
        }
        @keyframes flicker {
          0%, 100% { opacity: 0.7; transform: scaleX(1); }
          50% { opacity: 1; transform: scaleX(1.4); }
        }
      `}</style>
        </div>
    );
};

export default ScrollTrack;
