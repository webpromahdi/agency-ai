import assets from '../../assets/assets';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div id='hero' className='relative flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
      {/* Dark Mode Ambient Radial Glows */}
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden hidden dark:block'>
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='absolute top-10 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#5044E5]/40 via-indigo-500/25 to-sky-500/20 blur-[130px]'
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.2, 0.38, 0.2],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='absolute top-80 left-1/3 w-[450px] h-[350px] rounded-full bg-indigo-600/20 blur-[110px]'
        />
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} viewport={{ once: true }} className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
        <img src={assets.group_profile} className='w-20' />
        <p className='text-xs font-medium'>Trusted by 10k+ people</p>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'
      >
        Turning imagination into
        <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>digital</span>
        impact.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white max-w-4/5 sm:max-w-lg pb-3'
      >
        Creating meaningful connections and turning big ideas into interactive digital experiences.
      </motion.p>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 2 }} viewport={{ once: true }} className='relative'>
        <img src={assets.hero_img} className='w-full max-w-6xl' />
        <img src={assets.bgImage1} className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-10 dark:hidden' />
      </motion.div>
    </div>
  );
};

export default Hero;
