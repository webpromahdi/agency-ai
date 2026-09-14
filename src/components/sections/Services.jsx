import assets from '../../assets/assets';
import ServiceCard from '../ui/ServiceCard';
import Title from '../ui/Title';
import { motion } from 'motion/react';

const Services = () => {
  const serviceData = [
    {
      title: 'Performance Advertising',
      description: 'We craft high-converting, multi-channel ad campaigns across Google, Meta, and LinkedIn that maximize ROAS and accelerate pipeline.',
      icon: assets.ads_icon,
    },
    {
      title: 'Content Marketing',
      description: 'Data-driven content strategies and inbound assets that build market authority, engage high-intent buyers, and generate qualified leads.',
      icon: assets.marketing_icon,
    },
    {
      title: 'Editorial & Copywriting',
      description: 'Compelling brand messaging, conversion-focused landing page copy, and high-impact product storytelling tailored to your voice.',
      icon: assets.content_icon,
    },
    {
      title: 'Social Media Growth',
      description: 'Omnichannel social strategy, community engagement, and viral creative production that turn passive viewers into brand advocates.',
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
      className='relative overflow-hidden flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
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
