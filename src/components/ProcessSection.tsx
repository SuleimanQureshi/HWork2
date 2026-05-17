import { useEffect, useRef, useState } from 'react';

const processes = [
  {
    number: '01',
    title: 'Visa Voyage Agency',
    description: 'Lorem Ipsum is simply dummy text the printing and typeser',
  },
  {
    number: '02',
    title: 'International Access Visas',
    description: 'Lorem Ipsum is simply dummy text the printing and typeser',
  },
  {
    number: '03',
    title: 'Gateway to Global Citizenship',
    description: 'Lorem Ipsum is simply dummy text the printing and typeser',
  },
];

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute -left-20 top-0 w-96 h-96 opacity-10" viewBox="0 0 400 400">
          <defs>
            <pattern id="wave" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 20 Q 10 10 20 20 T 40 20" stroke="#8B2346" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#wave)" />
        </svg>

        <svg className="absolute -right-20 top-1/2 w-96 h-96 opacity-10" viewBox="0 0 400 400">
          <defs>
            <pattern id="wave2" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 20 Q 10 10 20 20 T 40 20" stroke="#8B2346" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#wave2)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 sm:mb-20 lg:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <svg className="w-5 h-5 text-brand-deep" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <p className="text-xs sm:text-sm text-brand-deep font-semibold tracking-widest">
              Services Overview
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-deep leading-tight">
            Unforgettable Getaways<br className="hidden sm:block" />Escaping Routine
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {processes.map((process, index) => (
            <div
              key={process.number}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-8 group">
                <svg width="80" height="80" viewBox="0 0 80 80" className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <text
                    x="40"
                    y="50"
                    fontSize="48"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill="none"
                    stroke="#8B2346"
                    strokeWidth="1.5"
                    className="font-bold"
                  >
                    {process.number}
                  </text>
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-brand-deep mb-4">
                {process.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
