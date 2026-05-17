import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Corporate Immigration & Relocation',
    id: 'corporate-immigration',
    slug: 'corporate-immigration',
  },
  {
    title: 'Visa and Citizenship Assistance',
    id: 'visa-citizenship-assistance',
    slug: 'visa-citizenship',
  },
  {
    title: 'International Taxation',
    id: 'international-taxation',
    slug: 'international-taxation',
  },
  {
    title: 'Document Procurement & Ancestry Research',
    id: 'document-ancestry',
    slug: 'document-procurement',
  },
  {
    title: 'Real Estate Services',
    id: 'real-estate-services',
    slug: 'real-estate',
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleCategoryClick = (slug: string) => {
    navigate(`/services/${slug}`);
    handleNavClick();
  };

  return (
    <header className="bg-brand-cream relative z-50">
      {/* ── Desktop bar: CSS grid with 3 columns: logo | nav | buttons ── */}
      <div
        className="hidden lg:grid w-full items-center"
        style={{ gridTemplateColumns: 'auto 1fr auto', padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem)' }}
      >
        {/* Col 1 — Logo */}
        <Link
          to="/"
          onClick={handleNavClick}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <img src="/Logo1.png" alt="MP Immigration" className="h-16 lg:h-20 xl:h-28 w-auto object-contain" />
        </Link>

        {/* Col 2 — Nav */}
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
          className="px-2 overflow-hidden gap-1 xl:gap-2"
        >
          {/* Service Categories */}
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="relative flex items-center justify-center"
            >
              <button
                onClick={() => handleCategoryClick(category.slug)}
                className="flex items-center justify-center gap-1 font-semibold text-red-900 hover:text-red-700 hover:bg-red-50 tracking-wide py-2 px-2 rounded transition-colors whitespace-nowrap"
                style={{ fontSize: 'clamp(0.6rem, 1.05vw, 1rem)' }}
              >
                {category.title}
              </button>
            </div>
          ))}
        </nav>

        {/* Col 3 — Action buttons */}
        <div className="flex-shrink-0 flex items-center gap-2 lg:gap-3">
          <a
            href="https://mpimmigration.relocationonline.com/users/sign_in"
            onClick={handleNavClick}
            className="flex items-center justify-center gap-1 bg-brand-teal hover:bg-[#104C52] transition-colors text-white font-semibold rounded-full shadow-lg whitespace-nowrap"
            style={{
              fontSize: 'clamp(0.6rem, 1.05vw, 1rem)',
              padding: 'clamp(0.4rem, 0.6vw, 0.625rem) clamp(0.75rem, 1.2vw, 1.25rem)',
            }}
          >
            Client login
          </a>
          <Link
            to="/appointment"
            onClick={handleNavClick}
            className="flex items-center justify-center gap-1 bg-brand-primary hover:bg-brand-deep transition-colors text-gray-900 font-semibold rounded-full shadow-lg whitespace-nowrap"
            style={{
              fontSize: 'clamp(0.6rem, 1.05vw, 1rem)',
              padding: 'clamp(0.4rem, 0.6vw, 0.625rem) clamp(0.75rem, 1.2vw, 1.25rem)',
            }}
          >
            Contact us
            <ArrowRight style={{ width: 'clamp(12px, 1.2vw, 16px)', height: 'clamp(12px, 1.2vw, 16px)' }} />
          </Link>
        </div>
      </div>

      {/* ── Mobile bar ── */}
      <div className="lg:hidden w-full px-4 py-4 flex items-center justify-between">
        <Link to="/" onClick={handleNavClick} className="hover:opacity-80 transition-opacity min-w-[120px]">
          <img src="/Logo1.png" alt="MP Immigration" className="h-16 w-auto object-contain" />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-red-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {serviceCategories.map((category) => (
              <div key={category.id}>
                <button
                  onClick={() => handleCategoryClick(category.slug)}
                  className="w-full text-left font-semibold text-red-900 hover:text-red-700 py-2 px-3 rounded hover:bg-gray-50 transition-colors text-sm"
                >
                  {category.title}
                </button>
              </div>
            ))}

            <a
              href="https://mpimmigration.relocationonline.com/users/sign_in"
              onClick={handleNavClick}
              className="block w-full text-center bg-brand-teal hover:bg-[#104C52] transition-colors text-white font-semibold px-4 py-3 rounded-full mt-4"
            >
              Client login
            </a>
            <Link
              to="/appointment"
              onClick={handleNavClick}
              className="block w-full text-center bg-brand-primary hover:bg-brand-deep transition-opacity text-gray-900 font-semibold px-4 py-3 rounded-full mt-4"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}