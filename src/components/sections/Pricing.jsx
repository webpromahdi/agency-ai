import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Title from '../ui/Title';
import { pricingData } from '../../assets/assets';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  return (
    <section id='pricing' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white relative'>
      {/* Background ambient glow */}
      <div className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10' />

      <Title
        title='Transparent, Scalable Pricing'
        description='Flexible engagement models tailored for high-growth startups and established industry leaders.'
      />

      {/* Billing Cycle Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className='flex items-center gap-3 p-1.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm'
      >
        <button
          type='button'
          onClick={() => setBillingCycle('monthly')}
          className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
            billingCycle === 'monthly'
              ? 'bg-primary text-white shadow-md'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          Monthly Billing
        </button>
        <button
          type='button'
          onClick={() => setBillingCycle('yearly')}
          className={`relative px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
            billingCycle === 'yearly'
              ? 'bg-primary text-white shadow-md'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          Annual Billing
          <span className='text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'>
            Save 20%
          </span>
        </button>
      </motion.div>

      {/* Pricing Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mt-6 items-stretch'>
        {pricingData.map((plan, index) => {
          const isAnnual = billingCycle === 'yearly';
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-primary bg-white dark:bg-gray-900 shadow-2xl shadow-primary/15 md:-translate-y-2'
                  : 'border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 shadow-lg shadow-gray-100 dark:shadow-none hover:border-gray-300 dark:hover:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className='absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md'>
                  {plan.badge}
                </div>
              )}

              <div>
                {!plan.popular && (
                  <span className='inline-block text-xs font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3'>
                    {plan.badge}
                  </span>
                )}

                <h3 className='text-xl font-bold text-gray-900 dark:text-white mt-1'>
                  {plan.name}
                </h3>
                <p className='mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed min-h-[40px]'>
                  {plan.description}
                </p>

                {/* Pricing Number */}
                <div className='mt-6 mb-6 flex items-baseline gap-1'>
                  <span className='text-gray-500 dark:text-gray-400 text-lg font-bold'>$</span>
                  <AnimatePresence mode='wait'>
                    <motion.span
                      key={price}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className='text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight'
                    >
                      {price.toLocaleString()}
                    </motion.span>
                  </AnimatePresence>
                  <span className='text-xs text-gray-500 dark:text-gray-400 font-medium'>
                    /month
                  </span>
                </div>

                {isAnnual && (
                  <p className='text-xs text-emerald-600 dark:text-emerald-400 font-medium -mt-4 mb-4'>
                    Billed annually (${(price * 12).toLocaleString()}/yr)
                  </p>
                )}

                <hr className='border-gray-100 dark:border-gray-800 my-5' />

                {/* Features list */}
                <div className='space-y-3'>
                  <p className='text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500'>
                    Included Features:
                  </p>
                  <ul className='space-y-2.5 text-xs sm:text-sm'>
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className='flex items-start gap-2.5 text-gray-700 dark:text-gray-300'>
                        <svg
                          className='w-4 h-4 text-primary shrink-0 mt-0.5'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className='mt-8 pt-4'>
                <a
                  href='#contact-us'
                  className={`w-full block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                    plan.popular
                      ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-102'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
