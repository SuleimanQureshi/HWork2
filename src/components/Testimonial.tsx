import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "“My biggest concern was making a small mistake that could delay everything. MP Immigration explained the process clearly, handled all the paperwork, and kept me informed at every stage. I’d absolutely recommend them to anyone who wants a smooth experience.”",
    name: "James W",
    role: "Tech Professional",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    quote: "“I was completely overwhelmed by how complex the Italian immigration system seemed. MP Immigration broke everything down into clear steps and took care of details I didn’t even know existed. The whole process felt far less stressful than I expected.”",
    name: "Emily F",
    role: "Creative Professional",
    image: "https://images.unsplash.com/photo-1630939687530-241d630735df?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    quote: "“I needed a service I could trust without having to micromanage the process. MP Immigration was proactive, precise, and always ahead of deadlines. If you’re considering moving to Italy, they make it straightforward and reassuring.”",
    name: "Michael A",
    role: "Senior Executive",
    image: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=800&h=600&fit=crop&crop=top"
  },
  {
    id: 4,
    quote: "“My main concern was relocating with my family and making sure nothing was overlooked. MP Immigration guided us through every requirement and communicated clearly throughout. I would confidently recommend them to anyone planning a move to Italy.”",
    name: "Rachel T",
    role: "Consulting Manager",
    image: "https://images.unsplash.com/photo-1672638219032-4982467971ad?w=800&h=600&fit=crop"
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0
    })
  };

  return (
    <section style={{ backgroundColor: '#FFF6F3' }} className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ borderRadius: '24px', overflow: 'hidden' }}
            className="h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600"
              alt="Team meeting"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                style={{ backgroundColor: '#FFC233', borderRadius: '24px' }}
                className="p-12"
              >
                <div className="flex flex-col h-full">
                  <p style={{ color: '#FFFFFF', fontSize: '48px' }} className="font-poppins mb-6">
                    "
                  </p>

                  <p
                    style={{ color: '#FFFFFF' }}
                    className="text-lg font-poppins mb-8 flex-1 leading-relaxed"
                  >
                    {testimonials[currentIndex].quote}
                  </p>

                  <div className="flex items-center gap-4 mb-8">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p style={{ color: '#FFFFFF' }} className="font-poppins font-bold">
                        {testimonials[currentIndex].name}
                      </p>
                      <p style={{ color: '#FFFFFF' }} className="font-poppins text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.3)' }} className="pt-6 mb-6" />

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-between">
                    {/* Indicators */}
                    <div className="flex gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                          }}
                          className="transition-all duration-300"
                          style={{
                            width: currentIndex === index ? '32px' : '8px',
                            height: '8px',
                            borderRadius: '4px',
                            backgroundColor: currentIndex === index ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)'
                          }}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Arrow Buttons */}
                    <div className="flex gap-4">
                      <motion.button
                        onClick={handlePrev}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        style={{ backgroundColor: '#FFFFFF' }}
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        aria-label="Previous testimonial"
                      >
                        <ArrowLeft size={20} style={{ color: '#FFC233' }} />
                      </motion.button>
                      <motion.button
                        onClick={handleNext}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        style={{ backgroundColor: '#FFFFFF' }}
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        aria-label="Next testimonial"
                      >
                        <ArrowRight size={20} style={{ color: '#FFC233' }} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}