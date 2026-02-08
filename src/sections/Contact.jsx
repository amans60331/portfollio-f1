import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PitStopMan from '../components/PitStopMan';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\s-+()]{10,15}$/;

    if (!data.get('name').trim()) {
      newErrors.name = "Driver name required for entry.";
    }

    if (!emailRegex.test(data.get('email'))) {
      newErrors.email = "Valid cockpit frequency (email) required.";
    }

    const phone = data.get('phone');
    if (phone && !phoneRegex.test(phone)) {
      newErrors.phone = "Invalid telemetry line (min 10 digits).";
    }

    if (!data.get('subject').trim()) {
      newErrors.subject = "Race briefing (subject) required.";
    }

    if (!data.get('message').trim()) {
      newErrors.message = "Message logs cannot be empty.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.target);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormStatus('sending');
    formData.append("access_key", "b55f5973-ba9f-42fd-a896-f03cdb11eb27");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header-row">
          <h2 className="section-title racing-font">The Finish Line</h2>
          <div className="contact-pit-crew">
            <PitStopMan quote="Finish line in sight! P1 finish expected." side="right" inline={true} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-card-v2"
        >
          <form onSubmit={handleSubmit} className="racing-form">
            <div className="form-grid">
              <div className="input-field">
                <input type="text" name="name" placeholder="Full Name" className={errors.name ? 'field-error' : ''} />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              <div className="input-field">
                <input type="email" name="email" placeholder="Email Address" className={errors.email ? 'field-error' : ''} />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              <div className="input-field">
                <input type="tel" name="phone" placeholder="Mobile Number" className={errors.phone ? 'field-error' : ''} />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>
              <div className="input-field">
                <input type="text" name="subject" placeholder="Email Subject" className={errors.subject ? 'field-error' : ''} />
                {errors.subject && <span className="error-text">{errors.subject}</span>}
              </div>
            </div>

            <div className="input-field message-field">
              <textarea name="message" placeholder="Your Message" rows="8" className={errors.message ? 'field-error' : ''}></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <div className="form-footer">
              <button type="submit" className="send-btn racing-font" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'TRANSMITTING...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <p className="status-msg success">Message delivered to the paddock!</p>
              )}
              {formStatus === 'error' && (
                <p className="status-msg error">System failure. Please check your connection.</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        .contact {
          padding-bottom: 100px;
        }
        .contact-header-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 3rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
        .contact-card-v2 {
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          max-width: 800px;
          margin: 0 auto;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        .input-field {
            position: relative;
        }
        .input-field input, .input-field textarea {
          width: 100%;
          background: #1e293b;
          border: 1.5px solid transparent;
          padding: 18px 25px;
          border-radius: 12px;
          color: #fff;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }
        .input-field input:focus, .input-field textarea:focus {
          border-color: var(--accent-electric);
          background: #233149;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
        }
        .input-field .field-error {
            border-color: var(--accent-racing);
            background: rgba(239, 68, 68, 0.05);
        }
        .error-text {
            color: var(--accent-racing);
            font-size: 0.65rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-top: 5px;
            display: block;
            font-weight: bold;
        }
        .message-field { margin-bottom: 40px; }
        .form-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .send-btn {
          background: #00e5ff;
          color: #000;
          border: none;
          padding: 20px 60px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 900;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 30px rgba(0, 229, 255, 0.4);
        }
        .send-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 50px rgba(0, 229, 255, 0.6);
          background: #fff;
        }
        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .status-msg {
          font-family: monospace;
          font-size: 0.9rem;
        }
        .status-msg.success { color: #22c55e; }
        .status-msg.error { color: #ef4444; }

        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr; }
          .contact-card-v2 { padding: 25px; }
          .contact-header-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
