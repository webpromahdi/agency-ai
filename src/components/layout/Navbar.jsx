import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import assets from '../../assets/assets';
import ThemeToggleBtn from '../theme/ThemeToggleBtn';

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Team', href: '#our-team' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact-us' },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/70 dark:bg-gray-900/70 border-b border-gray-100 dark:border-gray-800/60'
      >
        <a href='#'>
          <img
            src={theme === 'dark' ? assets.logo_dark : assets.logo}
            className='w-32 sm:w-40'
            alt='Agency.AI Logo'
          />
        </a>

        {/* Desktop Navigation */}
        <div className='hidden sm:flex items-center gap-5 lg:gap-7 text-sm text-gray-700 dark:text-gray-200 font-medium'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='hover:text-primary dark:hover:text-primary transition-colors'
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA & Controls */}
        <div className='flex items-center gap-2 sm:gap-4'>
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          <button
            type='button'
            aria-label='Open navigation menu'
            onClick={() => setSidebarOpen(true)}
            className='sm:hidden cursor-pointer p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
          >
            <img
              src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
              alt=''
              className='w-7'
            />
          </button>

          <a
            href='#contact-us'
            className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all shadow-md shadow-primary/20'
          >
            Connect
            <img src={assets.arrow_icon} width={14} alt='' />
          </a>
        </div>
      </motion.div>

      {/* Mobile Drawer Rendered via Portal to escape containing block and cover full viewport */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {sidebarOpen && (
              <div className='fixed inset-0 z-50 sm:hidden flex justify-end'>
                {/* Full Viewport Dark Blurred Backdrop */}
                <motion.div
                  key='backdrop'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSidebarOpen(false)}
                  className='fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer'
                />

                {/* Sliding Drawer */}
                <motion.div
                  key='drawer'
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                  className='relative w-[82vw] max-w-xs h-full bg-white dark:bg-gray-950 text-gray-800 dark:text-white border-l border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto'
                >
                  <div>
                    {/* Drawer Header */}
                    <div className='flex items-center justify-between pb-6 border-b border-gray-100 dark:border-gray-800'>
                      <img
                        src={theme === 'dark' ? assets.logo_dark : assets.logo}
                        className='w-32'
                        alt='Agency.AI Logo'
                      />
                      <button
                        type='button'
                        onClick={() => setSidebarOpen(false)}
                        aria-label='Close navigation menu'
                        className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer'
                      >
                        <img src={assets.close_icon} alt='' className='w-4 dark:invert' />
                      </button>
                    </div>

                    {/* Navigation Links */}
                    <div className='flex flex-col gap-1 pt-4'>
                      {navLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={() => setSidebarOpen(false)}
                          className='py-2.5 px-3 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-primary dark:hover:text-primary transition-all flex items-center justify-between'
                        >
                          <span>{link.label}</span>
                          <span className='text-xs opacity-40'>&rarr;</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Drawer Footer CTA */}
                  <div className='pt-6 border-t border-gray-100 dark:border-gray-800'>
                    <a
                      href='#contact-us'
                      onClick={() => setSidebarOpen(false)}
                      className='w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:scale-102 transition-all cursor-pointer'
                    >
                      Connect with Us
                      <img src={assets.arrow_icon} width={14} alt='' />
                    </a>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default Navbar;
