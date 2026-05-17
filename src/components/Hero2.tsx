import { Check, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const countries = [
  { name: 'Canada' },
  { name: 'Bangladesh' },
  { name: 'Australia' },
  { name: 'United Kingdom' },
];

const features = ['Mistakes To Avoid', 'Your Startup', 'Knew About Fonts'];

export default function Hero2() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 max-w-[1400px] mx-auto">
      <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div>
            <p className="text-xs sm:text-sm text-brand-deep font-medium tracking-wider mb-3 sm:mb-4">
              AVAILABLE COUNTRIES ～～～〉
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-deep leading-tight">
              Urban Escapes City<br />Hopping Adventures
            </h1>
          </div>
          <button className="hidden sm:flex items-center gap-2 bg-brand-primary text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:bg-brand-deep transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View More <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {countries.map((country, index) => (
            <div
              key={country.name}
              className={`bg-white rounded-3xl p-6 lg:p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-300 border-4 border-brand-primary mb-6"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-brand-deep mb-6">
                {country.name}
              </h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-brand-deep flex-shrink-0 mt-0.5" />
                    <span className="text-sm lg:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button className="sm:hidden flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-deep transition-all duration-300 mt-6 mx-auto">
          View More <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
