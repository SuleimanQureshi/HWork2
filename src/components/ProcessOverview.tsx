import { Map } from 'lucide-react';

const ProcessOverview = () => {
  const services = [
    {
      number: '01',
      title: 'Visa Voyage Agency',
      description: 'Lorem Ipsum is simply dummy text the printing and typeser',
    },
    {
      number: '02',
      title: 'International Access Visa',
      description: 'Lorem Ipsum is simply dummy text the printing and typeser',
    },
    {
      number: '03',
      title: 'Gateway to Global Citizenship',
      description: 'Lorem Ipsum is simply dummy text the printing and typeser',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
        <defs>
          <pattern id="lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="20" y2="20" stroke="#ddd" strokeWidth="0.5" opacity="0.5" />
          </pattern>
        </defs>
        <path d="M -200,400 Q 0,200 200,150 T 600,200 T 1000,300" fill="none" stroke="#e5d4c8" strokeWidth="80" opacity="0.3" />
        <path d="M 1400,600 Q 1200,400 900,350 T 400,450 T 0,550" fill="none" stroke="#d4c5e5" strokeWidth="60" opacity="0.2" />
        <rect width="100%" height="100%" fill="url(#lines)" opacity="0.3" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Map className="w-5 h-5 text-red-900" />
            <span className="text-sm font-medium text-red-900 tracking-wider uppercase">
              Services Overview
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-red-900 leading-tight">
            Unforgettable Getaways
            <br />
            Escaping Routine
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12 items-start">
          {services.map((service, index) => {
            const offsetClass = index === 0 ? 'md:mt-0' : index === 1 ? 'md:mt-12' : 'md:mt-6';
            return (
              <button
                key={index}
                onClick={() => console.log(`Clicked ${service.title}`)}
                className={`group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-gray-100 hover:border-red-200 hover:-translate-y-2 ${offsetClass}`}
              >
                <div className="mb-6">
                  <span className="text-6xl font-light text-gray-200 group-hover:text-red-100 transition-colors duration-300">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-red-900 mb-4 group-hover:text-red-800 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
