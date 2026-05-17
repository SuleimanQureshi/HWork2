import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinations';

const AUTO_INTERVAL = 5000; // ms between automatic transitions
const TRANSITION_DURATION = 1000; // ms for the reveal animation

export function HeroSection() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextDestinationIndex, setNextDestinationIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);

  const currentDestination = destinations[currentIndex];

  // Navigate to a specific slide index with the circular reveal animation
  const goTo = useCallback((targetIndex: number) => {
    if (isTransitioning || targetIndex === currentIndex) return;

    setIsTransitioning(true);
    setNextDestinationIndex(targetIndex);

    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setNextDestinationIndex(null);
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  }, [isTransitioning, currentIndex]);

  const goNext = useCallback(() => {
    goTo((currentIndex + 1) % destinations.length);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((currentIndex - 1 + destinations.length) % destinations.length);
  }, [currentIndex, goTo]);

  // Reset and restart the auto-timer whenever the slide changes
  const resetTimer = useCallback(() => {
    if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    autoTimerRef.current = setTimeout(() => {
      setCurrentIndex(prev => {
        const next = (prev + 1) % destinations.length;
        setIsTransitioning(true);
        setNextDestinationIndex(next);
        setTimeout(() => {
          setCurrentIndex(next);
          setNextDestinationIndex(null);
          setIsTransitioning(false);
        }, TRANSITION_DURATION);
        return prev; // keep prev until animation ends
      });
    }, AUTO_INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (autoTimerRef.current) clearTimeout(autoTimerRef.current); };
  }, [currentIndex, resetTimer]);

  const handleManualNav = useCallback((cb: () => void) => {
    if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    cb();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Current slide background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentDestination.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-brand-teal/60 mix-blend-multiply" />
      </div>

      {/* Next slide – circular reveal */}
      {nextDestinationIndex !== null && (
        <motion.div
          initial={{ clipPath: 'circle(0% at 50% 50%)' }}
          animate={{ clipPath: 'circle(150% at 50% 50%)' }}
          transition={{ duration: TRANSITION_DURATION / 1000, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${destinations[nextDestinationIndex].imageUrl})` }}
          />
          <div className="absolute inset-0 bg-brand-teal/60 mix-blend-multiply" />
        </motion.div>
      )}

      {/* Centred text content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDestination.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-4xl"
          >
            <motion.h1
              className="text-6xl md:text-5xl font-bold mb-6 tracking-tight"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
            >
              {currentDestination.headline}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-12 font-light tracking-wide"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
            >
              {currentDestination.subheadline}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`cta-${currentDestination.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-8 flex items-center gap-4"
          >
            <button
              className="px-6 py-2.5 bg-transparent border-2 border-white rounded-full text-white text-sm font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
              onClick={() => {
                if (currentDestination.ctaLink) navigate(currentDestination.ctaLink);
              }}
            >
              <span>{currentDestination.cta}</span>
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next arrow buttons */}
      <button
        aria-label="Previous slide"
        onClick={() => handleManualNav(goPrev)}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        aria-label="Next slide"
        onClick={() => handleManualNav(goNext)}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators (clickable) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {destinations.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handleManualNav(() => goTo(index))}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2'}`}
          />
        ))}
      </div>

      {/* Scroll down hint */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white text-sm font-light tracking-wider">Scroll down</span>
        <svg className="w-5 h-5 text-white animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
}
