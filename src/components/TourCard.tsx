import { memo } from 'react';  // ← Add this import
import { ArrowRight, Calendar, Clock, Users } from 'lucide-react';
import { TourPackage } from '../types/tour';

interface TourCardProps {
  tour: TourPackage;
  onReadMore: () => void;
}

const TourCard = memo(({ tour, onReadMore }: TourCardProps) => {
  return (
// Both components
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 will-change-transform">      <img
        src={tour.image_url}
        alt={tour.title}
        loading="lazy"
        decoding="async"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.title}</h3>

        <div className="text-red-800 font-bold text-lg mb-3">from {tour.price} €</div>

        <div className="flex flex-wrap gap-2 mb-3 text-xs">
          {tour.schedule && (
            <div className="flex items-center gap-1 text-gray-600">
              <Calendar className="w-3 h-3" />
              <span>{tour.schedule}</span>
            </div>
          )}
          {tour.duration && (
            <div className="flex items-center gap-1 text-gray-600">
              <Clock className="w-3 h-3" />
              <span>{tour.duration}</span>
            </div>
          )}
        </div>

        {tour.status && (
          <div className="mb-3">
            <span className="inline-block bg-brand-primary/10 text-brand-deep px-2 py-1 rounded text-xs">
              {tour.status}
            </span>
          </div>
        )}

        {tour.participants && (
          <div className="flex items-center gap-1 text-xs text-gray-600 mb-3">
            <Users className="w-3 h-3" />
            <span>{tour.participants}</span>
          </div>
        )}

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {tour.short_description}
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
});


TourCard.displayName = 'TourCard';  // ← Add this for debugging

export default TourCard;
