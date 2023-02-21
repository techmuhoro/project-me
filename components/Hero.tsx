import React, { useState } from 'react';
import styles from './Hero.module.scss';
import Nav from '@/components/Nav';
import MobileNav from './MobileNav';
import clsx from 'clsx';
import ScrollAnimation from '@/widgets/ScrollAnimation';

const Hero: React.FC = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const generetePattern = () => {
      const pattern = `10`;
      const paras = [];

      for (let i = 0; i <= 30; i++) {
         paras.push(<p className='mb-4 text-black'>{pattern.repeat(80)}</p>);
      }

      return paras;
   };
   return (
      <div className='h-screen w-screen relative mb-10 text-black'>
         <div
            className='h-full w-full overflow-hidden text-xl absolute top-0 left-0'
            style={{ letterSpacing: '26px', opacity: '0.025' }}
         >
            {generetePattern()}
         </div>
         <div className='h-full w-full absolute top-0 left-0 z-10'>
            <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className='pt-[75px] lg:pt-[100px]'>
               <div className='w-[93%] mx-auto md:w-[85%] lg:w-[75%]'>
                  <div className='lg:w-[80%]'>
                     <p className='text-primary font-mono-1'>Hi, my name is,</p>
                     <p className='capitalize text-[3rem] lg:text-[5rem] text-black font-bold'>
                        james Muhoro.
                     </p>
                     <p className='text-[2.2rem] lg:text-[2.9rem] font-semibold leading-10 mb-8'>
                        And i build things for the web.
                     </p>
                     <p className='mb-8 text-[1.1rem]'>
                        I am a software engineer responsible for designing and
                        build exceptional web applications. Loves to write
                        scalbale and maintainable code for both frontend and
                        backend applications.{' '}
                        <a className='text-primary' href='#'>
                           More
                        </a>
                     </p>
                     <div className='mb-8'>
                        <button
                           className={clsx(styles['custom-btn'], 'px-12 py-3')}
                        >
                           Checkout my projects
                        </button>
                     </div>
                     <>
                        <ScrollAnimation />
                     </>
                  </div>
               </div>
            </div>
            {menuOpen ? <MobileNav menuOpen={menuOpen} /> : ''}
         </div>
      </div>
   );
};

export default Hero;
