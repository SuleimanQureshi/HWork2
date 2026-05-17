import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Corporate Immigration',
    id: 'corporate-immigration',
    slug: 'corporate-immigration',
    items: [
      {
        name: 'Work Permits',
        id: 'work-permits',
        image: '/Pictures for MP/workpermits.jpg',
        description: 'Italian work permit assistance'
      }
    ]
  },
  {
    title: 'Visa & Citizenship',
    id: 'visa-citizenship-assistance',
    slug: 'visa-citizenship',
    items: [
      {
        name: 'Elective Residence Visas',
        id: 'elective-residence-visas',
        image: '/Pictures for MP/electiveresidency.jpg',
        description: 'Live in Italy without working'
      },
      {
        name: 'Investor & Entrepreneur Visas',
        id: 'investor-entrepreneur-visas',
        image: '/Pictures for MP/investorvisa.jpg',
        description: 'Business and investment visas'
      },
      {
        name: 'Family Reunification Visas',
        id: 'family-reunification-visas',
        image: '/Pictures for MP/familyreunification.jpg',
        description: 'Reunite with your family in Italy'
      },
      {
        name: 'Digital Nomad Visas',
        id: 'digital-nomad-visas',
        image: '/Pictures for MP/digitalnomad.jpg',
        description: 'Work remotely from Italy'
      },
      {
        name: 'Italian Citizenship',
        id: 'italian-citizenship',
        image: '/Pictures for MP/italiancitizenship.jpg',
        description: 'Acquire Italian citizenship'
      },
      {
        name: 'Study Permits',
        id: 'study-permits',
        image: '/Pictures for MP/studyvisa.jpg',
        description: 'Study at Italian institutions'
      }
    ]
  },
  {
    title: 'Document & Ancestry',
    id: 'document-procurement-ancestry',
    slug: 'document-procurement',
    items: [
      {
        name: 'Italian Document Retrieval',
        id: 'italian-document-retrieval',
        image: '/Pictures for MP/documentretrival.jpg',
        description: 'Retrieve vital Italian records'
      },
      {
        name: 'Citizenship Eligibility Assessment',
        id: 'citizenship-eligibility-assessment',
        image: '/Pictures for MP/cirizenshipassesemnt.jpg',
        description: 'Check your eligibility for citizenship'
      },
      {
        name: 'Genealogical Research',
        id: 'genealogical-research',
        image: '/Pictures for MP/Genealogical Research.jpg',
        description: 'Trace your Italian ancestry'
      }
    ]
  },
  {
    title: 'Real Estate',
    id: 'real-estate-services',
    slug: 'real-estate',
    items: [
      {
        name: 'Property Search & Selection',
        id: 'property-search-selection',
        image: '/Pictures for MP/propertysearch.jpg',
        description: 'Find your ideal Italian property'
      },
      {
        name: 'Lease & Purchase Support',
        id: 'lease-purchase-support',
        image: '/Pictures for MP/leaseandpurchase.jpg',
        description: 'Full support through transactions'
      },
      {
        name: 'Contract Review',
        id: 'contract-review',
        image: '/Pictures for MP/contract review.jpg',
        description: 'Expert Italian contract review'
      }
    ]
  },
  {
    title: 'Other Services',
    id: 'other-services',
    slug: 'other-services',
    items: [
      {
        name: 'Translation & Legalisation',
        id: 'translation-legalisation',
        image: '/Pictures for MP/translationandlegalization.jpg',
        description: 'Certified translations and apostilles'
      },
      {
        name: 'Company Setup',
        id: 'company-setup',
        image: '/Pictures for MP/companysetup.jpg',
        description: 'Establish your business in Italy'
      }
    ]
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileOpenCategory, setMobileOpenCategory] = useState<string | null>(null);
  const navigate = useNavigate();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setActiveCategory(null);
    setMobileOpenCategory(null);
  };

  const handleCategoryClick = (slug: string) => {
    navigate(`/services/${slug}`);
    handleNavClick();
  };

  const handleSubItemClick = (categorySlug: string, itemId: string) => {
    navigate(`/services/${categorySlug}#${itemId}`);
    handleNavClick();
  };

  const handleMouseEnter = (categoryId: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveCategory(categoryId);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveCategory(null), 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const activeServiceCategory = serviceCategories.find(c => c.id === activeCategory);

  return (
    <header className="bg-brand-cream relative z-50">
      {/* ── Desktop bar: CSS grid with 3 columns: logo | nav | button ── */}
      <div
        className="hidden md:grid w-full items-center"
        style={{ gridTemplateColumns: 'auto 1fr auto', padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem)' }}
      >
        {/* Col 1 — Logo */}
        <Link
          to="/"
          onClick={handleNavClick}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <img src="/Logo1.png" alt="MP Immigration" className="h-16 md:h-20 lg:h-28 w-auto" />
        </Link>

        {/* Col 2 — Nav: flex with space-evenly so gaps are always identical */}
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          {/* Home */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center justify-center font-semibold text-red-900 hover:text-red-700 transition-colors tracking-wide py-2 px-2 rounded hover:bg-red-50 whitespace-nowrap"
            style={{ fontSize: 'clamp(0.6rem, 1.05vw, 1rem)' }}
          >
            Home
          </Link>

          {/* Service Categories */}
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="relative flex items-center justify-center"
              onMouseEnter={() => handleMouseEnter(category.id)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleCategoryClick(category.slug)}
                className={`flex items-center justify-center gap-1 font-semibold tracking-wide py-2 px-2 rounded transition-colors whitespace-nowrap
                ${activeCategory === category.id
                    ? 'text-red-700 bg-red-50'
                    : 'text-red-900 hover:text-red-700 hover:bg-red-50'
                  }`}
                style={{ fontSize: 'clamp(0.6rem, 1.05vw, 1rem)' }}
              >
                {category.title}
                <ChevronDown
                  className={`flex-shrink-0 transition-transform duration-200 ${activeCategory === category.id ? 'rotate-180' : ''}`}
                  style={{ width: 'clamp(10px, 1vw, 16px)', height: 'clamp(10px, 1vw, 16px)' }}
                />
              </button>
            </div>
          ))}
        </nav>

        {/* Col 3 — Contact button */}
        <Link
          to="/appointment"
          onClick={handleNavClick}
          className="flex items-center gap-1 bg-brand-primary hover:bg-brand-deep transition-colors text-gray-900 font-semibold rounded-full shadow-lg whitespace-nowrap"
          style={{
            fontSize: 'clamp(0.6rem, 1.05vw, 1rem)',
            padding: 'clamp(0.4rem, 0.6vw, 0.625rem) clamp(0.75rem, 1.2vw, 1.25rem)',
          }}
        >
          Contact Us
          <ArrowRight style={{ width: 'clamp(12px, 1.2vw, 16px)', height: 'clamp(12px, 1.2vw, 16px)' }} />
        </Link>
      </div>

      {/* ── Mobile bar ── */}
      <div className="md:hidden w-full px-4 py-4 flex items-center justify-between">
        <Link to="/" onClick={handleNavClick} className="hover:opacity-80 transition-opacity">
          <img src="/Logo1.png" alt="MP Immigration" className="h-16 w-auto" />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-red-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mega Dropdown — full width panel */}
      {activeCategory && activeServiceCategory && (
        <div
          className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-50 overflow-hidden"
          style={{ height: '340px' }}
          onMouseEnter={() => handleMouseEnter(activeCategory)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-8 h-full flex flex-col py-6">
            {/* Category Header */}
            <div className="mb-5 flex items-center justify-between flex-shrink-0">
              <div>
                <h2 className="text-xl font-bold text-red-900 tracking-tight">
                  {activeServiceCategory.title}
                </h2>
                <div className="h-0.5 w-12 bg-brand-primary mt-1"></div>
              </div>
              <button
                onClick={() => handleCategoryClick(activeServiceCategory.slug)}
                className="text-sm text-red-700 hover:text-red-900 font-semibold flex items-center gap-1 transition-colors"
              >
                View all <ArrowRight size={14} />
              </button>
            </div>

            {/* Sub-service image cards */}
            <div style={{ maxWidth: activeServiceCategory.items.length === 1 ? '45%' : '100%' }}>
              <div
                className="grid gap-5 flex-1 items-start"
                style={{
                  gridTemplateColumns: `repeat(${Math.min(activeServiceCategory.items.length, 6)}, minmax(0, 1fr))`
                }}
              >
                {activeServiceCategory.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSubItemClick(activeServiceCategory.slug, item.id)}
                    className="text-left group"
                  >
                    <div className="overflow-hidden rounded-lg mb-2.5 bg-gray-100" style={{ height: '150px' }}>
                      <img
                        src={(item as any).image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-red-700 transition-colors leading-tight mb-0.5">
                      {item.name}
                    </p>
                    {(item as any).description && (
                      <p className="text-xs text-gray-500 leading-snug">{(item as any).description}</p>
                    )}
                    <div className="flex items-center gap-1 mt-1.5 text-xs text-red-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Find out more <ArrowRight size={11} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}



      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <Link
              to="/"
              onClick={handleNavClick}
              className="block text-sm font-semibold text-red-900 hover:text-red-700 py-2 px-3 rounded hover:bg-gray-50 transition-colors"
            >
              Home
            </Link>

            {serviceCategories.map((category) => (
              <div key={category.id}>
                <button
                  onClick={() =>
                    setMobileOpenCategory(mobileOpenCategory === category.id ? null : category.id)
                  }
                  className="flex items-center justify-between w-full text-sm font-semibold text-red-900 hover:text-red-700 py-2 px-3 rounded hover:bg-gray-50 transition-colors"
                >
                  {category.title}
                  <ChevronDown
                    size={15}
                    className={`transition-transform ${mobileOpenCategory === category.id ? 'rotate-180' : ''}`}
                  />
                </button>

                {mobileOpenCategory === category.id && (
                  <div className="ml-3 mt-1 mb-2 space-y-1">
                    <button
                      onClick={() => handleCategoryClick(category.slug)}
                      className="block w-full text-left text-xs font-bold text-red-800 hover:text-red-600 px-3 py-1.5 uppercase tracking-wide transition-colors"
                    >
                      View all → {category.title}
                    </button>
                    {category.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSubItemClick(category.slug, item.id)}
                        className="flex items-center gap-3 w-full text-left px-3 py-2 rounded hover:bg-gray-50 transition-colors"
                      >
                        <img
                          src={(item as any).image}
                          alt={item.name}
                          className="w-10 h-10 rounded object-cover flex-shrink-0"
                        />
                        <span className="text-sm text-gray-700 hover:text-red-700 transition-colors">{item.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/appointment"
              onClick={handleNavClick}
              className="block w-full text-center bg-brand-primary hover:bg-brand-deep transition-colors text-gray-900 font-semibold px-4 py-3 rounded-full mt-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}