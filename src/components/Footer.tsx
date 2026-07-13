import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white mt-12 sm:mt-16 lg:mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Col 1: Logo + Legal Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/Logo2.png"
                alt="MP Immigration"
                className="h-16 w-auto"
              />
            </div>

            <div className="flex flex-col gap-1.5 text-white/80 text-xs leading-relaxed">
              <p><span className="font-semibold text-white">P. IVA / VAT No.:</span> 07497690961</p>
              <p><span className="font-semibold text-white">PEC:</span> mpimmigration@legalmail.it</p>
              <p className="leading-snug">
                <span className="font-semibold text-white">Registered Office:</span> Via Pattari, 6 - 20122 Milano (MI) P.IVA - C.F. e Registro Imprese di Milano n° 07497690961
              </p>
              <p><span className="font-semibold text-white">Cap. Soc.:</span> € 10.000 I.V.</p>
              <p><span className="font-semibold text-white">REA n°:</span> 1962745</p>
            </div>

            <div className="flex gap-4 mt-4">
              <Link to="/privacy-notice" className="text-white/70 hover:text-white text-xs underline underline-offset-2 transition-colors duration-300">
                Privacy Notice
              </Link>
              <Link to="/cookies-policy" className="text-white/70 hover:text-white text-xs underline underline-offset-2 transition-colors duration-300">
                Cookies Policy
              </Link>
            </div>
          </div>

          {/* Col 2: Our Offices */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xl font-bold mb-6">Our Offices</h4>
            <div className="flex flex-col gap-4 text-white/80 text-sm">
              <p className="leading-relaxed">Via Paolo Andreani, 6 20122 Milan</p>
              <p className="leading-relaxed">Via Santo Stefano, 166, 40125 Bologna BO</p>
            </div>
          </div>

          {/* Col 3: Contact Us — right aligned */}
          <div className="flex flex-col items-end text-right">
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm mb-8">
              <p className="text-white/80">
                <span className="font-semibold text-white">Email: </span>
                <a href="mailto:info@mpimmigration.com" className="hover:text-white transition-colors duration-300">
                  info@mpimmigration.com
                </a>
              </p>
              <p className="text-white/80">
                <span className="font-semibold text-white">Tel: </span>
                <a href="tel:+390254123890" className="hover:text-white transition-colors duration-300">
                  +39 02 54123890
                </a>
              </p>
              <p className="text-white/80">
                <span className="font-semibold text-white">Tel: </span>
                <a href="tel:+390519988966" className="hover:text-white transition-colors duration-300">
                  +39 051 9988966
                </a>
              </p>
            </div>

            {/* Follow Us */}
            <p className="text-sm font-semibold text-white mb-3">Follow us</p>
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/mp-immigration-srl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#0A66C2' }}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/mpimmigrationitaly/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
          <div className="text-center">
            <p className="text-sm text-white/80">© Anas Abdul Jabbar 2025 | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}