import React from 'react';
import { motion } from 'framer-motion';

const PitStopMan = ({ quote, side = "left", inline = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`pitstop-paddock ${side} ${inline ? 'inline' : ''}`}
    >
      <div className="crew-bubble">
        <p>"{quote}"</p>
        <div className="bubble-tail"></div>
      </div>

      <div className="crew-member-box">
        <div className="helmet">
          <div className="visor"></div>
        </div>
        <div className="suit">
          <div className="racing-stripe"></div>
        </div>
        <div className="lollipop-sign">
          <div className="sign-board">PIT</div>
        </div>
      </div>

      <style jsx>{`
        .pitstop-paddock {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 100;
          pointer-events: auto;
        }

        .pitstop-paddock.inline {
          position: relative;
          transform: none;
          left: auto;
          right: auto;
          margin: 0;
        }

        .pitstop-paddock:not(.inline) {
          position: absolute;
        }

        .pitstop-paddock.left:not(.inline) {
          left: 5%;
          transform: translateX(-50%);
        }

        .pitstop-paddock.right:not(.inline) {
          right: 5%;
          transform: translateX(50%);
        }

        .crew-bubble {
          background: #111111;
          border: 1px solid var(--accent-lightning);
          padding: 10px 15px;
          border-radius: 12px;
          position: relative;
          width: 180px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.6);
        }

        .crew-bubble p {
          color: #fff;
          font-family: monospace;
          font-size: 0.8rem;
          margin: 0;
          line-height: 1.4;
        }

        .bubble-tail {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid var(--accent-lightning);
        }

        .crew-member-box {
          position: relative;
          width: 50px;
          height: 70px;
        }

        .helmet {
          width: 35px;
          height: 35px;
          background: var(--accent-racing);
          border-radius: 50% 50% 40% 40%;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          border: 1.5px solid #000;
        }

        .visor {
          width: 28px;
          height: 10px;
          background: #000;
          margin: 10px auto;
          border-radius: 2px;
        }

        .suit {
          width: 45px;
          height: 35px;
          background: var(--accent-racing);
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 8px 8px 0 0;
          border: 1.5px solid #000;
        }

        .racing-stripe {
          width: 6px;
          height: 100%;
          background: #fff;
          margin: 0 auto;
        }

        .lollipop-sign {
            position: absolute;
            top: -15px;
            right: -15px;
            background: #6366f1;
            color: #fff;
            font-weight: bold;
            padding: 4px 6px;
            border-radius: 4px;
            border: 1px solid #fff;
            font-size: 0.6rem;
            transform: rotate(15deg);
        }
      `}</style>
    </motion.div>
  );
};

export default PitStopMan;
