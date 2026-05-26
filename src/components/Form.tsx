import { useState } from 'react';
import { Compass } from 'lucide-react';

export default function Form() {
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
      const form = e.currentTarget;
      const formDataObj = new FormData(form);
      formDataObj.append('form-name', 'booking');
      
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString()
      })
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-brand-cream relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute left-0 top-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M -100 300 Q 200 250 400 400" stroke="#E8D5D0" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M -50 450 Q 250 400 500 550" stroke="#E8D5D0" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M 0 200 Q 300 150 600 300" stroke="#E8D5D0" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M 50 50 Q 200 100 300 75 Q 400 50 500 100 Q 600 150 700 100" stroke="#E8D5D0" strokeWidth="0.8" fill="none" opacity="0.2" />
        </svg>

        <svg className="absolute right-0 top-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="fadeVertical" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#E8D5D0', stopOpacity: 0.35 }} />
              <stop offset="100%" style={{ stopColor: '#E8D5D0', stopOpacity: 0.05 }} />
            </linearGradient>
          </defs>
          <line x1="85%" y1="0" x2="85%" y2="100%" stroke="url(#fadeVertical)" strokeWidth="1.5" />
          <line x1="87%" y1="0" x2="87%" y2="100%" stroke="url(#fadeVertical)" strokeWidth="1" />
          <line x1="89%" y1="0" x2="89%" y2="100%" stroke="url(#fadeVertical)" strokeWidth="1.2" />
          <line x1="91%" y1="0" x2="91%" y2="100%" stroke="url(#fadeVertical)" strokeWidth="0.8" />
          <line x1="93%" y1="0" x2="93%" y2="100%" stroke="url(#fadeVertical)" strokeWidth="1.1" />
          <line x1="95%" y1="0" x2="95%" y2="100%" stroke="url(#fadeVertical)" strokeWidth="0.9" />
          <line x1="97%" y1="0" x2="97%" y2="100%" stroke="url(#fadeVertical)" strokeWidth="1.3" />
          <path d="M 800 100 Q 1000 200 1200 150" stroke="#E8D5D0" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M 850 250 Q 1050 350 1250 300" stroke="#E8D5D0" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M 900 400 Q 1100 500 1300 450" stroke="#E8D5D0" strokeWidth="1" fill="none" opacity="0.3" />
        </svg>
      </div>

      <div className="relative max-w-2xl mx-auto px-4 py-12 lg:py-20">
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Compass className="w-4 h-4 text-brand-primary" />
            <span className="text-sm font-medium text-brand-primary tracking-wider uppercase">Contact Us</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-8 leading-tight text-center">
            Get in Touch<br />We're Here to Help
          </h1>

          {/* User Type Selection */}
          <div className="mb-6 flex gap-4">
            <button
              type="button"
              onClick={() => setUserType('new')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${userType === 'new'
                ? 'bg-brand-primary text-white shadow-lg'
                : 'bg-white text-brand-primary border-2 border-brand-primary hover:bg-gray-50'
                }`}
            >
              New User
            </button>
            <button
              type="button"
              onClick={() => setUserType('returning')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${userType === 'returning'
                ? 'bg-brand-primary text-white shadow-lg'
                : 'bg-white text-brand-primary border-2 border-brand-primary hover:bg-gray-50'
                }`}
            >
              Returning User
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {userType === 'new' ? (
              <>
                {/* Client Type Dropdown */}
                <div className="relative">
                  <select
                    name="clientType"
                    value={formData.clientType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-brand-primary rounded-lg bg-white text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="">Select Client Type</option>
                    <option value="business">Business</option>
                    <option value="individual">Individual</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="#8B1538" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* First Name */}
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-brand-primary rounded-lg bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-brand-primary rounded-lg bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all"
                  />
                </div>

                {/* Contact Number with Area Code */}
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="areaCode"
                    placeholder="Area Code"
                    value={formData.areaCode}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border-2 border-brand-primary rounded-lg bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all"
                  />
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="col-span-2 px-4 py-3 border-2 border-brand-primary rounded-lg bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-brand-primary rounded-lg bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all"
                  />
                </div>

                {/* Country of Origin */}
                <div className="relative">
                  <select
                    name="countryOfOrigin"
                    value={formData.countryOfOrigin}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-brand-primary rounded-lg bg-white text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all cursor-pointer"
                  >
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
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="#8B1538" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Query Subject */}
                <div className="relative">
                  <select
                    name="querySubject"
                    value={formData.querySubject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-brand-primary rounded-lg bg-white text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="">Query Subject</option>
                    <option value="visas">Visas</option>
                    <option value="relocation">Relocation</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="international-taxation">International Taxation</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="#8B1538" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message (Optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-brand-primary rounded-lg bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#6B0F2A] transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                </button>
                {status === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg text-center font-medium">
                    Thank you! Your inquiry has been sent successfully.
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg text-center font-medium">
                    Oops! There was an error submitting your inquiry. Please try again later.
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Returning User Portal Link */}
                <div className="bg-white border-2 border-brand-primary rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-brand-primary mb-4">
                    Welcome Back!
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Access your client portal to view your case status, documents, and communicate with our team.
                  </p>
                  <button
                    type="submit"
                    className="w-full bg-brand-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#6B0F2A] transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Access Client Portal
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}