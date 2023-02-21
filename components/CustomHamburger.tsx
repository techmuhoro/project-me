import React, { useState } from 'react';
import styles from './Hero.module.scss';
import clsx from 'clsx';

function CustomHamburger() {
   const [open, setOpen] = useState(false);
   return (
      <div
         className={styles.hamburger}
         onClick={(e) => {
            setOpen(!open);
         }}
      >
         <div
            className={clsx(styles.icon, styles['icon-1'], {
               [styles.slash]: open,
            })}
         ></div>
         <div
            className={clsx(styles.icon, styles['icon-2'], {
               [styles.hide]: open,
            })}
         ></div>
         <div
            className={clsx(styles.icon, styles['icon-3'], {
               [styles.slash]: open,
            })}
         ></div>
      </div>
   );
}

export default CustomHamburger;
