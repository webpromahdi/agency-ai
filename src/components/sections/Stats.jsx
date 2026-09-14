import { motion } from 'motion/react';
import { statsData } from '../../assets/assets';
import StatCounter from '../ui/StatCounter';

const Stats = () => {
  return (
    <section id='stats' className='px-4 sm:px-12 lg:px-24 xl:px-40 py-10 w-full overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='relative mx-auto max-w-6xl rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl p-6 sm:p-10 shadow-2xl shadow-indigo-500/5'
      >
        {/* Subtle decorative background gradient */}
        <div className='pointer-events-none absolute -top-24 -left-24 w-60 h-60 rounded-full bg-primary/10 blur-3xl' />
        <div className='pointer-events-none absolute -bottom-24 -right-24 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl' />

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 dark:divide-gray-800'>
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center text-center ${
                index > 0 ? 'pt-6 sm:pt-0' : ''
              } ${index % 2 === 1 ? 'sm:border-l-0 lg:border-l' : ''}`}
            >
              <div className='text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white flex items-center justify-center gap-0.5'>
                <span className='bg-gradient-to-r from-primary via-indigo-500 to-blue-500 bg-clip-text text-transparent'>
                  <StatCounter targetValue={stat.value} decimals={stat.decimals} />
                </span>
                <span className='text-primary text-2xl sm:text-3xl lg:text-4xl font-bold'>
                  {stat.suffix}
                </span>
              </div>
              <h3 className='mt-2 text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100'>
                {stat.label}
              </h3>
              <p className='mt-1 text-xs text-gray-500 dark:text-gray-400 max-w-[200px] leading-relaxed hidden sm:block'>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
