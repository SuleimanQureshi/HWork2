import { useState } from 'react';
import { Compass, ArrowRight, Globe2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function BookingForm() {
  const [userType, setUserType] = useState<'new' | 'returning'>('new');
  const [formData, setFormData] = useState({
    clientType: '',
    firstName: '',
    lastName: '',
    areaCode: '',
    contactNumber: '',
    email: '',
    countryOfOrigin: '',
    querySubject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userType === 'returning') {
      window.location.href = 'https://mpimmigration.relocationonline.com/users/sign_in';
    } else {
      setStatus('submitting');

      const templateParams = {
        clientType: formData.clientType,
        firstName: formData.firstName,
        lastName: formData.lastName,
        areaCode: formData.areaCode,
        contactNumber: formData.contactNumber,
        email: formData.email,
        countryOfOrigin: formData.countryOfOrigin,
        querySubject: formData.querySubject,
        message: formData.message,
      };

      // STEP 3: Replace these three strings with the actual IDs from your EmailJS dashboard
      emailjs.send(
        'service_vj8op36',
        'template_phtxzgw',
        templateParams,
        'UGEX3MIIkWbGiOr9o'
      )
        .then(() => {
          setStatus('success');
          setFormData({ clientType: '', firstName: '', lastName: '', areaCode: '', contactNumber: '', email: '', countryOfOrigin: '', querySubject: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000); // Reset after 5 seconds
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
          setStatus('error');
        });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const chevron = (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style={{ pointerEvents: 'none' }}>
      <path d="M1 1L6 6L11 1" stroke="#8B1538" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .bk-root, .bk-root * { box-sizing: border-box; }

        .bk-root {
          font-family: 'DM Sans', sans-serif;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          position: relative;
          /* overflow:hidden clips the decorative arcs so they never extend the page */
          overflow: hidden;
          /* Background on the root itself — always covers 100% of its own height */
          background:
            linear-gradient(160deg,
              rgba(80, 10, 30, 0.95) 0%,
              rgba(140, 30, 55, 0.85) 45%,
              rgba(200, 90, 60, 0.80) 100%),
            url("Plane.png?auto=compress&cs=tinysrgb&w=1600") center/cover no-repeat;
        }

        @media (min-width: 768px) {
          .bk-root { flex-direction: row; align-items: center; }
        }

        /* Decorative arcs — absolute within root, clipped by overflow:hidden */
        .bk-arc {
          position: absolute;
          bottom: -20%;
          right: -8%;
          width: min(600px, 110vw);
          height: min(600px, 110vw);
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          pointer-events: none;
          z-index: 0;
        }
        .bk-arc-2 {
          position: absolute;
          bottom: -30%;
          right: -14%;
          width: min(800px, 140vw);
          height: min(800px, 140vw);
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.04);
          pointer-events: none;
          z-index: 0;
        }

        /* Content */
        .bk-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 640px;
          padding: 36px 20px 52px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .bk-content {
            margin: 0 0 0 clamp(32px, 6vw, 120px);
            padding: 60px 48px 60px 0;
          }
        }

        /* Eyebrow */
        .bk-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
        }
        .bk-eyebrow span {
          font-size: 20px;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        /* Headline */
        .bk-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 7.5vw, 50px);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 26px;
        }
        .bk-headline em {
          font-style: italic;
          color: rgba(240, 178, 138, 0.95);
        }

        /* Toggle */
        .bk-toggle {
          display: flex;
          gap: 10px;
          margin-bottom: 18px;
        }
        .bk-toggle-btn {
          flex: 1;
          padding: 12px 0;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border: 2px solid rgba(255,255,255,0.45);
          background: transparent;
          color: rgba(255,255,255,0.85);
          transition: background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .bk-toggle-btn.active {
          background: #fff;
          color: #8B1538;
          border-color: #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .bk-toggle-btn:not(.active):active {
          background: rgba(255,255,255,0.18);
        }

        /* Glass card */
        .bk-card {
          background: rgba(255,255,255,0.13);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 22px;
          padding: clamp(18px, 4vw, 32px);
        }

        /* Form layout */
        .bk-row {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }
        .bk-row > * { flex: 1; min-width: 0; }
        .bk-row .bk-area { flex: 0 0 80px; }

        .bk-field { margin-bottom: 10px; }

        /* Inputs */
        .bk-input,
        .bk-select,
        .bk-textarea {
          width: 100%;
          padding: 13px 16px;
          border-radius: 12px;
          background: #fff;
          color: #1a1a1a;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          border: 2px solid transparent;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s;
          -webkit-appearance: none;
          appearance: none;
          display: block;
        }
        .bk-input::placeholder,
        .bk-textarea::placeholder { color: #aaa; }
        .bk-input:focus,
        .bk-select:focus,
        .bk-textarea:focus {
          border-color: #c07030;
          box-shadow: 0 0 0 3px rgba(192,112,48,0.15);
        }
        .bk-textarea { resize: none; line-height: 1.55; }

        /* Select wrapper */
        .bk-sel-wrap {
          position: relative;
          margin-bottom: 10px;
        }
        .bk-chevron {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          display: flex;
          align-items: center;
        }

        /* Submit */
        .bk-submit-wrap {
          display: flex;
          justify-content: center;
          padding-top: 14px;
        }
        .bk-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #9a3015, #6b1a08);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 36px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(80,10,0,0.45);
          transition: transform 0.15s, box-shadow 0.15s;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          width: 100%;
        }
        .bk-submit:active { transform: scale(0.97); }

        @media (min-width: 480px) {
          .bk-submit { width: auto; }
        }

        /* Returning user */
        .bk-portal {
          background: #fff;
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
        }
        .bk-portal-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #8B1538, #c05030);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
        }
        .bk-portal h3 {
          font-family: 'Playfair Display', serif;
          font-size: 21px;
          color: #8B1538;
          margin: 0 0 10px;
        }
        .bk-portal p {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
          margin: 0 0 22px;
        }
        .bk-portal-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background: linear-gradient(135deg, #9a3015, #6b1a08);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 20px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(80,10,0,0.4);
          transition: transform 0.15s;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .bk-portal-btn:active { transform: scale(0.97); }
      `}</style>

      <div className="bk-root">
        <div className="bk-arc" />
        <div className="bk-arc-2" />

        <div className="bk-content">
          <div className="bk-eyebrow">
            <Compass size={24} color="rgba(255,255,255,0.85)" />
            <span>Contact Us</span>
          </div>



          <div className="bk-toggle">
            <button type="button" className={`bk-toggle-btn${userType === 'new' ? ' active' : ''}`} onClick={() => setUserType('new')}>
              New User
            </button>
            <button type="button" className={`bk-toggle-btn${userType === 'returning' ? ' active' : ''}`} onClick={() => setUserType('returning')}>
              Returning User
            </button>
          </div>

          <div className="bk-card">
            <form onSubmit={handleSubmit}>
              {userType === 'new' ? (
                <>
                  <div className="bk-sel-wrap">
                    <select name="clientType" value={formData.clientType} onChange={handleChange} required className="bk-select">
                      <option value="">Select Client Type</option>
                      <option value="business">Corporate</option>
                      <option value="individual">Private</option>
                    </select>
                    <span className="bk-chevron">{chevron}</span>
                  </div>

                  <div className="bk-row">
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="bk-input" />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="bk-input" />
                  </div>

                  <div className="bk-row">
                    <input type="text" name="areaCode" placeholder="+1" value={formData.areaCode} onChange={handleChange} required className="bk-input bk-area" style={{ textAlign: 'center' }} />
                    <input type="tel" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} required className="bk-input" />
                  </div>

                  <div className="bk-field">
                    <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="bk-input" />
                  </div>

                  <div className="bk-sel-wrap">
                    <select name="countryOfOrigin" value={formData.countryOfOrigin} onChange={handleChange} required className="bk-select">
                      <option value="">Country of Origin</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                      <option value="de">Germany</option>
                      <option value="fr">France</option>
                      <option value="it">Italy</option>
                      <option value="es">Spain</option>
                      <option value="br">Brazil</option>
                      <option value="in">India</option>
                      <option value="cn">China</option>
                      <option value="jp">Japan</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="bk-chevron">{chevron}</span>
                  </div>

                  <div className="bk-sel-wrap">
                    <select name="querySubject" value={formData.querySubject} onChange={handleChange} required className="bk-select">
                      <option value="">Query Subject</option>
                      <option value="Corporate-Immigration">Corporate Immigration</option>
                      <option value="visa-citizenship">Visa & Citizenship</option>
                      <option value="document-ancestry">Document & Ancestry</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="international-taxation">International Taxation</option>
                    </select>
                    <span className="bk-chevron">{chevron}</span>
                  </div>

                  <div className="bk-field">
                    <textarea name="message" placeholder="Message (Optional)" value={formData.message} onChange={handleChange} rows={3} className="bk-textarea" />
                  </div>

                  <div className="bk-submit-wrap">
                    <button type="submit" className="bk-submit" disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'} <ArrowRight size={17} />
                    </button>
                  </div>
                  {status === 'success' && (
                    <div style={{ marginTop: '15px', color: '#4caf50', textAlign: 'center', fontWeight: 'bold' }}>
                      Thank you! Your inquiry has been sent successfully.
                    </div>
                  )}
                  {status === 'error' && (
                    <div style={{ marginTop: '15px', color: '#f44336', textAlign: 'center', fontWeight: 'bold' }}>
                      Oops! There was an error submitting your inquiry. Please try again later.
                    </div>
                  )}
                </>
              ) : (
                <div className="bk-portal">
                  <div className="bk-portal-icon">
                    <Globe2 size={22} color="#fff" />
                  </div>
                  <h3>Welcome Back!</h3>
                  <p>Access your client portal to view your case status, documents, and communicate with our team.</p>
                  <button type="submit" className="bk-portal-btn">
                    Access Client Portal <ArrowRight size={15} />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}