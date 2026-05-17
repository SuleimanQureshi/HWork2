import { ArrowRight } from 'lucide-react';
import { Service } from '../types/tour';

interface ServiceCard2Props {
  service: Service;
  onReadMore: () => void;
}

export default function ServiceCard2({ service, onReadMore }: ServiceCard2Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 will-change-transform">
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-red-900 mb-4">
          {service.title}
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
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