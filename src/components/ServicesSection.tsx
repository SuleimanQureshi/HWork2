import { Wine, FileText, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: Wine,
    title: 'Food and Wine Tours',
    description: 'Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac'
  },
  {
    icon: FileText,
    title: 'Travel Opportunities',
    description: 'Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac'
  },
  {
    icon: MapPin,
    title: 'Solo Travel Planning',
    description: 'Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac'
  }
];

export default function ServicesSection() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/services');
  };

  return (
    <section className="bg-brand-cream py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={handleCardClick}
              className="bg-brand-cream rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-9 h-9 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-red-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}