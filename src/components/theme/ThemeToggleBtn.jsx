import { useEffect } from 'react';
import assets from '../../assets/assets';

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      type='button'
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className='cursor-pointer p-0.5 rounded-full focus:outline-hidden focus:ring-2 focus:ring-primary/50'
    >
      {theme === 'dark' ? (
        <img
          src={assets.sun_icon}
          className='size-8.5 p-1.5 border border-gray-500 rounded-full hover:bg-gray-800 transition-colors'
          alt=''
        />
      ) : (
        <img
          src={assets.moon_icon}
          className='size-8.5 p-1.5 border border-gray-400 rounded-full hover:bg-gray-100 transition-colors'
          alt=''
        />
      )}
    </button>
  );
};

export default ThemeToggleBtn;
