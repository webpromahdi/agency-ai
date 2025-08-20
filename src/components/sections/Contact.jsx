import Title from '../ui/Title';
import { motion } from 'motion/react';
import ContactForm from '../ui/ContactForm';

const Contact = () => {
  return (
    <motion.div initial='hidden' whileInView='visible' transition={{ staggerChildren: 0.2 }} viewport={{ once: true }} id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='Reach out to us' description='Ready to grow your brand? Let’s connect and build something exceptional together.'></Title>
      <ContactForm></ContactForm>
    </motion.div>
  );
};

export default Contact;
