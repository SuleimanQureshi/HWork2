import { Globe, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// const stats = [
//   { value: '10k+', label: 'Complete project' },
//   { value: '20+', label: 'Team member' },
//   { value: '5k+', label: 'Winning award' },
//   { value: '100+', label: 'Complete project' },
// ];
const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '5000+', label: 'Clients Satisfied' },
  { value: '10000+', label: 'Projects Completed' },
  { value: '30+', label: 'Countries Supported' },
  { value: '150+', label: 'Companies Assisted' },
  { value: '97%', label: 'Satisfaction Rate' },
];

export default function OffersSection() {
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
    <section ref={sectionRef} className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

      </div>

      <div className={`mt-12 lg:mt-16 bg-brand-teal rounded-3xl p-8 sm:p-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-white text-center hover:scale-110 transition-transform duration-300`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base lg:text-lg opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
