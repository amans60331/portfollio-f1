import React from 'react';

const F1Car = ({ isMoving = false, direction = 1, colorTheme = 'red' }) => {
  return (
    <div className="f1-car-container" style={{ transform: `scaleX(${direction})` }}>
      <svg viewBox="0 0 450 150" className="f1-svg-main">
        <defs>
          <linearGradient id="bodySilver" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#888' }} />
            <stop offset="100%" style={{ stopColor: '#222' }} />
          </linearGradient>
        </defs>

        {/* Floor and Aero bits */}
        <path d="M50 120 L380 120 L380 125 L50 125 Z" fill="#000" />

        {/* Front Wing */}
        <path d="M360 120 L440 120 L445 105 L350 110 Z" fill="#111" />
        <path d="M370 115 L430 115" stroke="#ef4444" strokeWidth="2" />

        {/* Chassis - Red & Black Mix */}
        <path d="M60 120 Q120 120 150 100 L350 105 Q380 105 400 120 L60 120 Z" fill="#000" />
        <path d="M220 105 L340 105 L330 80 Q250 75 220 105" fill="#ef4444" />
        <path d="M120 105 Q200 40 280 105" fill="url(#bodySilver)" opacity="0.8" />

        {/* Halo & Airbox */}
        <path d="M180 75 Q210 50 240 75" fill="none" stroke="#333" strokeWidth="4" />
        <path d="M150 75 L190 75 L180 60 L160 60 Z" fill="#111" />

        {/* Rear Wing */}
        <path d="M20 70 L80 70 L85 40 L10 40 Z" fill="#111" />
        <path d="M25 55 L75 55" stroke="#ef4444" strokeWidth="3" />

        {/* Tires */}
        <g className={`wheels ${isMoving ? 'spinning' : ''}`}>
          <circle cx="95" cy="120" r="38" fill="#0a0a0a" stroke="#1a1a1a" strokeWidth="4" />
          <circle cx="95" cy="120" r="30" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="10 5" opacity="0.6" />

          <circle cx="340" cy="120" r="36" fill="#0a0a0a" stroke="#1a1a1a" strokeWidth="4" />
          <circle cx="340" cy="120" r="28" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="10 5" opacity="0.6" />
        </g>
      </svg>

      <style jsx>{`
        .f1-car-container {
          width: 100%;
          height: auto;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .f1-svg-main {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));
        }
        .spinning {
          animation: spin 0.2s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .wheels circle { transform-origin: center; }
      `}</style>
    </div>
  );
};

export default F1Car;
