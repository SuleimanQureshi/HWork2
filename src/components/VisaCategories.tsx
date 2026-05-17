import { ArrowUpRight, Briefcase, Wrench, GraduationCap, Globe } from 'lucide-react';

const VisaCategories = () => {
  const visaTypes = [
    {
      title: 'Business Visa',
      description: 'Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu',
      icon: Briefcase,
    },
    {
      title: 'Working Visa',
      description: 'Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu',
      icon: Wrench,
    },
    {
      title: 'Student Visa',
      description: 'Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu',
      icon: GraduationCap,
    },
    {
      title: 'Tourist Visa',
      description: 'Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu',
      icon: Globe,
    },
  ];

  return (
    <section className="py-20 px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-5 h-5 text-red-900" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
              <path d="M9 3v18M15 3v18M3 9h18M3 15h18" strokeWidth="2"/>
            </svg>
            <span className="text-sm font-medium text-red-900 tracking-wider uppercase">
              Visa Category
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-red-900 leading-tight">
            Seeking Adventure Thrills
            <br />
            and Excitement Await
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visaTypes.map((visa, index) => (
            <button
              key={index}
              onClick={() => console.log(`Clicked ${visa.title}`)}
              className="group bg-brand-cream rounded-3xl p-6 border-2 border-gray-200 hover:border-red-200 hover:shadow-xl transition-all duration-300 text-left overflow-hidden"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl group-hover:from-red-50 group-hover:to-red-100 transition-all duration-300" />

                <div className="flex-1 flex flex-col justify-between py-2">
                  <div>
                    <h3 className="text-2xl font-bold text-red-900 mb-3 group-hover:text-red-800 transition-colors duration-300">
                      {visa.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {visa.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <button className="w-12 h-12 rounded-xl border-2 border-brand-primary flex items-center justify-center hover:bg-brand-primary hover:scale-110 transition-all duration-300 group/btn">
                      <ArrowUpRight className="w-5 h-5 text-amber-600 group-hover/btn:text-white transition-colors duration-300" />
                    </button>

                    <visa.icon className="w-12 h-12 text-red-900 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaCategories;
