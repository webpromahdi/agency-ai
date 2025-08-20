import assets from '../../assets/assets';
import ServiceCard from '../ui/ServiceCard';
import Title from '../ui/Title';
import { motion } from 'motion/react';

const Services = () => {
  const serviceData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage, and...',
      icon: assets.ads_icon,
    },
    {
      title: 'Content marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage and...',
      icon: assets.marketing_icon,
    },
    {
      title: 'Content writing',
      description: 'We turn bold ideas into powerful digital solutions that connect...',
      icon: assets.content_icon,
    },
    {
      title: 'Social media',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id='services'
      className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <img src={assets.bgImage2} alt='' className='absolute -top-110 -left-70 -z-1 dark:hidden' />

      <Title title='How can we help?' description='From strategy to execution, we craft digital solutions that move your business forward.'></Title>

      <div className='flex flex-col md:grid grid-cols-2'>
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index}></ServiceCard>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
