import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Title from '../ui/Title';
import { faqData } from '../../assets/assets';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id='faq'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Title
        title='Frequently Asked Questions'
        description='Everything you need to know about our collaboration model, process, and deliverables.'
      />

      <div className='w-full max-w-3xl flex flex-col gap-4 mt-4'>
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-primary/40 bg-white dark:bg-gray-900 shadow-xl shadow-primary/5'
                  : 'border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 hover:border-gray-300 dark:hover:border-gray-700'
              }`}
            >
              <button
                type='button'
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                className='w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none'
              >
                <span className='font-semibold text-sm sm:text-base text-gray-900 dark:text-white'>
                  {item.question}
                </span>

                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? 'bg-primary text-white rotate-180'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2.5}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key='content'
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className='px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800/80'>
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Direct Contact Prompt */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
        className='mt-6 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400'
      >
        Have a question that isn&apos;t answered here?{' '}
        <a
          href='#contact-us'
          className='text-primary font-semibold hover:underline inline-flex items-center gap-1'
        >
          Speak with our team &rarr;
        </a>
      </motion.div>
    </section>
  );
};

export default FAQ;
