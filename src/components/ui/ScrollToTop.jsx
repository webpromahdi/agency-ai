import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (totalScroll > 0) {
        setScrollProgress(Math.min((currentScroll / totalScroll) * 100, 100));
      }

      // Show button after scrolling down 350px
      setIsVisible(currentScroll > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG circular progress ring calculations
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type='button'
          onClick={scrollToTop}
          aria-label='Scroll back to top'
          initial={{ opacity: 0, scale: 0.6, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 15 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.25 }}
          className='fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-900 shadow-xl shadow-primary/20 border border-gray-200 dark:border-gray-800 text-primary cursor-pointer group focus:outline-hidden focus:ring-2 focus:ring-primary/40'
        >
          {/* Circular Progress Ring */}
          <svg
            className='absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5'
            viewBox='0 0 44 44'
          >
            <circle
              cx='22'
              cy='22'
              r={radius}
              className='stroke-gray-200 dark:stroke-gray-800'
              strokeWidth='2.5'
              fill='transparent'
            />
            <circle
              cx='22'
              cy='22'
              r={radius}
              className='stroke-primary transition-all duration-150'
              strokeWidth='2.5'
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap='round'
              fill='transparent'
            />
          </svg>

          {/* Up Arrow Icon */}
          <svg
            className='w-4.5 h-4.5 text-gray-700 dark:text-gray-200 group-hover:text-primary group-hover:-translate-y-0.5 transition-all duration-200 z-10'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2.5}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M5 10l7-7m0 0l7 7m-7-7v18' />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ScrollToTop;
