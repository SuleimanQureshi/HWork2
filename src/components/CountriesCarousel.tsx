import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Map } from 'lucide-react';

interface VisaOption {
  title: string;
  description: string;
  sectionId: string;
  slug: string;
  image: string;
}

const CountriesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const navigate = useNavigate();

  const visaOptions: VisaOption[] = [
    {
      title: 'Corporate Immigration & Relocation',
      description: 'Moving people, growing businesses; your partner in global mobility.',
      sectionId: 'corporate-immigration',
      slug: 'corporate-immigration',
      image: '/3.jpg?w=600&q=80',
    },
    {
      title: 'Visa and Citizenship Assistance',
      description: 'Your road to Italy: visa and citizenship services.',
      sectionId: 'visa-citizenship-assistance',
      slug: 'visa-citizenship',
      image: '/14.jpg?w=600&q=80',
    },
    {
      title: 'Document Procurement & Ancestry Research',
      description: 'Your family history, our services: documents and genealogy research.',
      sectionId: 'document-procurement-ancestry',
      slug: 'document-procurement',
      image: '/40.jpg?w=600&q=80',
    },
    {
      title: 'Real estate services.',
      description: 'Make Italy yours: trusted real estate guidance.',
      sectionId: 'real-estate-services',
      slug: 'real-estate',
      image: '/49.jpg?w=600&q=80',
    },
    {
      title: 'International Taxation',
      description: 'Global taxes, local expertise',
      sectionId: 'international-taxation',
      slug: 'international-taxation',
      image: '/27.jpg?w=600&q=80',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? visaOptions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === visaOptions.length - 1 ? 0 : prev + 1));
  };

  const handleNavigate = (visa: VisaOption) => {
    navigate(`/services/${visa.slug}`);
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-red-900 via-red-950 to-red-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-3">
            {/* Scaled up the icon and background for more impact */}
            <div className="bg-white/10 p-3 rounded-xl">
              <Map className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Our Services
              </span>
              {/* Optional: Added a small accent line or sub-label */}
              <div className="h-1 w-12 bg-brand-primary mt-1 rounded-full" />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-110 group"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand-primary flex items-center justify-center hover:bg-brand-primary transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Mobile: single active card + dot indicators */}
        <div className="block md:hidden">
          <div className="rounded-3xl overflow-hidden shadow-2xl min-h-64 relative">
            {/* Background image that shrinks into circle when active */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url('${visaOptions[activeIndex].image}')` }}
            />
            <div className="absolute inset-0 bg-brand-deep/80" />
            <div className="relative p-6 flex flex-col h-full min-h-64">
              {/* Circle avatar with image */}
              <div
                className="w-14 h-14 rounded-full border-2 border-white/60 mb-6 overflow-hidden flex-shrink-0"
                style={{
                  backgroundImage: `url('${visaOptions[activeIndex].image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <h3 className="text-2xl font-bold text-white mb-3">
                {visaOptions[activeIndex].title}
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed text-sm">
                {visaOptions[activeIndex].description}
              </p>
              <button
                onClick={() => handleNavigate(visaOptions[activeIndex])}
                className="group/apply px-6 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center gap-2 text-sm w-fit"
              >
                Find Your Solution
                <ArrowRight className="w-4 h-4 group-hover/apply:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {visaOptions.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${index === activeIndex
                  ? 'w-6 h-2 bg-brand-primary'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: horizontal carousel */}
        <div className="hidden md:block">
          <div className="relative flex justify-center">
            <div className="flex gap-6 py-4" style={{ width: 'fit-content' }}>
              {visaOptions.map((visa, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`flex-shrink-0 transition-all duration-500 ${isActive ? 'w-96' : 'w-44'}`}
                  >
                    <div
                      className={`rounded-3xl overflow-hidden transition-all duration-500 h-96 relative ${isActive ? 'shadow-2xl scale-105' : 'hover:scale-105'
                        }`}
                    >
                      {/* 
                        Background layer:
                        - Inactive: full image visible (no overlay)
                        - Active: image hidden behind amber background
                      */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                        style={{ backgroundImage: `url('${visa.image}')` }}
                      />

                      {/* Amber overlay: invisible on inactive, full on active */}
                      <div
                        className={`absolute inset-0 bg-brand-primary transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                      />

                      {/* Subtle dark overlay on inactive cards for polish */}
                      <div
                        className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'
                          }`}
                      />

                      <div className="relative p-6 h-full flex flex-col">
                        {/* 
                          Circle avatar:
                          - Inactive: hidden (opacity 0), full-size placeholder
                          - Active: visible with image inside
                          The image "travels" from the card background into this circle
                        */}
                        <div
                          className={`rounded-full border-2 border-white/60 overflow-hidden flex-shrink-0 transition-all duration-500 mb-auto ${isActive
                            ? 'w-16 h-16 opacity-100'
                            : 'w-16 h-16 opacity-0'
                            }`}
                          style={{
                            backgroundImage: `url('${visa.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        />

                        {isActive && (
                          <div className="text-left animate-fadeIn">
                            <h3 className="text-3xl font-bold text-white mb-3">
                              {visa.title}
                            </h3>
                            <p className="text-white/90 mb-6 leading-relaxed">
                              {visa.description}
                            </p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNavigate(visa);
                              }}
                              className="group/apply px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center gap-2"
                            >
                              Find Your Solution
                              <ArrowRight className="w-5 h-5 group-hover/apply:translate-x-1 transition-transform duration-300" />
                            </button>
                          </div>
                        )}

                        {!isActive && (
                          <div className="mt-auto">
                            {/* Invisible placeholder to keep layout consistent */}
                            <div className="w-16 h-16 rounded-full border-2 border-white/20 opacity-0" />
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CountriesCarousel;