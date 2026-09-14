import assets from '../../assets/assets';
import { motion } from 'motion/react';
import Title from '../ui/Title';

const OurWork = () => {
  const workData = [
    {
      title: 'Mobile App User Acquisition',
      category: 'Mobile & Growth',
      description: 'Scaled an AI-assisted productivity app to 1.2M active installs in under 90 days with hyper-targeted paid acquisition.',
      image: assets.work_mobile_app,
    },
    {
      title: 'Real-time SaaS Telemetry Dashboard',
      category: 'Enterprise SaaS',
      description: 'Architected an intuitive, high-performance analytics interface handling millions of streaming metric datapoints.',
      image: assets.work_dashboard_management,
    },
    {
      title: 'Fitness Community Viral Launch',
      category: 'Consumer Tech',
      description: 'Multi-platform influencer campaigns and interactive onboarding driving a 340% surge in monthly subscriptions.',
      image: assets.work_fitness_app,
    },
  ];

  return (
    <motion.div initial='hidden' whileInView='visible' transition={{ staggerChildren: 0.2 }} viewport={{ once: true }} id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='Our latest work' description='Browse our portfolio of innovative digital projects that showcase creativity, performance, and results.'></Title>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl'>
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className='group flex flex-col justify-between rounded-2xl p-3 sm:p-4 border border-gray-100 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm shadow-xl shadow-gray-100 dark:shadow-none hover:shadow-2xl hover:border-primary/40 dark:hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer'
          >
            <div>
              <div className='relative overflow-hidden rounded-xl'>
                <img
                  src={work.image}
                  alt={work.title}
                  className='w-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl'
                />
                <span className='absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10'>
                  {work.category}
                </span>
              </div>
              <h3 className='mt-4 mb-2 text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors'>
                {work.title}
              </h3>
              <p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>
                {work.description}
              </p>
            </div>

            <div className='mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-xs font-semibold text-primary'>
              <span>View Case Study</span>
              <span className='group-hover:translate-x-1 transition-transform'>&rarr;</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
