import React from 'react';
import styles from './Widgets.module.scss';
import clsx from 'clsx';

function ScrollAnimation() {
   return (
      <p
         className={clsx(
            styles['scroll-animation'],
            'border-black dark:border-white before:bg-black before:dark:bg-white'
         )}
      ></p>
   );
}

export default ScrollAnimation;
