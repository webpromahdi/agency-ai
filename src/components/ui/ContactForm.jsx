import assets from '../../assets/assets';
import { motion } from 'motion/react';

const ContactForm = () => {
  return (
    <div>
      <motion.form initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className='grid sm:grid-cols-4 gap-3 sm:gap-5 max-w-2xl w-full'>
        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Your name</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.person_icon} alt='' />
            <input type='text' placeholder='Enter your name' className='w-full p-3 text-sm outline-none' />
          </div>
        </div>

        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Email id</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.email_icon} alt='' />
            <input type='text' placeholder='Enter your email' className='w-full p-3 text-sm outline-none' />
          </div>
        </div>

        <div className='sm:col-span-4'>
          <p className='mb-2 text-sm font-medium'>Message</p>
          <div className='pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <textarea rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border-gray-300 dark:border-gray-600' />
          </div>
        </div>

        <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
          Submit <img src={assets.arrow_icon} alt='' />
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
