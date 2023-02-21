import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Hero.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Props {
   menuOpen: boolean;
   setMenuOpen: (state: boolean) => void;
}

function VanillaHamburger({ menuOpen, setMenuOpen }: Props) {
   return (
      <div className={clsx(styles['vanilla-hamburger'])}>
         <p
            className='text-primary text-3xl cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}
         >
            {menuOpen ? (
               <>
                  <FontAwesomeIcon icon={faTimes} />
               </>
            ) : (
               <>
                  <FontAwesomeIcon icon={faBars} />
               </>
            )}
         </p>
      </div>
   );
}

export default VanillaHamburger;
