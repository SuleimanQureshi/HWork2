import { ArrowRight } from 'lucide-react';
import { Service } from '../types/tour';

interface ServiceCardProps {
  service: Service;
  onReadMore: () => void;
}

export default function ServiceCard({ service, onReadMore }: ServiceCardProps) {
  return (
// Both components
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 will-change-transform">      <img
        src={service.image_url}
        alt={service.title}
        loading="lazy"
        decoding="async"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {service.short_description}
        </p>

        <button
          onClick={onReadMore}
          className="flex items-center gap-1 text-red-800 hover:text-red-900 font-medium text-sm transition-colors"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
