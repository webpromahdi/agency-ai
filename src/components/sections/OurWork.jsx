import assets from '../../assets/assets';
import { motion } from 'motion/react';
import Title from '../ui/Title';

const OurWork = () => {
  const workData = [
    {
      title: 'Mobile app marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect...',
      image: assets.work_mobile_app,
    },
    {
      title: 'Dashboard management',
      description: 'We turn bold ideas into powerful digital solutions that connect...',
      image: assets.work_dashboard_management,
    },
    {
      title: 'Fitness app promotion',
      description: 'We turn bold ideas into powerful digital solutions that connect...',
      image: assets.work_fitness_app,
    },
  ];

  return (
    <motion.div initial='hidden' whileInView='visible' transition={{ staggerChildren: 0.2 }} viewport={{ once: true }} id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='Our latest work' description='Browse our portfolio of innovative digital projects that showcase creativity, performance, and results.'></Title>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {workData.map((work, index) => (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }} key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
            <img src={work.image} className='w-full rounded-xl' />
            <h2 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h2>
            <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
