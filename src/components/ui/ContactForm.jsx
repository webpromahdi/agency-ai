import { useState } from 'react';
import assets from '../../assets/assets';
import { motion, AnimatePresence } from 'motion/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <div className='w-full max-w-2xl'>
      <AnimatePresence mode='wait'>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className='p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-center flex flex-col items-center gap-3'
          >
            <div className='w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-2xl font-bold'>
              ✓
            </div>
            <h3 className='text-lg font-bold text-gray-900 dark:text-white'>Message Received!</h3>
            <p className='text-sm text-gray-600 dark:text-gray-300 max-w-md'>
              Thank you for reaching out. A partner from our team will review your project requirements and follow up within 24 hours.
            </p>
            <button
              type='button'
              onClick={() => setIsSubmitted(false)}
              className='mt-2 text-xs font-semibold text-primary hover:underline cursor-pointer'
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className='grid sm:grid-cols-4 gap-3 sm:gap-5 w-full'
          >
            <div className='sm:col-span-2'>
              <label htmlFor='contact-name' className='block mb-2 text-sm font-medium'>
                Your name
              </label>
              <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all'>
                <img src={assets.person_icon} alt='' className='w-5 h-5 opacity-60' />
                <input
                  id='contact-name'
                  name='name'
                  type='text'
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder='Enter your name'
                  className='w-full p-3 text-sm outline-none bg-transparent'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='contact-email' className='block mb-2 text-sm font-medium'>
                Email address
              </label>
              <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all'>
                <img src={assets.email_icon} alt='' className='w-5 h-5 opacity-60' />
                <input
                  id='contact-email'
                  name='email'
                  type='email'
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder='Enter your email'
                  className='w-full p-3 text-sm outline-none bg-transparent'
                />
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label htmlFor='contact-message' className='block mb-2 text-sm font-medium'>
                Message
              </label>
              <div className='rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all'>
                <textarea
                  id='contact-message'
                  name='message'
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder='Tell us about your project vision, goals, and timeline...'
                  className='w-full p-3 text-sm outline-none bg-transparent resize-none'
                />
              </div>
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-max flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all disabled:opacity-50'
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
              <img src={assets.arrow_icon} alt='' className='w-3.5' />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
