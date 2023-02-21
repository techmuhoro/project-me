import React from 'react';
import styles from './Hero.module.scss';
import CustomHamburger from '@/components/CustomHamburger';
import VanillaHamburger from './VanillaHamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from '@/widgets/DarkModeToggle';

interface Props {
   menuOpen: boolean;
   setMenuOpen: (state: boolean) => void;
}

function Nav({ menuOpen, setMenuOpen }: Props) {
   return (
      <div className='w-full flex items-center pl-4 pr-5 py-4 md:pl-16 md:pr-20 text-black'>
         <div className=''>
            <p className='text-xl  font-bold relative z-50'>JM</p>
         </div>
         <div className='ml-auto hidden lg:block'>
            <div className='flex items-center'>
               <ul className='flex mr-10 font-mono-1 text-[0.94rem]'>
                  <li className='mr-8'>
                     {/* <span className=''>01.</span> */}
                     About
                     <span className='text-primary'>{'()'}</span>
                  </li>
                  <li className='mr-8'>
                     {/* <span>02.</span> */}
                     Experience
                     <span className='text-primary'>{'()'}</span>
                  </li>
                  <li className='mr-8'>
                     {/* <span>03.</span> */}
                     Projects
                     <span className='text-primary font-bold'>{'()'}</span>
                  </li>
                  <li className=''>
                     {/* <span>05.</span> */}
                     Contact
                     <span className='text-primary'>{'()'}</span>
                  </li>
               </ul>
               <div className='mr-8'>
                  <button className={`${styles['custom-btn']}  px-6 py-1.5`}>
                     Resume
                  </button>
               </div>
               <div className=''>
                  <DarkModeToggle />
               </div>
            </div>
         </div>
         <div className='ml-auto lg:hidden'>
            <div className='relative z-50'>
               <VanillaHamburger
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
               />
            </div>
         </div>
      </div>
   );
}

export default Nav;
