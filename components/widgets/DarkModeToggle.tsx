import React from 'react';
import styles from './Widgets.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';

function DarkModeToggle() {
   const { theme, setTheme } = useTheme();
   console.log(theme);
   return (
      <div
         className={clsx(styles['dark-mode-toggle'])}
         onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
         <div
            className={clsx(styles['icon-ball'], {
               [styles['slide-left']]: theme === 'dark',
            })}
         >
            <span className='text-primary'>
               {theme === 'light' ? (
                  <>
                     <FontAwesomeIcon icon={faMoon} />
                  </>
               ) : (
                  <>
                     <FontAwesomeIcon icon={faSun} />
                  </>
               )}
            </span>
         </div>
      </div>
   );
}

export default DarkModeToggle;
