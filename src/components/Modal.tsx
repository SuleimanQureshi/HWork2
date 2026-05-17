import { X } from 'lucide-react';
import { TourPackage, Service } from '../types/tour';

interface ModalProps {
  item: TourPackage | Service;
  onClose: () => void;
}

export default function Modal({ item, onClose }: ModalProps) {
  const isTour = 'price' in item;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {item.image_url && (
          <img
            src={item.image_url}
            alt={item.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        )}

        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{item.title}</h2>

          {isTour && (
            <>
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <span className="font-bold text-2xl text-red-800">from {(item as TourPackage).price} €</span>
                {(item as TourPackage).schedule && (
                  <span className="bg-gray-100 px-3 py-1 rounded">{(item as TourPackage).schedule}</span>
                )}
                {(item as TourPackage).duration && (
                  <span className="text-gray-500">{(item as TourPackage).duration}</span>
                )}
              </div>

              {(item as TourPackage).status && (
                <div className="mb-4">
                  <span className="inline-block bg-brand-primary/10 text-brand-deep px-3 py-1 rounded text-sm">
                    {(item as TourPackage).status}
                  </span>
                </div>
              )}
            </>
          )}

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">{item.full_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
