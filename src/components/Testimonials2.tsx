import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'James W',
    quote: 'My biggest concern was making a small mistake that could delay everything. MP Immigration explained the process clearly, handled all the paperwork, and kept me informed at every stage. I’d absolutely recommend them to anyone who wants a smooth experience.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    id: 2,
    name: '2Lyod Gomez',
    quote: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    id: 3,
    name: '3Lyod Gomez',
    quote: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotation - works for both mobile and desktop
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 600);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 600);
  };

  const nextSlide = () => {
    handleNext();
  };

  const prevSlide = () => {
    handlePrev();
  };

  // Get the visible cards for desktop (2 at a time)
  const getDesktopCards = () => {
    const cards = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % testimonials.length;
      cards.push({ ...testimonials[index], displayIndex: i });
    }
    return cards;
  };

  const renderTestimonialCard = (testimonial: Testimonial, index: number) => (
    <div
      className={`bg-white rounded-2xl p-8 shadow-sm transition-all duration-300 cursor-pointer relative ${
        hoveredCard === index ? 'shadow-xl scale-105' : ''
      }`}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Top quotation mark */}
      <div className="absolute top-8 left-8 text-6xl text-pink-100 leading-none font-serif select-none">
        "
      </div>

      {/* Profile section */}
      <div className="flex flex-col items-center mb-6 relative z-10">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-white shadow-md"
        />
        <h3 className="text-base font-semibold text-gray-900">{testimonial.name}</h3>
      </div>

      {/* Quote text */}
      <p className="text-sm leading-relaxed text-gray-700 text-center relative z-10 px-4">
        {testimonial.quote}
      </p>

      {/* Bottom quotation mark */}
      <div className="absolute bottom-8 right-8 text-6xl text-pink-100 leading-none font-serif select-none">
        "
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 bg-[#f5f5f0]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-brand-primary">Happy Customers Says</h2>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-200 text-gray-400 hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white hover:bg-[#6a0f2a] transition-all duration-300 shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Desktop: Show 2 cards at once with sliding animation */}
        <div className="hidden md:block relative overflow-hidden">
          <style>{`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
          <div 
            key={currentIndex}
            className="grid grid-cols-2 gap-8"
            style={{ animation: 'slideIn 0.6s ease-in-out' }}
          >
            {getDesktopCards().map((testimonial, index) => renderTestimonialCard(testimonial, index))}
          </div>
        </div>

        {/* Mobile: Show 1 card at a time with auto-rotation */}
        <div className="md:hidden relative overflow-hidden">
          <div 
            key={currentIndex} 
            style={{ animation: 'slideIn 0.6s ease-in-out' }}
          >
            {renderTestimonialCard(testimonials[currentIndex], 0)}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-brand-primary w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}