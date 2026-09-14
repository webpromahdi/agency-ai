import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Title from '../ui/Title';
import { testimonialsData } from '../../assets/assets';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Optional subtle auto-rotation that pauses when hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const current = testimonialsData[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <section
      id='testimonials'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white relative overflow-hidden'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Title
        title='Trusted by Visionary Leaders'
        description='Read how we empower founders, product leaders, and enterprise teams to achieve breakthrough results.'
      />

      <div className='w-full max-w-4xl mt-4 relative'>
        {/* Main Testimonial Card */}
        <div className='relative rounded-3xl border border-gray-200/80 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 sm:p-12 shadow-2xl shadow-gray-200/50 dark:shadow-none min-h-[340px] flex flex-col justify-between'>
          {/* Subtle quote watermark decoration */}
          <div className='absolute top-6 right-8 text-7xl font-serif text-gray-100 dark:text-gray-800/40 select-none pointer-events-none'>
            “
          </div>

          <AnimatePresence mode='wait' custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className='flex flex-col justify-between h-full'
            >
              <div>
                {/* Rating & Metric badge */}
                <div className='flex flex-wrap items-center justify-between gap-3 mb-6'>
                  <div className='flex items-center gap-1'>
                    {[...Array(current.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className='w-5 h-5 text-amber-400 fill-amber-400'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>
                    ))}
                    <span className='ml-2 text-xs font-bold text-gray-500 dark:text-gray-400'>
                      5.0 Verified Client Review
                    </span>
                  </div>

                  <span className='text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20'>
                    {current.metric}
                  </span>
                </div>

                {/* Quote */}
                <p className='text-base sm:text-xl font-normal leading-relaxed text-gray-800 dark:text-gray-200 italic'>
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className='mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between flex-wrap gap-4'>
                <div className='flex items-center gap-4'>
                  <img
                    src={current.image}
                    alt={current.name}
                    className='w-12 h-12 rounded-full object-cover ring-2 ring-primary/30'
                  />
                  <div>
                    <h4 className='font-bold text-sm sm:text-base text-gray-900 dark:text-white'>
                      {current.name}
                    </h4>
                    <p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
                      {current.role} • <span className='font-medium text-primary'>{current.company}</span>
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className='flex items-center gap-2'>
                  <button
                    type='button'
                    onClick={prevTestimonial}
                    aria-label='Previous testimonial'
                    className='p-2.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white transition-all cursor-pointer'
                  >
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M15 19l-7-7 7-7' />
                    </svg>
                  </button>
                  <button
                    type='button'
                    onClick={nextTestimonial}
                    aria-label='Next testimonial'
                    className='p-2.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white transition-all cursor-pointer'
                  >
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className='flex items-center justify-center gap-2 mt-6'>
          {testimonialsData.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type='button'
              onClick={() => {
                setDirection(dotIndex > currentIndex ? 1 : -1);
                setCurrentIndex(dotIndex);
              }}
              aria-label={`Go to testimonial ${dotIndex + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                dotIndex === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
