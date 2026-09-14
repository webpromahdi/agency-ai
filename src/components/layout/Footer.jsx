import assets from '../../assets/assets';
import { motion } from 'motion/react';

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='relative overflow-hidden bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'
    >
      {/* Dark Mode Ambient Radial Glow */}
      <div className='pointer-events-none absolute inset-0 -z-1 overflow-hidden hidden dark:block'>
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.38, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='absolute -bottom-20 right-1/4 w-[500px] h-[300px] rounded-full bg-gradient-to-tr from-primary/30 to-indigo-600/20 blur-[120px]'
        />
      </div>

      {/* footer top */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
          <img src={theme == 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-44' alt='' />

          <p className='max-w-md'>From strategy to execution, we craft digital solutions that move your business forward.</p>

          <ul className='flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm'>
            <li>
              <a className='hover:text-primary transition-colors' href='#hero'>
                Home
              </a>
            </li>
            <li>
              <a className='hover:text-primary transition-colors' href='#services'>
                Services
              </a>
            </li>
            <li>
              <a className='hover:text-primary transition-colors' href='#our-work'>
                Our Work
              </a>
            </li>
            <li>
              <a className='hover:text-primary transition-colors' href='#pricing'>
                Pricing
              </a>
            </li>
            <li>
              <a className='hover:text-primary transition-colors' href='#testimonials'>
                Reviews
              </a>
            </li>
            <li>
              <a className='hover:text-primary transition-colors' href='#faq'>
                FAQ
              </a>
            </li>
            <li>
              <a className='hover:text-primary transition-colors' href='#contact-us'>
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* newletter */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className='text-gray-700 dark:text-gray-400'>
          <h3 className='font-semibold'>Subscribe to our newsletter</h3>
          <p className='text-sm mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to our newsletter!');
            }}
            className='items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0'
          >
            <div className='flex gap-2 text-sm w-full'>
              <label htmlFor='newsletter-email' className='sr-only'>
                Email address
              </label>
              <input
                className='w-full p-3 text-sm font-medium outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary'
                placeholder='Enter your email'
                type='email'
                id='newsletter-email'
                name='newsletter-email'
                required
              />
              <button
                type='submit'
                className='bg-primary text-white rounded-lg px-6 font-semibold cursor-pointer hover:bg-primary/90 transition-colors shrink-0'
              >
                Subscribe
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <hr className='border-gray-300 dark:border-gray-600 my-6' />

      {/* footer bottom */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
        <p>Copyright 2025 © Mahdi - All Rights Reserved.</p>
        <div className='flex items-center justify-between gap-2'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
            className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors'
          >
            <img src={assets.facebook_icon} alt='' className='w-4 h-4' />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
            className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors'
          >
            <img src={assets.twitter_icon} alt='' className='w-4 h-4' />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
            className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors'
          >
            <img src={assets.instagram_icon} alt='' className='w-4 h-4' />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors'
          >
            <img src={assets.linkedin_icon} alt='' className='w-4 h-4' />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
